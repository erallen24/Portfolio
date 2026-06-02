#pragma once

#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>
#include <thread>
#include <atomic>
#include <iostream>

class UDPBroadcaster
{
private:
    int serverPort;
    SOCKET udpSocket;
    std::thread broadcastThread;
    std::atomic<bool> isBroadcasting;

    void BroadcastLoop();
    std::string GetLocalIP();

public:
    UDPBroadcaster(int port);
    ~UDPBroadcaster();

    bool Start();
    void Stop();

};
