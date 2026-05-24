import profilePic from "@/assets/Evan_pic.png";
import projectCADELogo from "@/assets/ProjectCADELogo.png";
import theBridgeLogo from "@/assets/TheBridge_Logo.png";

// Pictures are inside the AddVenture folder
import addVentureLogo from "@/assets/AddVenture/Add-VentureLogo.png";
import addVenture1 from "@/assets/AddVenture/AddVentureScreenshot1.png"; 
import addVenture2 from "@/assets/AddVenture/AddVentureScreenshot2.png"; 
import addVenture3 from "@/assets/AddVenture/AddVentureScreenshot3.png";
import addVenture4 from "@/assets/AddVenture/AddVentureScreenshot4.png";
import addVenture5 from "@/assets/AddVenture/AddVentureScreenshot5.png";

// Video is in the main assets folder
import addVentureGameplay from "@/assets/AddVentureVideo1.mp4"; 

export const profileData = {
  name: "Evan Allen",
  image: profilePic,
  roles: ["Game Developer", "Software Engineer", "System Architect", "Tech Innovator"],
  experience: "5+ Years Experience",
  availability: "Available for hire",
  resume: "/Evan_Allen_Resume.pdf", 
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
      repoUrl: "https://github.com/erallen24/add-venture",
      downloadUrl: "@/assets/Add-Venture_Installer.zip",
      media: [
        { type: "image", url: addVentureLogo, alt: "Add-Venture Text Logo" },
        { type: "video", url: addVentureGameplay, alt: "Gameplay Demo" },
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
    image: projectCADELogo,
    tech: ["Unity", "C#", "Custom Character Controller"],
    metrics: { status: "Beta", genre: "Stealth/Action" },
    extendedDetails: {
      role: "Gameplay Programmer",
      techStack: ["Unity", "C#"],
      repoUrl: "https://github.com/erallen24/project-cade",
      media: [
        { type: "image", url: projectCADELogo, alt: "Project C.A.D.E. Key Art" },
        { type: "image", url: "https://placehold.co/800x450/1a1a1a/fbbf24?text=Stealth+Mechanics", alt: "Stealth Mechanics View" },
        { type: "image", url: "https://placehold.co/800x450/1a1a1a/fbbf24?text=Combat+Mechanics", alt: "Combat Mechanics View" }
      ],
      achievements: [
        "Built a robust state-machine for seamless stealth-to-combat transitions",
        "Developed custom character controllers in C# for precise player movement",
        "Implemented enemy AI behavior trees for dynamic patrolling and tracking"
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
      repoUrl: "https://github.com/erallen24/the-bridge",
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