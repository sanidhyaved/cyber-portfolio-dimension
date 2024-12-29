import { motion } from "framer-motion";
import { Camera, Palette, Film, Dumbbell } from "lucide-react";

const activities = [
  {
    icon: <Camera className="w-8 h-8 text-secondary" />,
    title: "Photography",
    description: "Lead the photography team in college. View my work on Pexels: https://www.pexels.com/photo/brown-concrete-building-under-blue-sky-17559795/",
  },
  {
    icon: <Palette className="w-8 h-8 text-secondary" />,
    title: "Graphic Design",
    description: "Designed certificates, banners, and posters for college. 5-month internship experience.",
    tools: ["Adobe Photoshop", "Adobe Premiere Pro", "Blender"]
  },
  {
    icon: <Film className="w-8 h-8 text-secondary" />,
    title: "Creative Arts",
    description: "Story screenplay writer, Director, and Actor for Acts and short films. Proficient in creative tools and editing software.",
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-secondary" />,
    title: "Sports & Hobbies",
    description: "Interested in Swimming, Cricket, Table Tennis, Billiards, and Hydroponics.",
  },
];

const Extracurricular = () => {
  return (
    <section className="py-20 bg-primary" id="extracurricular">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-secondary"
        >
          Leadership & Extracurricular
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-start">
                {activity.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-300">{activity.description}</p>
                  {activity.tools && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activity.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
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