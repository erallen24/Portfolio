import { motion } from "motion/react";
import { Mail, MessageSquare, Calendar, Send } from "lucide-react";

export function QuickContact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground relative overflow-hidden"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"
      />

      <div className="relative">
        <h3 className="mb-4">Let's Connect</h3>

        <div className="space-y-3 mb-6">
          <motion.a
            whileHover={{ x: 5 }}
            href="mailto:contact@example.com"
            className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm opacity-80">Email</p>
              <p className="text-sm font-medium truncate">contact@evanallen.dev</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <MessageSquare className="w-5 h-5" />
            <div className="flex-1">
              <p className="text-sm opacity-80">Discord</p>
              <p className="text-sm font-medium">@evanallen_70873</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <Calendar className="w-5 h-5" />
            <div className="flex-1">
              <p className="text-sm opacity-80">Schedule</p>
              <p className="text-sm font-medium">Book a call</p>
            </div>
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-3 bg-white text-primary rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          Quick Message
        </motion.button>

        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-xs opacity-80 text-center">
            Response time: <span className="font-bold">&lt;24 hours</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
