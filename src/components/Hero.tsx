import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import HeroScene from "./HeroScene";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[1]" />
      <div className="absolute inset-0 gradient-mesh z-[1]" />

      <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              Available for security engagements
            </span>
          </motion.div>

          {/* Name — massive display font */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight mb-2">
              <span className="text-foreground">SANIDHYA</span>
            </h1>
            <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight">
              <span className="text-primary text-glow-green">VED</span>
            </h1>
          </motion.div>

          {/* Role + description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-12"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-primary" />
                <span className="font-heading text-lg font-semibold text-foreground">
                  Security Analyst
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-secondary" />
                <span className="font-heading text-lg font-semibold text-secondary">
                  Web Pentester
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Ranked <span className="text-primary font-medium">#13 globally</span> in Microsoft MSRC. 
              Specializing in VAPT, web application security, and SaaS posture management.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-6 mt-12"
          >
            <a
              href="mailto:sanidhyaved@gmail.com"
              className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_hsl(150_80%_55%/0.3)]"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
            <a
              href="https://github.com/sanidhyaved"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-foreground/15 text-foreground font-heading font-semibold text-sm rounded-full hover:border-primary/40 hover:text-primary transition-all"
            >
              View Work
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-4 mt-10"
          >
            {[
              { icon: Github, href: "https://github.com/sanidhyaved" },
              { icon: Linkedin, href: "https://linkedin.com/in/sanidhyaved" },
              { icon: Mail, href: "mailto:sanidhyaved@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
            scroll
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
