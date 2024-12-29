import { motion } from "framer-motion";
import { Award, Shield, Youtube } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Microsoft Security Recognition",
    description:
      "13th position globally in Microsoft Security Response Center Q3 2022 leaderboard",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Intel CVE Assignment",
    description: "Assigned CVE-2023-27298 affecting Intel's WULT software",
  },
  {
    icon: <Youtube className="w-8 h-8 text-primary" />,
    title: "Community Contribution",
    description:
      'Founded "The Cyber Explorers" YouTube channel for cybersecurity education',
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50" id="achievements">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;