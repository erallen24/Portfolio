import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Epic Adventure RPG",
    category: "Game Development",
    description: "A fantasy RPG built with Unity featuring procedural world generation, complex combat systems, and multiplayer support.",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzc4NzY1ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Unity", "C#", "Multiplayer", "Procedural Generation"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management Platform",
    category: "Software Development",
    description: "A modern project management tool with real-time collaboration, built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3ODg2ODA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Mobile Puzzle Game",
    category: "Game Development",
    description: "An addictive puzzle game for iOS and Android with physics-based mechanics and 100+ levels.",
    image: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzc4NzY1ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Unity", "Mobile", "Game Design", "Analytics"],
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Backend",
    category: "Software Development",
    description: "Scalable microservices architecture handling millions of transactions with advanced caching and payment integration.",
    image: "https://images.unsplash.com/photo-1703969083653-da62f9ea70af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3ODg2ODA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Microservices", "Redis", "Stripe API"],
    link: "#",
    github: "#"
  },
  {
    title: "VR Training Simulator",
    category: "Game Development",
    description: "Enterprise VR application for safety training in hazardous environments, built with Unreal Engine.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzc4NzY1ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Unreal Engine", "VR", "C++", "Enterprise"],
    link: "#",
    github: "#"
  },
  {
    title: "DevOps Dashboard",
    category: "Software Development",
    description: "Real-time monitoring and deployment dashboard for CI/CD pipelines with custom analytics.",
    image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3ODg2ODA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Docker", "AWS"],
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of game development and software engineering projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
