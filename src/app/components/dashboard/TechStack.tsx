import { motion } from "motion/react";
import { Layers } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { techStackData } from "../data/portfolio"; // <-- Data Import

export function TechStack() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
      <Card className="h-full border-border">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Layers className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-4">
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
                    <Badge key={tech} variant="secondary" className="bg-background/50 hover:bg-background/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="mt-2 text-center">
            <p className="text-sm text-muted-foreground">+ additional tools & libraries</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}