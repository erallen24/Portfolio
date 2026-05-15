import { motion } from "motion/react";

const gameDevSkills = [
  "Unity", "Unreal Engine", "C#", "C++", "Game Physics",
  "3D Modeling", "Shader Programming", "Multiplayer Systems"
];

const softwareDevSkills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "REST APIs", "GraphQL", "Git"
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning game development and software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Game Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {gameDevSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-card rounded-lg border border-border text-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Software Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {softwareDevSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-card rounded-lg border border-border text-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
