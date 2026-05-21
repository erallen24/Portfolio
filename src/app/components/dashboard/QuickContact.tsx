import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MessageSquare, Check, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { profileData } from "../data/portfolio"; 

export function QuickContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const rawEmail = profileData.socials.email.replace('mailto:', '');
    navigator.clipboard.writeText(rawEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
      <Card className="relative overflow-hidden border-border h-full flex flex-col justify-between">
        
        {/* Subtle Dark Mode Animated Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-3xl pointer-events-none"
        />

        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Let's Connect</CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex flex-col gap-4 flex-1 justify-center">
          <div className="space-y-4">
            
            {/* Email Bar */}
            <button 
              onClick={handleCopyEmail}
              className="w-full flex items-center text-left gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all border border-border/50 cursor-pointer group"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                <p className={`text-sm font-medium truncate transition-colors ${copied ? 'text-green-500' : 'text-foreground'}`}>
                  {copied ? "Copied to clipboard!" : profileData.socials.email.replace('mailto:', '')}
                </p>
              </div>
            </button>

            {/* Discord Bar - Now dynamically pulling the link from portfolio.ts */}
            <a 
              href={profileData.socials.discordLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all border border-border/50 cursor-pointer group"
            >
              <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Discord</p>
                <p className="text-sm font-medium truncate text-foreground">{profileData.socials.discord}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}