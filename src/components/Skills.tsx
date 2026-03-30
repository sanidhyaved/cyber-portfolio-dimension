import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 75 },
    ],
    gradient: "from-primary to-accent",
  },
  {
    title: "Backend & Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 80 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
    gradient: "from-secondary to-primary",
  },
  {
    title: "Security Tools",
    skills: [
      { name: "Burpsuite", level: 95 },
      { name: "OWASP ZAP", level: 90 },
      { name: "Nmap", level: 85 },
      { name: "OSINT Tools", level: 88 },
    ],
    gradient: "from-accent to-secondary",
  },
  {
    title: "Frameworks & Standards",
    skills: [
      { name: "NIST-RMF", level: 90 },
      { name: "PCI-DSS", level: 85 },
      { name: "SOC-2", level: 80 },
      { name: "CIS Controls", level: 82 },
    ],
    gradient: "from-primary to-secondary",
  },
];

const Skills = () => {
  return (
    <section className="section-padding relative" id="skills">
      <div className="gradient-blob w-[500px] h-[500px] bg-secondary/10 bottom-[-100px] left-[-200px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Skills & Tools
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            My technical
            <br />
            <span className="text-gradient">arsenal</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden mb-16 -mx-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex items-center gap-12 mr-12">
                {["PYTHON", "BURPSUITE", "OWASP", "JAVASCRIPT", "NMAP", "MONGODB", "REACT", "PCI-DSS"].map((s, i) => (
                  <span key={`${ri}-${i}`} className="font-display text-7xl md:text-9xl text-foreground/[0.03] select-none italic">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glow-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                      />
                    </div>
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
