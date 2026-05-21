import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, FolderGit2, Play } from "lucide-react";
import { projectsData } from "../components/data/portfolio";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AllProjects() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground p-4 md:p-8 max-w-[1800px] mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="p-2 bg-muted hover:bg-accent rounded-md transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-primary" /> All Projects
          </h1>
          <p className="text-muted-foreground text-sm mt-1">A complete archive of my development work.</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col h-full overflow-hidden border-border hover:border-primary/50 transition-colors group">
              {/* Banner Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <Badge className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground border-none backdrop-blur-sm pointer-events-none">
                  {project.type}
                </Badge>
              </div>
              
              {/* Content */}
              <CardContent className="flex flex-col flex-1 p-5">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.extendedDetails.techStack.map((tech: string, i: number) => (
                    <span key={i} className="bg-muted text-foreground/80 text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/50 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  className="w-full gap-2 cursor-pointer" 
                  onClick={() => navigate(`/project/${project.slug}`)}
                >
                  <Play className="w-4 h-4" /> View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}