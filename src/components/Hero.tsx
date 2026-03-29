import { motion } from "framer-motion";
import { Shield, Terminal, Lock, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleField from "./ParticleField";
import Globe3D from "./Globe3D";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden scanline">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 cyber-grid" />
      <ParticleField />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Terminal-style label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/70">
                System.init() — Security Analyst Online
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-5xl md:text-7xl font-black mb-4 tracking-tight"
            >
              <span className="gradient-text-cyber">Sanidhya</span>
              <br />
              <span className="text-foreground">Ved</span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-sm text-primary border border-primary/30 px-3 py-1 rounded-full box-glow">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Security Analyst
                </span>
                <span className="font-mono text-sm text-secondary border border-secondary/30 px-3 py-1 rounded-full box-glow-purple">
                  <Terminal className="w-3 h-3 inline mr-1" />
                  Web Pentester
                </span>
                <span className="font-mono text-sm text-accent border border-accent/30 px-3 py-1 rounded-full">
                  <Lock className="w-3 h-3 inline mr-1" />
                  VAPT Specialist
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Passionate about cybersecurity with expertise in Web Application Security Testing,
              Vulnerability Assessment, and Penetration Testing. 
              <span className="text-primary font-semibold"> Ranked 13th globally</span> in Microsoft Security Response Center.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/sanidhyaved"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-mono text-sm font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_hsl(160_100%_50%/0.3)]"
              >
                <Github className="w-4 h-4" />
                <span>View Projects</span>
              </a>
              <a
                href="mailto:sanidhyaved@gmail.com"
                className="inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/sanidhyaved", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/sanidhyaved", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sanidhyaved@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:box-glow transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
            <Globe3D />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
