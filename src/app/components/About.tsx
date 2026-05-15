import { motion } from "motion/react";
import { Code2, Gamepad2, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A creative technologist with a passion for both game development and software engineering.
            I bring ideas to life through code, creating experiences that engage and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-3">Game Development</h3>
            <p className="text-muted-foreground">
              Creating immersive gaming experiences with modern engines and tools.
              From concept to deployment, bringing interactive worlds to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-3">Software Engineering</h3>
            <p className="text-muted-foreground">
              Building scalable applications and robust systems.
              Expertise in modern frameworks, clean architecture, and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-3">Creative Problem Solving</h3>
            <p className="text-muted-foreground">
              Combining technical expertise with creative thinking to solve complex challenges
              and deliver innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
