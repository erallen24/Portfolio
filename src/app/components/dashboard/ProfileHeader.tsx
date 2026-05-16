import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { profileData } from "../data/portfolio"; // <-- Data Import

export function ProfileHeader() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % profileData.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="relative overflow-hidden border-border rounded-2xl">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <CardContent className="p-6 md:p-8 relative flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          {/* Avatar Area */}
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
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-2 truncate text-3xl font-bold">
              {profileData.name}
            </motion.h1>

            <div className="h-8 mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-muted-foreground truncate"
                >
                  {profileData.roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                {profileData.availability}
              </Badge>
              <Badge variant="secondary" className="py-1 px-3">
                {profileData.experience}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={profileData.socials.email}><Mail className="w-5 h-5" /></a>
              </Button>
            </div>
          </div>

          {/* About Me */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 md:max-w-md hidden lg:block text-sm text-muted-foreground leading-relaxed md:px-4 md:border-l border-border/50 space-y-2"
          >
            {profileData.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="shrink-0 flex items-center">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Button size="lg" className="rounded-xl gap-2 font-semibold">
                <Download className="w-4 h-4" /> Resume
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}