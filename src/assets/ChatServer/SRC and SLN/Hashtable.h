#pragma once
#include <string>

struct UserNode
{

    std::string username;
    std::string password;
    UserNode* next;

    UserNode(std::string u, std::string p) : username(u), password(p), next(nullptr) {}
};

class Hashtable
{
private:

    static const int tableSize = 100;
    UserNode* table[tableSize];

    int HashFunction(const std::string& key);

    UserNode* FindUser(const std::string& username);

public:
    Hashtable();
    ~Hashtable();

    bool Insert(const std::string& username, const std::string& password);
    bool Query(const std::string& username, const std::string& password);

    int GetUserCount() const;
};
