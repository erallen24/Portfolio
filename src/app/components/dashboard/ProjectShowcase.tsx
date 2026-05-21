import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { projectsData } from "../data/portfolio";

export function ProjectShowcase() {
    const navigate = useNavigate();

    // Limit to the top 4 projects for the main dashboard featured section
    // The rest will live on the "All Projects" page
    const featuredProjects = projectsData.slice(0, 4);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project, idx) => (
                <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Card 
                        className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                        onClick={() => navigate(`/project/${project.slug}`)}
                    >
                        {/* Game Store Style "Capsule" Banner */}
                        <div className="relative h-48 md:h-40 overflow-hidden bg-muted">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                            
                            {/* Dark gradient overlay that intensifies on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Tag overlay top-left */}
                            <Badge className="absolute top-3 left-3 bg-black/60 text-white backdrop-blur-md border-white/10 pointer-events-none">
                                {project.type}
                            </Badge>

                            {/* Hover Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-primary/90 text-primary-foreground p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                                    <Play className="w-6 h-6 fill-current" />
                                </div>
                            </div>
                        </div>

                        {/* Card Content & Details */}
                        <CardContent className="flex flex-col flex-1 p-4 bg-card group-hover:bg-accent/5 transition-colors">
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                {project.description}
                            </p>
                            
                            {/* Tech Stack Mini-Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.extendedDetails.techStack.slice(0, 3).map((tech: string, i: number) => (
                                    <span 
                                        key={i} 
                                        className="bg-background text-foreground/80 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border/50 font-medium shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}