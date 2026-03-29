import { motion } from "framer-motion";
import { Server, Bug, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Security Analyst",
    company: "Codewits Solutions Pvt. Ltd.",
    period: "July 2022 – Present",
    description: [
      "R and D on SaaS Security Posture Management (SSPM)",
      "Extract and process data from SaaS applications",
      "Market Intelligence and Data Analysis",
      "Expertise in NIST-RMF, PCI-DSS, SOC-2, CIS Controls",
    ],
    icon: <Server className="w-5 h-5" />,
    tag: "FULL-TIME",
  },
  {
    title: "Web Pentesting",
    company: "Freelancing",
    period: "May 2019 – Present",
    description: [
      "Security Engineer with 3 years of experience",
      "Manual penetration testing and vulnerability assessment",
      "Technical vulnerability communication",
      "Application security consultation",
    ],
    icon: <Bug className="w-5 h-5" />,
    tag: "FREELANCE",
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="absolute inset-0 bg-background cyber-grid" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-2 block">
            // career.log
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:box-glow transition-all">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 px-2 py-0.5 rounded">
                      {exp.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 ml-14">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
