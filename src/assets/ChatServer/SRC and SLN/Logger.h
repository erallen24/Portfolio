#pragma once

#include <string>

class Logger
{
public:
    static void LogCommand(const std::string& log);
    static void LogPublicMessage(const std::string& log);
};