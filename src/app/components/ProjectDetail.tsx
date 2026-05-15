import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Terminal, Cpu, Activity } from "lucide-react";

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground p-4 flex flex-col gap-4 max-w-6xl mx-auto"
    >
      {/* Control Header */}
      <div className="flex items-center justify-between bg-card border border-border p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)} 
            className="p-1.5 bg-muted hover:bg-accent rounded-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-mono font-bold m-0 uppercase tracking-wider">{slug} // SYS_VIEW</h1>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-xs font-mono bg-green-500/10 text-green-500 px-2 py-1 rounded">
            <Activity className="w-3 h-3" /> ONLINE
          </span>
        </div>
      </div>

      {/* Structured Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        
        {/* Main Viewport */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-4 flex flex-col gap-2 min-h-[500px]">
          <div className="flex items-center gap-2 text-muted-foreground border-b border-border pb-2 mb-2">
             <Terminal className="w-4 h-4" />
             <span className="text-xs font-mono uppercase">Primary_Display</span>
          </div>
          <div className="flex-1 bg-muted/30 border border-dashed border-border rounded flex items-center justify-center font-mono text-sm text-muted-foreground">
             [ VIDEO / CODE ARCHITECTURE RENDER TARGET ]
          </div>
        </div>

        {/* Side Telemetry / Details */}
        <div className="flex flex-col gap-4">
          <div className="bg-card border border-border rounded-lg p-4 flex-1">
             <div className="flex items-center gap-2 text-muted-foreground border-b border-border pb-2 mb-4">
               <Cpu className="w-4 h-4" />
               <span className="text-xs font-mono uppercase">Tech_Specs</span>
            </div>
            <div className="font-mono text-sm space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span className="opacity-70">STATUS</span>
                <span className="text-primary">DEPLOYED</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span className="opacity-70">ENGINE</span>
                <span className="text-primary">DYNAMIC</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span className="opacity-70">REPO</span>
                <span className="text-primary hover:underline cursor-pointer">github.com/...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}