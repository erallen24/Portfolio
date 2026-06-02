#include "UDPBroadcaster.h"

UDPBroadcaster::UDPBroadcaster(int port)
    : serverPort(port), udpSocket(INVALID_SOCKET), isBroadcasting(false) {
}

UDPBroadcaster::~UDPBroadcaster()
{
    Stop();
}

bool UDPBroadcaster::Start()
{
    udpSocket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (udpSocket == INVALID_SOCKET)
    {
        std::cerr << "[UDP] Failed to create broadcast socket.\n";
        return false;
    }

    BOOL broadcastPermission = TRUE;
    if (setsockopt(udpSocket, SOL_SOCKET, SO_BROADCAST, (char*)&broadcastPermission, sizeof(broadcastPermission)) == SOCKET_ERROR)
    {
        std::cerr << "[UDP] Failed to set broadcast option.\n";
        closesocket(udpSocket);
        return false;
    }

    isBroadcasting = true;
    broadcastThread = std::thread(&UDPBroadcaster::BroadcastLoop, this);

    std::cout << "[SYSTEM] UDP Broadcaster thread initialized.\n";

    return true;
}

void UDPBroadcaster::Stop()
{
    isBroadcasting = false;

    if (broadcastThread.joinable())
    {
        broadcastThread.join();
    }

    if (udpSocket != INVALID_SOCKET)
    {
        closesocket(udpSocket);
        udpSocket = INVALID_SOCKET;
    }
}

std::string UDPBroadcaster::GetLocalIP()
{
    char hostname[256];
    if (gethostname(hostname, sizeof(hostname)) == 0)
    {
        struct addrinfo hints, * res;
        ZeroMemory(&hints, sizeof(hints));
        hints.ai_family = AF_INET; 

        if (getaddrinfo(hostname, nullptr, &hints, &res) == 0)
        {
            struct sockaddr_in* ipv4 = (struct sockaddr_in*)res->ai_addr;
            char ipstr[INET6_ADDRSTRLEN];
            inet_ntop(res->ai_family, &(ipv4->sin_addr), ipstr, sizeof(ipstr));
            freeaddrinfo(res);
            return std::string(ipstr);
        }
    }
    return "127.0.0.1"; 
}

void UDPBroadcaster::BroadcastLoop()
{
    sockaddr_in broadcastAddr;
    broadcastAddr.sin_family = AF_INET;
    broadcastAddr.sin_port = htons(serverPort);
    broadcastAddr.sin_addr.s_addr = INADDR_BROADCAST; 

    
    std::string ipAddress = GetLocalIP();
    std::string broadcastMessage = "CNE_SERVER|" + ipAddress + ":" + std::to_string(serverPort);

    while (isBroadcasting)
    {
        int sendResult = sendto(udpSocket, broadcastMessage.c_str(), static_cast<int>(broadcastMessage.length()), 0, (sockaddr*)&broadcastAddr, sizeof(broadcastAddr));

        if (sendResult == SOCKET_ERROR)
        {
            if (isBroadcasting) std::cerr << "[UDP] Broadcast failed to send.\n";
        }

        std::this_thread::sleep_for(std::chrono::seconds(5));
    }
}
