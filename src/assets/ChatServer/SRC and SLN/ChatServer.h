#pragma once

#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>
#include <iostream>
#include "Hashtable.h"
#include "ClientHandler.h"
#include "MessageHandler.h"
#include "UDPBroadcaster.h"

class ChatServer
{
private:
    int port;
    int capacity;
    char cmdChar;

    SOCKET masterSocket;
    fd_set masterSet;
    Hashtable userDatabase;
    ClientHandler clientHandler;
    MessageHandler messageHandler;
	UDPBroadcaster udpBroadcaster;

    void ReceiveFramedMessage(SOCKET sock);
    void CloseAndCleanupSocket(SOCKET sock, bool removeFromSet = true);

public:
    int GetCapacity() const { return capacity; }

    ChatServer(int port, int capacity, char cmdChar);
    ~ChatServer();

    bool Initialize();
    void Run();
    void Stop();

    static void SendFramedMessage(SOCKET sock, const std::string& message);
    void BroadcastMessage(SOCKET senderSocket, const std::string& message);
    void DisconnectClient(SOCKET sock);
};