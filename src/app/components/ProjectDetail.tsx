import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Code2, Layout, AlertTriangle, Github, Star, Play, LayoutGrid, Download } from "lucide-react"; // <-- Added Download
import { projectsData } from "../components/data/portfolio";

type MediaItem = { type: string; url: string; alt: string };

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);

  const project = projectsData.find((p: { slug: string }) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
        <h1 className="text-xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-muted hover:bg-accent rounded-md text-sm transition-colors cursor-pointer">
          View All Projects
        </button>
      </div>
    );
  }

  const { extendedDetails } = project;
  const activeMedia = extendedDetails.media[activeMediaIndex];

  const handleNext = () => {
    setActiveMediaIndex((prev) => (prev + 1) % extendedDetails.media.length);
  };

  const handlePrev = () => {
    setActiveMediaIndex((prev) => (prev - 1 + extendedDetails.media.length) % extendedDetails.media.length);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = 200; 
      thumbnailScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground p-4 flex flex-col gap-4 max-w-6xl mx-auto"
    >
      {/* Clean Control Header */}
      <div className="flex flex-wrap items-center justify-between bg-card border border-border p-3 rounded-lg gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)} 
            className="p-1.5 bg-muted hover:bg-accent rounded-md transition-colors cursor-pointer"
            title="Go Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold m-0 tracking-wide">{project.title}</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
            {project.type}
          </span>
          <button 
            onClick={() => navigate('/projects')} 
            className="flex items-center gap-2 text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground px-4 py-1.5 rounded-md transition-all cursor-pointer border border-transparent hover:border-primary/50 shadow-sm"
          >
            <LayoutGrid className="w-4 h-4" /> See More
          </button>
        </div>
      </div>

      {/* Structured Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        
        {/* Main Viewport - Media Gallery */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-4 flex flex-col gap-4 min-h-[500px]">
          <div className="flex items-center gap-2 text-muted-foreground border-b border-border pb-2">
             <Layout className="w-4 h-4" />
             <span className="text-sm font-semibold">Project Gallery</span>
          </div>
          
          <div className="flex-1 bg-muted/20 border border-border rounded-lg overflow-hidden flex items-center justify-center min-h-[350px] md:min-h-[450px] relative group">
             {activeMedia.type === 'video' ? (
               <video
                 key={activeMedia.url} 
                 src={activeMedia.url}
                 controls
                 autoPlay
                 muted
                 className="w-full h-full object-contain bg-black"
               />
             ) : (
               <img
                 src={activeMedia.url}
                 alt={activeMedia.alt}
                 className="w-full h-full object-contain bg-black/5"
               />
             )}

             {extendedDetails.media.length > 1 && (
               <>
                 <button
                   onClick={handlePrev}
                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-border shadow-md z-20 cursor-pointer backdrop-blur-sm"
                 >
                   <ChevronLeft className="w-5 h-5" />
                 </button>
                 <button
                   onClick={handleNext}
                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-border shadow-md z-20 cursor-pointer backdrop-blur-sm"
                 >
                   <ChevronRight className="w-5 h-5" />
                 </button>
               </>
             )}
          </div>

          <div className="relative group/thumbs">
            <button 
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-20 bg-background/90 text-foreground p-1 rounded-full border border-border shadow-md opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-200 cursor-pointer hover:bg-accent backdrop-blur-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div 
              ref={thumbnailScrollRef}
              className="flex gap-3 overflow-x-auto pb-2 pt-1 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
            >
              {extendedDetails.media.map((item: MediaItem, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative shrink-0 w-28 h-16 md:w-36 md:h-20 rounded-md overflow-hidden border-2 transition-all cursor-pointer snap-start ${
                    activeMediaIndex === idx 
                      ? 'border-primary opacity-100 ring-2 ring-primary/20 ring-offset-1 ring-offset-background' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  {item.type === 'video' ? (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20 z-10" />
                      <Play className="w-6 h-6 text-white drop-shadow-md z-20 absolute scale-75" />
                      <video src={item.url} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <img src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-20 bg-background/90 text-foreground p-1 rounded-full border border-border shadow-md opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-200 cursor-pointer hover:bg-accent backdrop-blur-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side Panel - Dev Focus */}
        <div className="flex flex-col gap-4">
          
          {/* Project Details */}
          <div className="bg-card border border-border rounded-lg p-4">
             <div className="flex items-center gap-2 text-muted-foreground border-b border-border pb-2 mb-4">
               <Code2 className="w-4 h-4" />
               <span className="text-sm font-semibold">Development Details</span>
            </div>
            
            <div className="text-sm space-y-4">
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium text-foreground">{extendedDetails.role}</span>
              </div>
              
              <div className="flex justify-between items-start border-b border-border/50 pb-3">
                <span className="text-muted-foreground pt-0.5">Stack</span>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[65%]">
                  {extendedDetails.techStack.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-muted text-foreground/90 text-xs px-2 py-0.5 rounded-md font-medium border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-1 pb-1">
                <span className="text-muted-foreground">Repository</span>
                <a 
                  href={extendedDetails.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-primary hover:underline cursor-pointer"
                >
                  <Github className="w-4 h-4" /> View Source
                </a>
              </div>

              {/* NEW: Download Build Section - only renders if downloadUrl exists */}
              {extendedDetails.downloadUrl && (
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-border/50">
                  <span className="text-muted-foreground">Playable Build</span>
                  <a 
                    href={extendedDetails.downloadUrl} 
                    download
                    className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Technical Achievements */}
          <div className="bg-card border border-border rounded-lg p-4 flex-1">
            <div className="flex items-center gap-2 text-muted-foreground border-b border-border pb-2 mb-4">
               <Star className="w-4 h-4" />
               <span className="text-sm font-semibold">Key Achievements</span>
            </div>
            <ul className="space-y-3">
              {extendedDetails.achievements.map((achievement: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-foreground/90 leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.div>
  );
}