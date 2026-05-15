import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function ProfileHeader() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Game Developer", "Software Engineer", "System Architect", "Tech Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative shrink-0"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
            />
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground relative z-10" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"
          />
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left min-w-0 md:pr-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-2 truncate"
          >
            Evan Allen
          </motion.h1>

          <div className="h-8 mb-4">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-muted-foreground truncate"
            >
              {roles[currentRole]}
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-2 text-sm whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for hire
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm whitespace-nowrap"
            >
              5+ Years Experience
            </motion.span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/erallen24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/evan-allen-game-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="contact@evanallen.dev"
              className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* About Me */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 md:max-w-md hidden lg:block text-sm text-muted-foreground leading-relaxed md:px-4 md:border-l border-border/50"
        >
          <p className="mb-2">
            I am a passionate Game & Software Developer specializing in bridging the gap between immersive 3D experiences and scalable web platforms.
          </p>
          <p>
            With a strong foundation in C++, Unity/Unreal, and React, I thrive on building high-performance applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="shrink-0 flex items-center">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
