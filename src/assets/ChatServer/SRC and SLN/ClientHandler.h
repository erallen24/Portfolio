#pragma once

#include <string>
#include <map>
#include <winsock2.h>

class ClientHandler
{
private:
    std::map<SOCKET, std::string> activeClients;

public:
    void AddClient(SOCKET sock, const std::string& username);
    void RemoveClient(SOCKET sock);

    bool IsSocketActive(SOCKET sock) const;
    bool IsUserActive(const std::string& username) const;

    std::string GetUsername(SOCKET sock) const;
    SOCKET GetSocketForUser(const std::string& username) const;

    const std::map<SOCKET, std::string>& GetActiveClients() const;
};