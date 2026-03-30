import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import HeroScene from "./HeroScene";
import characterImg from "../assets/developer-character.png";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80]);
  const charY = useTransform(scrollYProgress, [0, 0.8], [0, 50]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroScene />

      {/* Gradient blobs */}
      <div className="gradient-blob w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px] animate-glow-pulse" />
      <div className="gradient-blob w-[500px] h-[500px] bg-secondary/20 bottom-[-150px] right-[-100px] animate-glow-pulse" style={{ animationDelay: '-2s' }} />
      <div className="gradient-blob w-[300px] h-[300px] bg-accent/15 top-[40%] right-[30%] animate-glow-pulse" style={{ animationDelay: '-4s' }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background z-[1]" />

      <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Available for security engagements
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span className="text-foreground">Sanidhya</span>
              <br />
              <span className="text-gradient text-glow">Ved</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl md:text-2xl font-light text-muted-foreground mb-2">
                Security Analyst & <span className="text-gradient-accent">Web Pentester</span>
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed max-w-lg">
                Ranked <span className="text-primary font-medium">#13 globally</span> in Microsoft MSRC.
                Specializing in VAPT, web application security, and SaaS posture management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <a
                href="#achievements"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_hsl(230_90%_65%/0.3)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-foreground/10 text-foreground font-semibold text-sm rounded-full hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-3 mt-10"
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
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all hover:scale-110"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Character */}
          <motion.div
            style={{ y: charY }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glow behind character */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent rounded-full blur-[60px] scale-110" />
              
              <motion.img
                src={characterImg}
                alt="Developer Character"
                width={500}
                height={640}
                className="relative z-10 w-[320px] md:w-[400px] lg:w-[460px] drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating UI elements */}
              <motion.div
                animate={{ y: [-5, 8, -5], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-8 glass rounded-xl px-4 py-2 text-xs font-mono text-primary"
              >
                {"<Security />"}
              </motion.div>
              <motion.div
                animate={{ y: [5, -8, 5], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 glass rounded-xl px-4 py-2 text-xs font-mono text-secondary"
              >
                MSRC #13
              </motion.div>
              <motion.div
                animate={{ y: [-3, 6, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-12 glass rounded-xl px-3 py-2 text-xs font-mono text-accent"
              >
                CVE ✓
              </motion.div>
            </motion.div>
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            scroll down
          </span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
