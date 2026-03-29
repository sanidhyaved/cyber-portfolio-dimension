import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "D.Y. Patil College of Engineering, Akurdi",
    degree: "B.E. in Electronics and Telecommunication",
    location: "Pune, Maharashtra",
    period: "Aug. 2018 – May 2022",
    score: "9.34 CGPA",
  },
  {
    school: "Growell Public School",
    degree: "Higher Secondary (HSC)",
    location: "Kota, Rajasthan",
    period: "July 2017 – May 2018",
    score: "81%",
  },
  {
    school: "Hyundan Model School",
    degree: "Secondary School (SSC)",
    location: "Ramganjmandi, Rajasthan",
    period: "May 2016 – June 2017",
    score: "86.17%",
  },
];

const Education = () => {
  return (
    <section className="py-24 relative" id="education">
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
            // education.history
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-2 w-[13px] h-[13px] rounded-full border-2 border-primary/50 bg-background group-hover:border-primary group-hover:shadow-[0_0_10px_hsl(160_100%_50%/0.3)] transition-all" />

                <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/30 p-5 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-primary border border-primary/20 px-2 py-0.5 rounded whitespace-nowrap">
                      {edu.score}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground mt-2">
                    {edu.location} · {edu.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
