import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const FloatingResume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_20px_hsl(230_90%_65%/0.3)] hover:shadow-[0_0_40px_hsl(230_90%_65%/0.5)] transition-all duration-300 hover:-translate-y-2 hover:scale-110"
      >
        <FileText className="w-5 h-5 flex-shrink-0" />
        
        {/* Tooltip */}
        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-sm font-medium text-foreground opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          View Resume
        </div>
      </a>
    </motion.div>
  );
};

export default FloatingResume;
