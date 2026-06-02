#include "MessageHandler.h"
#include "Logger.h"
#include <sstream>
#include <iostream>
#include <fstream>
#include "ChatServer.h"

MessageHandler::MessageHandler(char prefix, Hashtable& db, ChatServer* srv, ClientHandler& ch)
    : cmdChar(prefix), userDatabase(db), server(srv), clientHandler(ch) {
}

void MessageHandler::SendReply(SOCKET sock, const std::string& message)
{
    ChatServer::SendFramedMessage(sock, message);
}

#pragma region Command Processing
void MessageHandler::ProcessPayload(SOCKET sock, const std::string& payload)
{
    if (payload.empty()) return;

    if (payload[0] == cmdChar)
    {
        Logger::LogCommand("Socket " + std::to_string(sock) + " issued command: " + payload);

        std::stringstream ss(payload);
        std::string command;
        std::vector<std::string> args;
        std::string temp;

        ss >> command;
        while (ss >> temp) { args.push_back(temp); }

        HandleCommand(sock, command, args);
    }
    else
    {
        if (clientHandler.IsSocketActive(sock))
        {
            std::string senderName = clientHandler.GetUsername(sock);
            std::string broadcastStr = "[" + senderName + "]: " + payload;

            std::cout << "[PUBLIC] " << broadcastStr << "\n";

            Logger::LogPublicMessage(broadcastStr);
            server->BroadcastMessage(sock, broadcastStr);
        }
        else
        {
            SendReply(sock, "System: You must be logged in to chat. Use " + std::string(1, cmdChar) + "login or " + std::string(1, cmdChar) + "register.");
        }
    }
}

void MessageHandler::HandleCommand(SOCKET sock, const std::string& command, const std::vector<std::string>& args)
{
    std::string cmdStr = std::string(1, cmdChar);

    if (command == cmdStr + "help")
    {
        std::string helpMsg = "Commands:\n" +
            cmdStr + "help: Show this menu\n" +
            cmdStr + "register <user> <pass>: Create account\n" +
            cmdStr + "login <user> <pass>: Authenticate\n" +
            cmdStr + "logout: Disconnect from server\n" +
            cmdStr + "getlist: Show active users\n" +
            cmdStr + "getlog: Download public chat history\n" +
            cmdStr + "send <user> <msg>: Direct message";
        SendReply(sock, helpMsg);
    }
    else if (command == cmdStr + "register")
    {
        if (clientHandler.IsSocketActive(sock))
        {
            SendReply(sock, "Error: Already logged in. Please logout first.");
            return;
        }

        if (args.size() >= 2)
        {
            int currentUsers = userDatabase.GetUserCount();
            int maxCapacity = server->GetCapacity();

            // Translate 0-index to human-readable math (1, 2, 3...)
            std::cout << "[SYSTEM] Registration Attempt -> Processing User "
                << (currentUsers + 1) << " (Max Capacity: " << maxCapacity << ")\n";

            if (currentUsers >= maxCapacity)
            {
                std::cout << "[SYSTEM] Decline: Server has reached its true max capacity of " << maxCapacity << ".\n";
                SendReply(sock, "Decline: Server Full");
                return;
            }

            if (userDatabase.Insert(args[0], args[1]))
                SendReply(sock, "Success: Registered. Please use " + cmdStr + "login to enter chat.");
            else
                SendReply(sock, "Failure: User Exists");
        }
        else SendReply(sock, "Error: Invalid syntax. Use " + cmdStr + "register <user> <pass>");
    }
    else if (command == cmdStr + "login")
    {
        if (clientHandler.IsSocketActive(sock))
        {
            SendReply(sock, "Error: Already logged in.");
            return;
        }

        if (args.size() >= 2)
        {
            if (clientHandler.IsUserActive(args[0]))
            {
                SendReply(sock, "Failure: User already logged in elsewhere.");
                return;
            }

            if (userDatabase.Query(args[0], args[1]))
            {
                clientHandler.AddClient(sock, args[0]);
                SendReply(sock, "Success: Logged in as " + args[0]);
            }
            else SendReply(sock, "Failure: User not found or incorrect password.");
        }
        else SendReply(sock, "Error: Invalid syntax. Use " + cmdStr + "login <user> <pass>");
    }
    else if (command == cmdStr + "logout")
    {
        SendReply(sock, "Logging out...");
        clientHandler.RemoveClient(sock);
        server->DisconnectClient(sock);
    }
    else if (command == cmdStr + "getlist")
    {
        std::string listMsg = "--- Active Clients ---\n";
        for (auto const& clientPair : clientHandler.GetActiveClients())
        {
            listMsg += "- " + clientPair.second + "\n";
        }
        SendReply(sock, listMsg);
    }
    else if (command == cmdStr + "getlog")
    {
        std::ifstream logFile("public_messages.log");
        if (logFile.is_open())
        {
            // Export client specific log file
            std::string username = clientHandler.GetUsername(sock);
            std::string clientLogFilename = "client_" + username + ".log";
            std::ofstream clientDiskLog(clientLogFilename);

            SendReply(sock, "--- Public Chat Log ---");
            if (clientDiskLog.is_open()) clientDiskLog << "--- Public Chat Log ---\n";

            std::string line;
            bool isEmpty = true;

            while (std::getline(logFile, line))
            {
                if (!line.empty())
                {
                    isEmpty = false;

                    if (clientDiskLog.is_open()) clientDiskLog << line << "\n";

                    while (line.length() > 250)
                    {
                        SendReply(sock, line.substr(0, 250));
                        line = line.substr(250);
                    }
                    if (!line.empty())
                    {
                        SendReply(sock, line);
                    }
                }
            }

            if (isEmpty)
            {
                SendReply(sock, "Log is currently empty.");
                if (clientDiskLog.is_open()) clientDiskLog << "Log is currently empty.\n";
            }

            SendReply(sock, "-----------------------");
            if (clientDiskLog.is_open()) clientDiskLog << "-----------------------\n";
        }
        else SendReply(sock, "Error: Log file unavailable.");
    }
    else if (command == cmdStr + "send")
    {
        if (args.size() >= 2)
        {
            std::string targetUser = args[0];
            std::string dmMsg = "";
            for (size_t i = 1; i < args.size(); ++i)
            {
                dmMsg += args[i] + (i == args.size() - 1 ? "" : " ");
            }

            SOCKET targetSock = clientHandler.GetSocketForUser(targetUser);

            if (targetSock != INVALID_SOCKET)
            {
                std::string senderName = clientHandler.GetUsername(sock);
                SendReply(targetSock, "[DM from " + senderName + "]: " + dmMsg);
                SendReply(sock, "[DM to " + targetUser + " sent]");
            }
            else SendReply(sock, "Error: User '" + targetUser + "' not found or not logged in.");
        }
        else SendReply(sock, "Error: Use " + cmdStr + "send <username> <message>");
    }
    else
    {
        SendReply(sock, "Error: Unrecognized command. Type " + cmdStr + "help.");
    }
}
#pragma endregion