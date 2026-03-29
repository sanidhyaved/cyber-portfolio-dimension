import { motion } from "framer-motion";

const educationData = [
  {
    school: "D.Y. Patil College of Engineering",
    degree: "B.E. Electronics & Telecommunication",
    location: "Pune",
    period: "2018 — 2022",
    score: "9.34",
    scoreLabel: "CGPA",
  },
  {
    school: "Growell Public School",
    degree: "Higher Secondary (HSC)",
    location: "Kota",
    period: "2017 — 2018",
    score: "81",
    scoreLabel: "%",
  },
  {
    school: "Hyundan Model School",
    degree: "Secondary School (SSC)",
    location: "Ramganjmandi",
    period: "2016 — 2017",
    score: "86.17",
    scoreLabel: "%",
  },
];

const Education = () => {
  return (
    <section className="py-32 relative noise" id="education">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary block mb-3">
            03 — Education
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-foreground">
            ACADEMIC
            <br />
            <span className="text-accent text-glow-green">JOURNEY</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connecting line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent" />
              )}

              <div className="flex gap-6 py-6">
                {/* Score circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border border-primary/20 group-hover:border-primary/50 flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_hsl(150_80%_55%/0.15)]">
                    <div className="text-center">
                      <span className="font-display text-lg text-primary block leading-none">
                        {edu.score}
                      </span>
                      <span className="font-mono text-[8px] text-muted-foreground">
                        {edu.scoreLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-[10px] text-muted-foreground">{edu.location}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="font-mono text-[10px] text-muted-foreground">{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
