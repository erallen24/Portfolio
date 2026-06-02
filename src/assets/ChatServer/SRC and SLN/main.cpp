#include <winsock2.h> 
#include <ws2tcpip.h> 
#include <iostream>
#include <string>
#include "ChatServer.h"

#pragma comment(lib, "Ws2_32.lib")

#pragma region Configuration Helpers
struct ServerConfig
{
    int port;
    int capacity;
    char cmdChar;
};

ServerConfig GetUserConfiguration()
{
    ServerConfig config;
    std::cout << "=== CNE CHAT SERVER STARTUP ===\n";
    std::cout << "Enter TCP Port: ";
    std::cin >> config.port;
    std::cout << "Enter Chat Capacity: ";
    std::cin >> config.capacity;
    std::cout << "Enter Command Character: ";
    std::cin >> config.cmdChar;
    std::cout << "-------------------------------\n";
    return config;
}
#pragma endregion

#pragma region Networking Helpers
void DisplayNetworkInfo(int port)
{
    char hostname[256];

    if (gethostname(hostname, sizeof(hostname)) != 0)
    {
        std::cerr << "[ERROR] gethostname failed.\n";
        return;
    }

    std::cout << "[SYSTEM] Hostname: " << hostname << "\n";

    struct addrinfo hints, * res, * p;
    ZeroMemory(&hints, sizeof(hints));
    hints.ai_family = AF_UNSPEC;
    hints.ai_socktype = SOCK_STREAM;

    if (getaddrinfo(hostname, std::to_string(port).c_str(), &hints, &res) == 0)
    {
        for (p = res; p != NULL; p = p->ai_next)
        {
            void* addr;
            std::string ipVer;
            char ipstr[INET6_ADDRSTRLEN];

            if (p->ai_family == AF_INET)
            {
                struct sockaddr_in* ipv4 = (struct sockaddr_in*)p->ai_addr;
                addr = &(ipv4->sin_addr);
                ipVer = "IPv4";
            }
            else
            {
                struct sockaddr_in6* ipv6 = (struct sockaddr_in6*)p->ai_addr;
                addr = &(ipv6->sin6_addr);
                ipVer = "IPv6";
            }

            inet_ntop(p->ai_family, addr, ipstr, sizeof(ipstr));
            std::cout << "[SYSTEM] " << ipVer << " Address: " << ipstr << "\n";
        }
        freeaddrinfo(res);
    }
    else
    {
        std::cerr << "[ERROR] getaddrinfo failed.\n";
    }
    std::cout << "-------------------------------\n";
}
#pragma endregion

int main()
{
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
    {
        std::cerr << "WSAStartup failed.\n";
        return 1;
    }

    ServerConfig config = GetUserConfiguration();
    DisplayNetworkInfo(config.port);

    std::cout << "[SYSTEM] Awaiting Server Initialization...\n";
    ChatServer server(config.port, config.capacity, config.cmdChar);

    if (server.Initialize())
    {
        server.Run();
    }
    else
    {
        std::cerr << "[SYSTEM] Server failed to initialize. Shutting down.\n";
    }

    WSACleanup();
    return 0;
}
