#include "ChatServer.h"
#include <thread>

ChatServer::ChatServer(int port, int capacity, char cmdChar)
    : port(port), capacity(capacity), cmdChar(cmdChar), masterSocket(INVALID_SOCKET),
    messageHandler(cmdChar, userDatabase, this, clientHandler), udpBroadcaster(port) 
{
    FD_ZERO(&masterSet);
}

ChatServer::~ChatServer()
{
    Stop();
}

#pragma region Helpers
void ChatServer::DisconnectClient(SOCKET sock)
{
    std::cout << "[SYSTEM] Gracefully disconnecting socket " << sock << " (Logout)\n";
    CloseAndCleanupSocket(sock, true);
}

void ChatServer::CloseAndCleanupSocket(SOCKET sock, bool removeFromSet)
{
    shutdown(sock, SD_BOTH);
    closesocket(sock);
    if (removeFromSet)
    {
        FD_CLR(sock, &masterSet);
    }
}
#pragma endregion

#pragma region Lifecycle
bool ChatServer::Initialize()
{
    masterSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (masterSocket == INVALID_SOCKET) { return false; }

    BOOL optval = TRUE;
    setsockopt(masterSocket, SOL_SOCKET, SO_REUSEADDR, (char*)&optval, sizeof(optval));

    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(port);

    if (bind(masterSocket, (SOCKADDR*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) return false;
    if (listen(masterSocket, SOMAXCONN) == SOCKET_ERROR) return false;

    FD_SET(masterSocket, &masterSet);
    std::cout << "[SYSTEM] Server Listening on Port " << port << "...\n";

    udpBroadcaster.Start();

    return true;
}

void ChatServer::Run()
{
    bool server_is_active = true;

    std::thread inputThread([this]()
        {
            std::string input;
            while (true)
            {
                std::getline(std::cin, input);
                if (!input.empty())
                {
                    std::string msg = "[SERVER ADMIN]: " + input;
                    this->BroadcastMessage(INVALID_SOCKET, msg);
                }
            }
        });
    inputThread.detach();

    while (server_is_active)
    {
        fd_set readySet = masterSet;
        int socketCount = select(0, &readySet, nullptr, nullptr, nullptr);

        if (socketCount == SOCKET_ERROR) break;

        for (int i = 0; i < readySet.fd_count; i++)
        {
            SOCKET sock = readySet.fd_array[i];

            if (sock == masterSocket)
            {
                SOCKET clientSocket = accept(masterSocket, nullptr, nullptr);
                if (clientSocket != INVALID_SOCKET)
                {
                    FD_SET(clientSocket, &masterSet);
                    std::cout << "[SYSTEM] New client connected. Socket ID: " << clientSocket << "\n";

                    std::string welcome = "Welcome! Use '" + std::string(1, cmdChar) + "help' for commands.";
                    SendFramedMessage(clientSocket, welcome);
                }
            }
            else
            {
                ReceiveFramedMessage(sock);
            }
        }
    }
}

void ChatServer::Stop()
{
    udpBroadcaster.Stop();

    for (u_int i = 0; i < masterSet.fd_count; i++)
    {
        SOCKET sock = masterSet.fd_array[i];
        if (sock != masterSocket)
        {
            CloseAndCleanupSocket(sock, false);
        }
    }

    if (masterSocket != INVALID_SOCKET) closesocket(masterSocket);
    FD_ZERO(&masterSet);
}
#pragma endregion

#pragma region Message Handlers
void ChatServer::SendFramedMessage(SOCKET sock, const std::string& message)
{
    std::string terminatedMsg = message + '\0';
    unsigned char length = static_cast<unsigned char>(terminatedMsg.length());

    send(sock, reinterpret_cast<char*>(&length), 1, 0);

    if (length > 0)
    {
        send(sock, terminatedMsg.c_str(), length, 0);
    }
}

void ChatServer::BroadcastMessage(SOCKET senderSocket, const std::string& message)
{
    for (u_int i = 0; i < masterSet.fd_count; i++)
    {
        SOCKET outSock = masterSet.fd_array[i];

        if (outSock != masterSocket && outSock != senderSocket)
        {
            SendFramedMessage(outSock, message);
        }
    }
}

void ChatServer::ReceiveFramedMessage(SOCKET sock)
{
    unsigned char length = 0;
    int bytesReceived = recv(sock, reinterpret_cast<char*>(&length), 1, 0);

    if (bytesReceived <= 0)
    {
        std::cout << "[SYSTEM] Client disconnected abruptly. Socket ID: " << sock << "\n";
        clientHandler.RemoveClient(sock);
        CloseAndCleanupSocket(sock, true);
        return;
    }

    if (length > 0)
    {
        char* buffer = new char[length];
        bytesReceived = recv(sock, buffer, length, 0);

        if (bytesReceived > 0)
        {
            std::string payload(buffer);
            messageHandler.ProcessPayload(sock, payload);
        }
        delete[] buffer;
    }
}
#pragma endregion

