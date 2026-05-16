import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { projectsData } from "../data/portfolio"; // <-- Data Import

export function ProjectShowcase() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % projectsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % projectsData.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const project = projectsData[current];

    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="overflow-hidden relative group border-border">
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
                            <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Project Info Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                        <motion.div key={`info-${current}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <Badge className="bg-primary/90 text-primary-foreground mb-3 backdrop-blur-sm pointer-events-auto border-none">
                                {project.type}
                            </Badge>
                            <h2 className="text-white text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-white/80 mb-4 max-w-xl">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4 pointer-events-auto">
                                {project.tech.map((tech) => (
                                    <Badge key={tech} variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-white pointer-events-auto">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        <span className="text-sm opacity-80 capitalize">{key}:</span>
                                        <span className="font-bold">{value as React.ReactNode}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="icon" onClick={prev} className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none z-10 rounded-full">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="icon" onClick={next} className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none z-10 rounded-full">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* View Button */}
                    <Button 
                        onClick={() => navigate(`/project/${project.slug}`)}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none z-10 gap-2"
                    >
                        <Play className="w-4 h-4" /> View Project
                    </Button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {projectsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === current ? "bg-white w-8" : "bg-white/50 w-2"}`}
                        />
                    ))}
                </div>
            </Card>
        </motion.div>
    );
}