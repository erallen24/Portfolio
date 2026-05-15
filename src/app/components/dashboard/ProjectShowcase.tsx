import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const projects = [
  {
    title: "Add-Venture",
    type: "Game Development",
    description: "2.5D Remake of the 1981 arcade classic Venture.",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["Vulkan", "Gateware", "ENTT", "C++"],
    metrics: { users: "500K+", rating: "4.8/5" }
  },
  {
    title: "The Bridge",
    type: "Software Engineering",
    description: "Integrated life managment console.",
    image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["Python", "Plaid API", "Google Cloud Console"],
    metrics: { scale: "2M/day", uptime: "99.9%" }
  },
  {
    title: "Project C.A.D.E.",
    type: "Game Development",
    description: "First person shooter game created in Unity",
    image: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tech: ["Unity", "C#"],
    metrics: { players: "32P", latency: "<50ms" }
  },
];

export function ProjectShowcase() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card border border-border rounded-xl overflow-hidden relative group"
    >
      <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Project Info Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            key={`info-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground rounded-full mb-3 backdrop-blur-sm">
              {project.type}
            </div>
            <h2 className="text-white mb-2">{project.title}</h2>
            <p className="text-white/80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-white">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-sm opacity-80">{key}:</span>
                  <span className="font-bold">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* View Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white flex items-center gap-2 hover:bg-white/30 transition-colors"
        >
          <Play className="w-4 h-4" />
          View Project
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
