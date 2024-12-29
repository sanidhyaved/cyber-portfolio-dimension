import { motion } from "framer-motion";
import { Terminal, Bug, Server } from "lucide-react";

const experiences = [
  {
    title: "Security Analyst",
    company: "Codewits Solutions Pvt. Ltd.",
    period: "July 2022 – Present",
    description: [
      "R and D on SaaS Security Posture Management (SSPM)",
      "Extract and process data from SaaS applications",
      "Market Intelligence and Data Analysis",
      "Expertise in NIST-RMF, PCI-DSS, SOC-2, CIS Controls",
    ],
    icon: <Server className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Web Pentesting",
    company: "Freelancing",
    period: "May 2019 – Present",
    description: [
      "Security Engineer with 3 years of experience",
      "Manual penetration testing and vulnerability assessment",
      "Technical vulnerability communication",
      "Application security consultation",
    ],
    icon: <Bug className="w-8 h-8 text-secondary" />,
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-[#221F26]" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-secondary"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 bg-primary/50 rounded-lg p-6 border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                {exp.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400">
                    {exp.company} | {exp.period}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="ml-4">
                    {item}
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

export default Experience;