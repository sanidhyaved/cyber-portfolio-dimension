import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "C", "HTML/CSS", "JavaScript"],
    color: "primary" as const,
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["VS Code", "Burpsuite", "OWASP ZAP", "OSINT tools"],
    color: "secondary" as const,
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "MongoDB"],
    color: "accent" as const,
  },
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-2 block">
            // skills.config
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillsData.map(({ category, icon, skills, color }, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/40 p-6 h-full transition-all duration-500 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-primary/40 to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded border border-primary/30 flex items-center justify-center text-primary">
                    {icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block">
                      module
                    </span>
                    <h3 className="font-display text-sm font-bold text-foreground">
                      {category}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 group/skill"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                      <span className="font-mono text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
