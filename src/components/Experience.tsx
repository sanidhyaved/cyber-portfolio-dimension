import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Security Analyst",
    company: "Codewits Solutions Pvt. Ltd.",
    period: "2022 — Present",
    type: "Full-time",
    points: [
      "R&D on SaaS Security Posture Management (SSPM)",
      "Data extraction & processing from SaaS applications",
      "Market Intelligence & Data Visualization",
      "NIST-RMF, PCI-DSS, SOC-2, CIS Controls expertise",
    ],
  },
  {
    title: "Web Pentesting",
    company: "Freelancing",
    period: "2019 — Present",
    type: "Freelance",
    points: [
      "3+ years penetration testing experience",
      "Manual VAPT & vulnerability assessment",
      "Security consultation & technical reporting",
      "Application security architecture review",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-padding relative" id="experience">
      <div className="gradient-blob w-[400px] h-[400px] bg-accent/10 top-[10%] left-[-150px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Where I've
            <br />
            <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-2 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card glow-border rounded-2xl p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
