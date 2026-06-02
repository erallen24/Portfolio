#pragma once

#include <string>
#include <vector>
#include <winsock2.h>
#include "Hashtable.h"
#include "ClientHandler.h"

class ChatServer;

class MessageHandler
{
private:
    char cmdChar;
    Hashtable& userDatabase;
    ChatServer* server;
    ClientHandler& clientHandler;

    void SendReply(SOCKET sock, const std::string& message);
    void HandleCommand(SOCKET sock, const std::string& command, const std::vector<std::string>& args);

public:
    MessageHandler(char prefix, Hashtable& db, ChatServer* srv, ClientHandler& ch);

    void ProcessPayload(SOCKET sock, const std::string& payload);
};