import profilePic from "@/assets/Evan_pic.png";
import theBridgeLogo from "@/assets/TheBridge_Logo.png";

// Pictures and Videos for AddVenture
import addVentureLogo from "@/assets/AddVenture/Add-VentureLogo.png";
import addVenture1 from "@/assets/AddVenture/AddVentureScreenshot1.png"; 
import addVenture2 from "@/assets/AddVenture/AddVentureScreenshot2.png"; 
import addVenture3 from "@/assets/AddVenture/AddVentureScreenshot3.png";
import addVenture4 from "@/assets/AddVenture/AddVentureScreenshot4.png";
import addVenture5 from "@/assets/AddVenture/AddVentureScreenshot5.png";
import addVentureGameplay from "@/assets/AddVenture/AddVentureVideo1.mp4"; 

// Pictures and Videos for Conways Game of Life
import GameOfLifeLogo from "@/assets/GameOfLife/GameOfLifeLogo.png";
import GameOfLife1 from "@/assets/GameOfLife/GameOfLifeScreenshot1.png";
import GameOfLife2 from "@/assets/GameOfLife/GameOfLifeScreenshot2.png";
import GameOfLife3 from "@/assets/GameOfLife/GameOfLifeScreenshot3.png";
import GameOfLife4 from "@/assets/GameOfLife/GameOfLifeScreenshot4.png";
import GameOfLife5 from "@/assets/GameOfLife/GameOfLifeScreenshot5.png";
import GameOfLifeVideo from "@/assets/GameOfLife/GameOfLifeDemo.mp4";

import ChatServerLogo from "@/assets/ChatServer/ChatServerLogo.png";
import ChatServer1 from "@/assets/ChatServer/ChatServer1.png";
import ChatServer2 from "@/assets/ChatServer/ChatServer2.png";
import ChatServer3 from "@/assets/ChatServer/ChatServer3.png";
import ChatServerDemo from "@/assets/ChatServer/ChatServerDemo.mp4";

import ProjectCADELogo from "@/assets/ProjectCADE/ProjectCADELogo.png";
import ProjectCADE1 from "@/assets/ProjectCADE/ProjectCADE1.png";
import ProjectCADE2 from "@/assets/ProjectCADE/ProjectCADE2.png";
import ProjectCADE3 from "@/assets/ProjectCADE/ProjectCADE3.png";
import ProjectCADE4 from "@/assets/ProjectCADE/ProjectCADE4.png";
import ProjectCADEdemo from "@/assets/ProjectCADE/ProjectCADEdemo1.mp4";

import resumePDF from "@/assets/EvanAllen_Resume.pdf";




export const profileData = {
  name: "Evan Allen",
  image: profilePic,
  roles: ["Game Developer", "Software Engineer", "System Architect", "Tech Innovator"],
  experience: "5+ Years Experience",
  availability: "Available for hire",
  resume: resumePDF,
  socials: {
    github: "https://github.com/erallen24",
    linkedin: "https://www.linkedin.com/in/evan-allen-game-dev/",
    email: "mailto:contact@evanallen.dev",
    discord: "@evanallen_70873", 
    discordLink: "https://discordapp.com/users/YOUR_NUMERIC_DISCORD_ID" 
  },
  about: [
    "I am a passionate Game & Software Developer specializing in bridging the gap between immersive 3D experiences and scalable web platforms.",
    "With a strong foundation in C++, Unity/Unreal, and React, I thrive on building high-performance applications that deliver exceptional user experiences."
  ]
};

export const techStackData = [
  { name: "Game Engines", techs: ["Unity", "Unreal Engine 5", "Custom Engine Creation"], color: "from-purple-500/20 to-purple-500/5" },
  { name: "Languages", techs: ["C++", "C#", "Python", "Swift", "JavaScript"], color: "from-blue-500/20 to-blue-500/5" },
  { name: "Frontend & UI", techs: ["React", "Flet", "Tailwind", "SASS"], color: "from-green-500/20 to-green-500/5" },
  { name: "Backend", techs: ["Node.js", "SQL", "REST APIs"], color: "from-orange-500/20 to-orange-500/5" },
  { name: "Architecture", techs: ["Systems Programming", "Custom Physics"], color: "from-pink-500/20 to-pink-500/5" },
];

export const additionalSkills = [
  "Supabase",
  "Vulkan API",
  "Linux Environments",
  "Git / Version Control",
  "Computer Networks",
  "Operating Systems",
  "Statistical Analysis",
  "Agile Methodologies"
];

