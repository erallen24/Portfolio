import { motion } from "motion/react";
import { Mail, MessageSquare, Calendar, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function QuickContact() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden border-none">
        
        {/* Animated Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl pointer-events-none"
        />

        <CardHeader>
          <CardTitle className="text-primary-foreground">Let's Connect</CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex flex-col gap-4">
          <div className="space-y-3">
            <a href="mailto:contact@evanallen.dev" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm opacity-80">Email</p>
                <p className="text-sm font-medium truncate">contact@evanallen.dev</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              <MessageSquare className="w-5 h-5" />
              <div className="flex-1">
                <p className="text-sm opacity-80">Discord</p>
                <p className="text-sm font-medium">@evanallen_70873</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Calendar className="w-5 h-5" />
              <div className="flex-1">
                <p className="text-sm opacity-80">Schedule</p>
                <p className="text-sm font-medium">Book a call</p>
              </div>
            </a>
          </div>

          <Button variant="secondary" className="w-full gap-2 mt-2 font-semibold">
            <Send className="w-4 h-4" /> Quick Message
          </Button>

          <Separator className="bg-white/20 my-2" />
          
          <p className="text-xs opacity-80 text-center m-0">
            Response time: <span className="font-bold">&lt;24 hours</span>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}