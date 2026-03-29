import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C", "HTML/CSS", "JavaScript"],
    accent: "primary" as const,
  },
  {
    title: "Security Tools",
    skills: ["Burpsuite", "OWASP ZAP", "OSINT Tools", "Nmap"],
    accent: "secondary" as const,
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB"],
    accent: "accent" as const,
  },
  {
    title: "Frameworks",
    skills: ["NIST-RMF", "PCI-DSS", "SOC-2", "CIS Controls"],
    accent: "primary" as const,
  },
];

const Skills = () => {
  return (
    <section className="py-32 relative" id="skills">
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary block mb-3">
            02 — Skills
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-foreground">
            MY
            <br />
            <span className="text-secondary text-glow-purple">ARSENAL</span>
          </h2>
        </motion.div>

        {/* Marquee strip */}
        <div className="overflow-hidden mb-16 -mx-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex items-center gap-8 mr-8">
                {["PYTHON", "BURPSUITE", "OWASP", "SQL", "JAVASCRIPT", "NMAP", "MONGODB", "PCI-DSS"].map((s, i) => (
                  <span key={`${ri}-${i}`} className="font-display text-6xl md:text-8xl text-foreground/[0.03] select-none">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={`w-2 h-2 rounded-full ${
                  group.accent === 'primary' ? 'bg-primary' :
                  group.accent === 'secondary' ? 'bg-secondary' : 'bg-accent'
                } animate-pulse-soft`} />
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground mb-5">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className={`w-4 h-px ${
                      group.accent === 'primary' ? 'bg-primary/30 group-hover/item:bg-primary' :
                      group.accent === 'secondary' ? 'bg-secondary/30 group-hover/item:bg-secondary' :
                      'bg-accent/30 group-hover/item:bg-accent'
                    } transition-colors`} />
                    <span className="font-mono text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
