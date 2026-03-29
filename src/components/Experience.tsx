import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Security Analyst",
    company: "Codewits Solutions Pvt. Ltd.",
    period: "2022 — Present",
    points: [
      "R&D on SaaS Security Posture Management (SSPM)",
      "Data extraction & processing from SaaS applications",
      "Market Intelligence & Data Visualization",
      "NIST-RMF, PCI-DSS, SOC-2, CIS Controls expertise",
    ],
    tag: "Full-time",
  },
  {
    title: "Web Pentesting",
    company: "Freelancing",
    period: "2019 — Present",
    points: [
      "3+ years penetration testing experience",
      "Manual VAPT & vulnerability assessment",
      "Security consultation & technical reporting",
      "Application security architecture review",
    ],
    tag: "Freelance",
  },
];

const Experience = () => {
  return (
    <section className="py-32 relative noise" id="experience">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-20"
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary block mb-3">
              01 — Experience
            </span>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-foreground">
              WHERE I'VE
              <br />
              <span className="text-primary text-glow-green">WORKED</span>
            </h2>
          </div>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-2xl p-8 md:p-10 hover-lift cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full">
                    {exp.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mt-8">
                {exp.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      {point}
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

export default Experience;
