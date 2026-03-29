import { motion } from "framer-motion";
import { Camera, Palette, Film, Dumbbell } from "lucide-react";

const activities = [
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Photography",
    description: "Lead the photography team in college.",
    link: { url: "https://www.pexels.com/@sanidhya-ved-998649/", label: "View on Pexels" },
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Graphic Design",
    description: "Designed certificates, banners, and posters. 5-month internship.",
    tools: ["Photoshop", "Premiere Pro", "Blender"],
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: "Creative Arts",
    description: "Screenplay writer, Director, and Actor for Acts and short films.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    title: "Sports & Hobbies",
    description: "Swimming, Cricket, Table Tennis, Billiards, and Hydroponics.",
  },
];

const Extracurricular = () => {
  return (
    <section className="py-24 relative" id="extracurricular">
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
            // beyond.code
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Beyond Security
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/30 p-5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded border border-primary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                  {activity.link && (
                    <a
                      href={activity.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:text-primary/80 mt-2 transition-colors"
                    >
                      → {activity.link.label}
                    </a>
                  )}
                  {activity.tools && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {activity.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-primary/15 text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
