#include "ClientHandler.h"

void ClientHandler::AddClient(SOCKET sock, const std::string& username)
{
    activeClients[sock] = username;
}

void ClientHandler::RemoveClient(SOCKET sock)
{
    activeClients.erase(sock);
}

bool ClientHandler::IsSocketActive(SOCKET sock) const
{
    return activeClients.find(sock) != activeClients.end();
}

bool ClientHandler::IsUserActive(const std::string& username) const
{
    for (auto const& clientPair : activeClients)
    {
        if (clientPair.second == username) return true;
    }
    return false;
}

std::string ClientHandler::GetUsername(SOCKET sock) const
{
    auto it = activeClients.find(sock);
    if (it != activeClients.end()) return it->second;
    return "Guest";
}

SOCKET ClientHandler::GetSocketForUser(const std::string& username) const
{
    for (auto const& clientPair : activeClients)
    {
        if (clientPair.second == username) return clientPair.first;
    }
    return INVALID_SOCKET;
}

const std::map<SOCKET, std::string>& ClientHandler::GetActiveClients() const
{
    return activeClients;
}