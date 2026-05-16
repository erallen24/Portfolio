
import profilePic from "@/assets/Evan_pic.png";
import addVentureLogo from "@/assets/Add-VentureLogo.png";
import projectCADELogo from "@/assets/ProjectCADELogo.png";
import theBridgeLogo from "@/assets/TheBridge_Logo.png";

export const profileData = {
  name: "Evan Allen",
  image: profilePic,
  roles: ["Game Developer", "Software Engineer", "System Architect", "Tech Innovator"],
  experience: "5+ Years Experience",
  availability: "Available for hire",
  socials: {
    github: "https://github.com/erallen24",
    linkedin: "https://www.linkedin.com/in/evan-allen-game-dev/",
    email: "mailto:contact@evanallen.dev",
    discord: "@evanallen_70873"
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

export const projectsData = [
  {
    title: "Add-Venture",
    slug: "add-venture",
    type: "Game Development",
    description: "A 2.5D action-exploration remake of the 1981 classic Venture featuring custom collision systems.",
    image: addVentureLogo,
    tech: ["C++", "Custom Collision", "2.5D"],
    metrics: { status: "Released", type: "Remake" }
  },
  {
    title: "Project C.A.D.E.",
    slug: "project-cade",
    type: "Engine Architecture",
    description: "Single Player FPS game balancing stealth and combat gameplay.",
    image: projectCADELogo,
    tech: ["Unity", "C#", "Custom Character Controller"],
    metrics: { status: "Beta", genre: "Stealth/Action" }
  },
  {
    title: "The Bridge",
    slug: "the-bridge",
    type: "Software Engineering",
    description: "Cross-platform life management application featuring secure API authentication for financial and schedule tracking.",
    image: theBridgeLogo,
    tech: ["Python", "Flet", "Plaid API", "Google API"],
    metrics: { platforms: "Cross-Platform", ui: "Condensed" }
  },
];