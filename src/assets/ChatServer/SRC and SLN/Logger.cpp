#include "Logger.h"
#include <fstream>

void Logger::LogCommand(const std::string& log)
{
    std::ofstream file("commands.log", std::ios::app);
    if (file.is_open()) file << log << "\n";
}

void Logger::LogPublicMessage(const std::string& log)
{
    std::ofstream file("public_messages.log", std::ios::app);
    if (file.is_open()) file << log << "\n";
}