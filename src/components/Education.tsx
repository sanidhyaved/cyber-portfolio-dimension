import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "D.Y. Patil College of Engineering",
    degree: "B.E. Electronics & Telecommunication",
    location: "Pune, Maharashtra",
    period: "2018 - 2022",
    score: "9.34",
    scoreLabel: "CGPA",
  },
  {
    school: "Growell Public School",
    degree: "Higher Secondary (HSC)",
    location: "Kota, Rajasthan",
    period: "2017 - 2018",
    score: "81%",
    scoreLabel: "Score",
  },
  {
    school: "Hyundan Model School",
    degree: "Secondary School (SSC)",
    location: "Ramganjmandi",
    period: "2016 - 2017",
    score: "86.17%",
    scoreLabel: "Score",
  },
];

const Education = () => {
  return (
    <section className="section-padding relative" id="education">
      <div className="gradient-blob w-[400px] h-[400px] bg-accent/10 bottom-[-100px] right-[10%] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Academic
            <br />
            <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card glow-border rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gradient block leading-none">{edu.score}</span>
                  <span className="font-mono text-[9px] text-muted-foreground">{edu.scoreLabel}</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{edu.school}</h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-xs text-muted-foreground/70">{edu.location}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="font-mono text-xs text-muted-foreground/70">{edu.period}</span>
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