export const projectsData = [
  {
    title: "Add-Venture",
    slug: "add-venture",
    type: "Engine Architecture",
    description: "A 2.5D action-exploration remake of the 1981 classic Venture featuring custom collision systems.",
    image: addVentureLogo,
    tech: ["C++", "Custom Collision", "2.5D"],
    metrics: { status: "Released", genre: "Arcade/Adventure" },
    extendedDetails: {
      role: "Solo Developer",
      techStack: ["C++", "Custom Engine", "Vulkan API"],
      downloadUrl: "../../DownloadLinks/Add-Venture_Installer.exe",
      media: [
        { type: "image", url: addVentureLogo, alt: "Add-Venture Text Logo" },
        { type: "video", url:"https://www.youtube.com/embed/iYOfyVMvCaQ?autoplay=1&mute=1" },
        { type: "image", url: addVenture1, alt: "In-Game Screenshot" },
        { type: "image", url: addVenture2, alt: "In-Game Screenshot" },
        { type: "image", url: addVenture3, alt: "In-Game Screenshot" },
        { type: "image", url: addVenture4, alt: "In-Game Screenshot" },
        { type: "image", url: addVenture5, alt: "In-Game Screenshot" }
      ],
      achievements: [
        "Engineered a custom 2.5D collision pipeline entirely in C++",
        "Designed scalable level architecture and memory management",
        "Replicated arcade-authentic movement and game loops"
      ]
    }
  },
  {
    title: "Project C.A.D.E.",
    slug: "project-cade",
    type: "Game Development",
    description: "Single Player FPS game balancing stealth and combat gameplay.",
    image: ProjectCADELogo,
    tech: ["Unity", "C#", "Custom Character Controller"],
    metrics: { status: "Beta", genre: "Stealth/Action" },
    extendedDetails: {
      role: "Gameplay Programmer",
      techStack: ["Unity", "C#"],
      repoUrl: "https://github.com/dannyjace/PROJECT-C.A.D.E.",
      downloadUrl: "../../DownloadLinks/Project C.A.D.E. Installer.exe",
      media: [
        { type: "video", url: "https://www.youtube.com/embed/blobniemj4w?autoplay=1&mute=1", alt: "Project C.A.D.E. Gameplay Demo" },
        { type: "image", url: ProjectCADE1, alt: "Gameplay Screenshot 1" },
        { type: "image", url: ProjectCADE2, alt: "Gameplay Screenshot 2" },
        { type: "image", url: ProjectCADE3, alt: "Gameplay Screenshot 3" },
        { type: "image", url: ProjectCADE4, alt: "Gameplay Screenshot 4" },
      ],
      achievements: [
        "Built a robust state-machine for seamless stealth-to-combat transitions",
        "Developed custom character controllers in C# for precise player movement",
        "Implemented enemy AI behavior trees for dynamic patrolling and tracking"
      ]
    }
  },
  {
    title: "Conways: Game of Life",
    slug: "conways-game-of-life",
    type: "Simulation",
    description: "Conways game of life ",
    image: GameOfLifeLogo,
    tech: ["C++", "wxWidgets"],
    metrics: { status: "Complete", genre: "Simulation" },
    extendedDetails: {
      role: "",
      techStack: ["C++", "wxWidgets"],
      downloadUrl: "../../DownloadLinks/GameOfLife.exe",
      media: [
        { type: "video", url: "https://www.youtube.com/embed/XycjV6O-uV8?autoplay=1&mute=1", alt: "Conways Game of Life Gameplay Demo" },
        { type: "image", url: GameOfLife1, alt: "Conways Game of Life Screenshot 1" },
        { type: "image", url: GameOfLife2, alt: "Conways Game of Life Screenshot 2" },
        { type: "image", url: GameOfLife3, alt: "Conways Game of Life Screenshot 3" },
        { type: "image", url: GameOfLife4, alt: "Conways Game of Life Screenshot 4" },
        { type: "image", url: GameOfLife5, alt: "Conways Game of Life Screenshot 5" }
        
      ],
      achievements: [
        "Implemented a high-performance cellular automaton simulation in C++",
        "Designed an intuitive GUI using wxWidgets for real-time interaction",
        "Optimized the simulation for large grids with efficient memory management"
      ]
    }
  },
  {
    title: "Chat Server",
    slug: "chat-server",
    type: "Software Engineering",
    description: "A simple chat server implemented in C++ using socket programming, allowing multiple clients to connect and communicate in real-time.",
    image: ChatServerLogo,
    tech: ["C++", "WinSock API"],
    metrics: { status: "Complete", genre: "Simulation" },
    extendedDetails: {
      role: "",
      techStack: ["C++", "WinSock API"],
       downloadUrl: "../../DownloadLinks/SRC and SLN.zip",
      media: [
        { type: "video", url: "https://www.youtube.com/embed/8AEbx9e8RNU?autoplay=1&mute=1", alt: "Chat Server Demo" },
        { type: "image", url: ChatServer1, alt: "Chat Server Screenshot 1" },
        { type: "image", url: ChatServer2, alt: "Chat Server Screenshot 2" },
        { type: "image", url: ChatServer3, alt: "Chat Server Screenshot 3" }
      ],
      achievements: [
        "Implemented a multi-threaded chat server using C++ and WinSock API",
        "Designed a simple client application for real-time communication",
        "Handled concurrent client connections with efficient thread management and synchronization"
      ]
    }
  },
   {
    title: "The Bridge",
    slug: "the-bridge",
    type: "Software Engineering",
    description: "Cross-platform life management application featuring secure API authentication for financial and schedule tracking.",
    image: theBridgeLogo,
    tech: ["Python", "Flet", "Plaid API", "Google API"],
    metrics: { status: "In production", genre: "Productivity App" },
    extendedDetails: {
      role: "Full Stack Developer",
      techStack: ["Python", "Flet", "Supabase"],
      media: [
        { type: "image", url: theBridgeLogo, alt: "The Bridge App Icon" },
        { type: "image", url: "https://placehold.co/800x450/1a1a1a/60a5fa?text=Plaid+API+Dashboard", alt: "Financial Dashboard View" },
        { type: "image", url: "https://placehold.co/800x450/1a1a1a/60a5fa?text=Supabase+Auth+Flow", alt: "Authentication Flow View" }
      ],
      achievements: [
        "Architected a cross-platform UI using Python and Flet",
        "Integrated the Plaid API for secure, real-time financial data fetching",
        "Designed a centralized Supabase backend for secure user authentication"
      ]
    }
  },
];