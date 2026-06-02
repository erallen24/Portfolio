#include "Hashtable.h"

Hashtable::Hashtable()
{
    for (int i = 0; i < tableSize; ++i)
    {
        table[i] = nullptr;
    }
}

Hashtable::~Hashtable()
{
    for (int i = 0; i < tableSize; ++i)
    {
        UserNode* current = table[i];

        while (current != nullptr)
        {
            UserNode* prev = current;
            current = current->next;
            delete prev;
        }

        table[i] = nullptr;
    }
}

int Hashtable::HashFunction(const std::string& key)
{
    unsigned long hash = 5381;

    for (char c : key)
    {
        hash = ((hash << 5) + hash) + c;
    }

    return hash % tableSize;
}

UserNode* Hashtable::FindUser(const std::string& username)
{
    int index = HashFunction(username);
    UserNode* current = table[index];

    while (current != nullptr)
    {
        if (current->username == username)
        {
            return current;
        }

        current = current->next;
    }
    return nullptr;
}

bool Hashtable::Insert(const std::string& username, const std::string& password)
{

    if (FindUser(username) != nullptr)
    {
        return false;
    }

    int index = HashFunction(username);
    UserNode* newNode = new UserNode(username, password);
    newNode->next = table[index];
    table[index] = newNode;

    return true;
}

bool Hashtable::Query(const std::string& username, const std::string& password)
{
    UserNode* user = FindUser(username);

    return (user != nullptr && user->password == password);
}

int Hashtable::GetUserCount() const
{
    int count = 0;
    for (int i = 0; i < tableSize; ++i)
    {
        UserNode* current = table[i];
        while (current != nullptr)
        {
            count++;
            current = current->next;
        }
    }
    return count;
}
