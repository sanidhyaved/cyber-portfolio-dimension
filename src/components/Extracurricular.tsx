import { motion } from "framer-motion";
import { Camera, Palette, Film, Dumbbell, ExternalLink } from "lucide-react";

const activities = [
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Photography",
    description: "Lead college photography team",
    link: { url: "https://www.pexels.com/@sanidhya-ved-998649/", label: "Pexels Portfolio" },
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Graphic Design",
    description: "Certificates, banners, posters - 5 month internship",
    tools: ["Photoshop", "Premiere Pro", "Blender"],
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: "Film & Theater",
    description: "Screenplay writer, Director, Actor for shorts & acts",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    title: "Sports & Hobbies",
    description: "Swimming, Cricket, Table Tennis, Billiards, Hydroponics",
  },
];

const Extracurricular = () => {
  return (
    <section className="section-padding relative" id="extracurricular">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Beyond Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Outside
            <br />
            <span className="text-gradient">the code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{activity.description}</p>
                  {activity.link && (
                    <a
                      href={activity.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline mt-2"
                    >
                      {activity.link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {activity.tools && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {activity.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
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
