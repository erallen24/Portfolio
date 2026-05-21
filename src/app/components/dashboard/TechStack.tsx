import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { techStackData, additionalSkills } from "../data/portfolio";

export function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
      <Card className="h-full border-border">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Layers className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-4">
          
          {/* Main Tech Stack */}
          {techStackData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} border border-border/50`}>
                <p className="text-xs font-medium text-muted-foreground mb-3">{category.name}</p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-background/50 hover:bg-background/80 transition-colors shadow-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Expandable Additional Tools Section */}
          <div className="mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer rounded-md hover:bg-muted/50"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" /> 
                  <span>Hide additional tools</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> 
                  <span>Show additional tools & libraries</span>
                </>
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap justify-center gap-2 pt-4 pb-2 border-t border-border/50 mt-2">
                    {additionalSkills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-muted/30 text-muted-foreground border-border/60 font-normal py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </CardContent>
      </Card>
    </motion.div>
  );
}