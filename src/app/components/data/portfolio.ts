
import profilePic from "../assets/Evan_pic.png";

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
  { name: "Architecture", techs: ["Systems Programming", "Mover Plugin", "Custom Physics"], color: "from-pink-500/20 to-pink-500/5" },
];

export const projectsData = [
  {
    title: "Add-Venture",
    slug: "add-venture",
    type: "Game Development",
    description: "A 2.5D action-exploration remake of the 1981 classic Venture featuring custom collision systems.",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["C++", "Custom Collision", "2.5D"],
    metrics: { status: "Released", type: "Remake" }
  },
  {
    title: "Fluidity Character Framework",
    slug: "fluidity-framework",
    type: "Engine Architecture",
    description: "Advanced locomotion system and character state framework utilizing the Mover plugin.",
    image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["Unreal Engine 5", "C++", "Mover Plugin"],
    metrics: { states: "Dynamic", framework: "C++ Header" }
  },
  {
    title: "The Bridge",
    slug: "the-bridge",
    type: "Software Engineering",
    description: "Cross-platform life management application featuring secure API authentication for financial and schedule tracking.",
    image: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["Python", "Flet", "Plaid API", "Google API"],
    metrics: { platforms: "Cross-Platform", ui: "Condensed" }
  },
];