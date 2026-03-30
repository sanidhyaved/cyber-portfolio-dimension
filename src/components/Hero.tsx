import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Code2, LineChart, ShieldCheck } from "lucide-react";
import HeroScene from "./HeroScene";
import characterImg from "../assets/developer-character.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll position across a large 300vh container to give room for the story
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Extremely smooth spring physics for the cinematic feel
  const smoothY = useSpring(scrollYProgress, { damping: 25, stiffness: 45, mass: 0.8 });

  // ---------------------------------------------------------------------------
  // ANIMATION TIMELINE SETUP (Phases tied to scroll progress)
  // ---------------------------------------------------------------------------

  // Text / Intro Parallax (Fades out quickly)
  const introOpacity = useTransform(smoothY, [0, 0.15], [1, 0]);
  const introY = useTransform(smoothY, [0, 0.15], [0, 50]);

  // STEP 1 & 2: Sitting animation (0.0 to 0.3)
  // Character starts high (floating/standing), then descends into the chair
  const charSitY = useTransform(smoothY, [0, 0.3], [-100, 30]);
  // Character shrinks slightly into the depth of the chair
  const charScale = useTransform(smoothY, [0, 0.3], [1.1, 0.95]);
  // Chair parallax - moves up slightly as character moves down to create depth
  const chairY = useTransform(smoothY, [0, 0.3], [-40, 40]);

  // Leaning in "Hands to laptop" motion (0.3 to 0.4)
  // We simulate hands reaching by rotating his body forward and pushing him slightly left toward laptop
  const charLeanRotate = useTransform(smoothY, [0.3, 0.45], [0, 4]); // rotate 4 degrees forward
  const charLeanX = useTransform(smoothY, [0.3, 0.45], [0, -15]); // slide toward laptop

  // STEP 3: Laptop Glow & "Work Mode" (0.4 to 0.6)
  const laptopScreenOpacity = useTransform(smoothY, [0.35, 0.5], [0, 1]); // Laptop turns on smoothly

  // Floating UI Snippets fade in and float up
  const uiOpacity = useTransform(smoothY, [0.45, 0.6], [0, 1]);
  const uiY1 = useTransform(smoothY, [0.45, 0.6], [60, -20]);
  const uiY2 = useTransform(smoothY, [0.5, 0.65], [80, 0]);
  const uiY3 = useTransform(smoothY, [0.55, 0.7], [50, -40]);

  // STEP 4: Camera Zoom / Parallax Shift (0.6 to 1.0)
  // Whole scene zooms in slightly to focus on the work, background shifts
  const sceneZoom = useTransform(smoothY, [0.6, 0.9], [1, 1.08]);
  const bgParallaxY = useTransform(smoothY, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} id="home" className="relative h-[300vh] bg-background overflow-x-clip">

      {/* STICKY VIEWPORT - Locks screen while user scrolls through animations */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start pt-24 md:pt-0 lg:justify-center overflow-hidden perspective-[1200px]">

        {/* Deep Background Parallax */}
        <motion.div style={{ y: bgParallaxY }} className="absolute inset-0 w-full h-[150%] -top-[25%] z-0 pointer-events-none">
          <HeroScene />
        </motion.div>

        {/* Cinematic Lighting Blobs */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="gradient-blob w-[800px] h-[800px] bg-primary/20 top-[-200px] left-[-200px] animate-glow-pulse" />
          <div className="gradient-blob w-[600px] h-[600px] bg-secondary/20 bottom-[-150px] right-[-100px] animate-glow-pulse" style={{ animationDelay: '-2s' }} />
        </div>

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/80 z-[2] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-0 md:gap-12 lg:gap-20 h-full">

            {/* LEFT: Intro Typography (Fades out early in scroll) */}
            <motion.div
              style={{ opacity: introOpacity, y: introY, filter: useTransform(introOpacity, [1, 0], ["blur(0px)", "blur(10px)"]) }}
              className="flex-1 max-w-2xl relative z-20"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8 mt-2 md:mt-0">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground">
                  Available for security engagements
                </span>
              </div>

              <h1 className="text-[2.6rem] md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight mb-4 md:mb-6">
                <span className="text-foreground">Sanidhya</span>
                <br />
                <span className="text-gradient text-glow">Ved</span>
              </h1>

              <div>
                <p className="text-xl md:text-2xl font-light text-muted-foreground mb-2">
                  Security Analyst & <span className="text-gradient-accent">Web Pentester</span>
                </p>
                <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed max-w-lg">
                  Ranked <span className="text-primary font-medium">#13 globally</span> in Microsoft MSRC.
                  Specializing in VAPT, web application security, and SaaS posture management.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-8 md:mt-10">
                <a
                  href="#projects"
                  className="group relative px-6 md:px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_hsl(230_90%_65%/0.3)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-6 md:px-8 py-3 border border-foreground/10 text-foreground font-semibold text-sm rounded-full hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex items-center gap-3 mt-6 md:mt-10 mb-2 md:mb-0">
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
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-border bg-card/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110 shadow-lg"
                  >
                    <Icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Cinematic Scroll Workspace Scene */}
            <div className="flex justify-center md:items-end lg:justify-end w-full lg:flex-1 mt-auto scale-[0.8] sm:scale-85 md:scale-90 xl:scale-100 origin-bottom md:origin-center lg:origin-top h-[320px] md:h-auto pointer-events-none mb-0">
              <motion.div
                style={{ scale: sceneZoom }}
                className="relative w-full max-w-[500px] h-[500px] md:h-[600px] perspective-[1000px] z-10"
              >

              {/* --- THE CHAIR (Behind Character) --- */}
              <motion.div
                style={{ y: chairY }}
                className="absolute bottom-28 md:bottom-20 left-1/2 -translate-x-1/2 w-[180px] md:w-[220px] h-[350px] bg-gradient-to-b from-card to-background border border-border shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-t-[50px] z-0"
              >
                <div className="absolute inset-4 border border-white/5 rounded-t-[40px] pointer-events-none" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/50 rounded-full" />
              </motion.div>

              {/* --- THE CHARACTER --- */}
              <motion.div
                style={{
                  y: charSitY,
                  scale: charScale,
                  rotateZ: charLeanRotate, // Simulates moving hands/leaning forward
                  x: charLeanX
                }}
                className="absolute bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 z-10 origin-bottom flex justify-center"
                animate={{
                  // Micro Animations: Breathing (ScaleY) and slight Head Tilt (Rotate)
                  scaleY: [1, 1.015, 1],
                  rotate: [0, -1, 1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Soft character back-glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-full blur-[80px]" />

                <img
                  src={characterImg}
                  alt="Developer Working"
                  className="relative z-10 w-[360px] md:w-[380px] lg:w-[440px] drop-shadow-2xl object-contain object-bottom"
                />
              </motion.div>

              {/* --- THE DESK SETUP (In front of Character) --- */}
              <div className="absolute bottom-0 md:-bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[200px] z-20 flex justify-center perspective-[1000px] pointer-events-none">

                {/* Desk Surface (3D Tilted) */}
                <div className="absolute bottom-0 w-[500px] md:w-[700px] h-[150px] bg-gradient-to-b from-card/95 to-background border-t border-primary/20 shadow-[0_-30px_60px_rgba(0,0,0,0.7)] rounded-t-[40px] [transform:rotateX(60deg)] transform-style-preserve-3d overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] w-full h-full" />
                </div>

                {/* Laptop Container */}
                <div className="absolute bottom-20 md:bottom-24 left-[15%] md:left-[25%] w-[140px] md:w-[180px] h-[90px] md:h-[120px] z-30 perspective-[800px]">
                  {/* Laptop Screen (Back facing us) */}
                  <div className="w-full h-full bg-black/90 border-[4px] border-zinc-800 rounded-xl relative overflow-hidden transform origin-bottom [transform:rotateX(-10deg)] shadow-2xl">

                    {/* Glowing Screen Inside */}
                    <motion.div
                      style={{ opacity: laptopScreenOpacity }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-primary/30"
                    />

                    {/* Apple/Device Generic Logo */}
                    <motion.div
                      style={{ opacity: laptopScreenOpacity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    >
                      <span className="text-[8px] text-white">{"< />"}</span>
                    </motion.div>
                  </div>

                  {/* Desk Glow Cast from Laptop */}
                  <motion.div
                    style={{ opacity: laptopScreenOpacity }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[150%] h-[30px] bg-primary/40 blur-[25px] rounded-full [transform:rotateX(60deg)]"
                  />
                </div>

                {/* Coffee Mug */}
                <div className="absolute bottom-20 md:bottom-28 right-[15%] md:right-[25%] w-10 h-14 md:w-12 md:h-16 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg border-t border-white/10 shadow-[0_10px_20px_black] z-30">
                  <div className="absolute top-2 -right-3 md:-right-4 w-4 h-8 md:w-5 md:h-10 border-4 border-zinc-800 rounded-r-full" />

                  {/* Steam Animations */}
                  <motion.div
                    animate={{ y: [0, -30], opacity: [0, 0.4, 0], scale: [1, 1.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0 }}
                    className="absolute -top-2 left-2 w-2 h-8 bg-white/20 blur-[6px] rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -40], opacity: [0, 0.3, 0], scale: [1, 2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    className="absolute -top-4 right-2 w-3 h-10 bg-white/20 blur-[8px] rounded-full"
                  />
                </div>

              </div>

              {/* --- FLOATING WORK UI SNIPPETS (Appear when working) --- */}
              <motion.div
                style={{ opacity: uiOpacity, y: uiY1 }}
                className="absolute top-24 -left-4 md:-left-12 z-40"
              >
                <div className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-md border border-primary/20 shadow-2xl">
                  <Code2 className="w-5 h-5 text-primary" />
                  <div className="flex flex-col gap-1.5">
                    <div className="w-16 md:w-20 h-1.5 bg-primary/60 rounded-full" />
                    <div className="w-10 md:w-14 h-1.5 bg-primary/30 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ opacity: uiOpacity, y: uiY2 }}
                className="absolute bottom-40 md:bottom-48 -right-4 md:-right-8 z-40"
              >
                <div className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-md border border-secondary/30 shadow-2xl">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span className="text-xs font-mono text-secondary font-medium">VAPT Triggered</span>
                </div>
              </motion.div>

              <motion.div
                style={{ opacity: uiOpacity, y: uiY3 }}
                className="absolute top-1/2 -right-8 md:-right-16 z-40"
              >
                <div className="glass-strong rounded-xl p-3 backdrop-blur-md border border-accent/20 flex flex-col gap-2 shadow-2xl">
                  <LineChart className="w-4 h-4 text-accent" />
                  <div className="flex items-end gap-1.5 h-8">
                    <div className="w-2 h-[40%] bg-accent/40 rounded-t-sm" />
                    <div className="w-2 h-[70%] bg-accent/60 rounded-t-sm" />
                    <div className="w-2 h-[100%] bg-accent rounded-t-sm animate-pulse" />
                  </div>
                </div>
              </motion.div>

              </motion.div>
            </div>
          </div>
        </div>

        {/* Cinematic Scroll indicator (disappears naturally with intro text) */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/80">
              Scroll to begin
            </span>
            <ArrowDown className="w-4 h-4 text-primary/70" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
