import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

const skillsData = {
  Languages: {
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    skills: ["Python", "C", "HTML/CSS", "JavaScript"],
  },
  Tools: {
    icon: <Wrench className="w-8 h-8 text-secondary" />,
    skills: ["VS Code", "Burpsuite", "OWASP ZAP", "OSINT tools"],
  },
  Databases: {
    icon: <Database className="w-8 h-8 text-secondary" />,
    skills: ["SQL", "MongoDB"],
  },
};

const Skills = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-secondary"
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(skillsData).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;