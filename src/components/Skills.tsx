import { motion } from "framer-motion";
import { Code2, Terminal, Database, Shield, Server, Layout, FileJson, Cpu, Activity, Key, Layers, Globe, Fingerprint, Network } from "lucide-react";

// Core technical skills for the scrolling marquee
const techRow1 = [
  { name: "React.js", icon: FileJson },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "BurpSuite", icon: Shield },
  { name: "OWASP Top 10", icon: Shield },
  { name: "Tailwind CSS", icon: Layout },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: FileJson },
  { name: "C / C++", icon: Cpu },
];

const techRow2 = [
  { name: "Nmap", icon: Activity },
  { name: "Wireshark", icon: Network },
  { name: "Metasploit", icon: Fingerprint },
  { name: "SQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Vite", icon: Layers },
  { name: "NIST-RMF", icon: FileJson },
  { name: "PCI-DSS", icon: Key },
  { name: "SOC-2", icon: Shield },
];

const TechPill = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <div className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-muted/40 border border-border/50 hover:bg-muted focus:outline-none transition-all duration-300 hover:scale-105 hover:border-primary/50 relative overflow-hidden backdrop-blur-sm cursor-default">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:animate-[marquee_2s_ease-in-out_infinite]" />
    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
    <span className="font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" id="skills">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-0 md:px-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-6 md:px-0"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground/90">
            Tech <span className="font-semibold text-foreground">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            A fluid showcase of the programming languages, security tools, and frameworks I use to assess and build systems.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquees */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="w-full relative flex flex-col gap-6"
      >
        {/* Row 1 - Moves Left */}
        <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: [0, -100 * (techRow1.length)] }} // Math hack for perfect looping
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 45,
            }}
            className="flex w-max gap-6 px-3"
            // We use 3 arrays to guarantee screen width coverage
          >
            {[...techRow1, ...techRow1, ...techRow1, ...techRow1].map((skill, index) => (
              <TechPill key={`${skill.name}-1-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: [-100 * (techRow2.length), 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
            className="flex w-max gap-6 px-3"
          >
            {[...techRow2, ...techRow2, ...techRow2, ...techRow2].map((skill, index) => (
              <TechPill key={`${skill.name}-2-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
