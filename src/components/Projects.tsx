import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "Factsy",
    subtitle: "AI Ingredient Intelligence Platform",
    url: "https://factsy.app",
    period: "2026 - Present",
    color: "#6366f1",
    colorSecondary: "#a855f7",
    tags: ["AI/ML", "Node.js", "React", "NLP"],
    points: [
      "Built an AI-powered platform analyzing ingredient lists of consumer products (food, skincare, supplements, cleaning products) for instant health & safety insights.",
      "Implemented an AI pipeline to parse complex chemical ingredients and classify them into safety categories using red/yellow/green ratings.",
      "Designed personalized insights engine based on allergies, skin type, dietary restrictions, and health goals.",
    ],
  },
  {
    index: "02",
    name: "Social Stonk",
    subtitle: "Fan-Investing Platform",
    url: "https://socialstonk.com",
    period: "2025 - Present",
    color: "#06b6d4",
    colorSecondary: "#6366f1",
    tags: ["TypeScript", "FullStack", "APIs", "Dashboards"],
    points: [
      "Built a fan-investing platform where users can buy and trade \"stocks\" of creators based on their social media popularity.",
      "Led full-stack development using TypeScript and modern web technologies.",
      "Integrated influencer metrics through APIs and visualized performance trends using interactive dashboards.",
      "Designed monetization strategies and a secondary trading market for influencer shares.",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer"
      >
        {/* Outer glow layer */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-px rounded-3xl"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, ${project.colorSecondary}20)`,
            filter: "blur(1px)",
          }}
        />

        <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-[hsl(230_15%_10%/0.7)] to-[hsl(230_15%_7%/0.5)] backdrop-blur-xl p-8 md:p-10">
          {/* Subtle scan line animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent 45%, ${project.color}08 50%, transparent 55%)`,
              backgroundSize: "100% 8px",
            }}
            animate={{ backgroundPositionY: hovered ? ["0%", "100%"] : "0%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner glow on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)` }}
          />

          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              {/* Index */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="font-mono text-5xl font-bold select-none leading-none"
                  style={{ color: `${project.color}25`, WebkitTextStroke: `1px ${project.color}40` }}
                >
                  {project.index}
                </span>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase border px-3 py-1 rounded-full"
                  style={{ color: project.color, borderColor: `${project.color}30` }}
                >
                  {project.period}
                </span>
              </div>

              {/* Title */}
              <div className="mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-base font-light mt-1" style={{ color: `${project.color}cc` }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Points */}
              <ul className="mt-5 space-y-3">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-3 py-1 rounded-full border"
                    style={{ borderColor: `${project.color}25`, color: `${project.color}99`, background: `${project.color}08` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Link Card */}
            <div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-4 self-stretch justify-between lg:justify-start pt-0 lg:pt-10">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.colorSecondary}10)`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.colorSecondary}20)` }}
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Visit Live
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="gradient-blob w-[500px] h-[500px] bg-primary/15 top-[0%] right-[-200px] animate-glow-pulse" />
      <div className="gradient-blob w-[400px] h-[400px] bg-secondary/10 bottom-[10%] left-[-150px] animate-glow-pulse" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            <span className="font-mono text-xs tracking-widest uppercase text-primary">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Projects I've{" "}
            <span className="text-gradient text-glow">Built</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed">
          From AI platforms to fintech - products built with a focus on real-world impact and technical depth.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/sanidhyaved"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="w-12 h-px bg-muted-foreground group-hover:bg-primary transition-colors group-hover:w-16 duration-300" />
            More on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
