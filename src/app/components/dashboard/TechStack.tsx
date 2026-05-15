import { motion } from "motion/react";
import { Layers } from "lucide-react";

const categories = [
  {
    name: "Game Engines",
    techs: ["Unity", "Unreal", "Godot"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Languages",
    techs: ["C++", "C#", "TypeScript", "Python"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Frontend",
    techs: ["React", "Next.js", "Tailwind"],
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "Backend",
    techs: ["Node.js", "PostgreSQL", "Redis"],
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Docker", "GitHub Actions"],
    color: "from-pink-500/20 to-pink-500/5",
  },
];

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Layers className="w-5 h-5 text-primary" />
        <h3>Tech Stack</h3>
      </div>

      <div className="flex flex-col gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="relative"
          >
            <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} border border-border/50 h-full`}>
              <p className="text-xs font-medium text-muted-foreground mb-3">
                {category.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 bg-card border border-border rounded text-xs font-medium cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 pt-6 border-t border-border"
      >
        <p className="text-sm text-muted-foreground text-center">
          + 20 more technologies
        </p>
      </motion.div>
    </motion.div>
  );
}
