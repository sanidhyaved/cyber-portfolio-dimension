import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "D.Y. Patil College of Engineering, Akurdi",
    degree: "Bachelor of Engineering in Electronics and Telecommunication",
    location: "Pune, Maharashtra",
    period: "Aug. 2018 – May 2022",
    score: "9.34",
  },
  {
    school: "Growell Public School",
    degree: "Higher Secondary School Certificate Exam (HSC)",
    location: "Kota, Rajasthan",
    period: "July 2017 – May 2018",
    score: "81",
  },
  {
    school: "Hyundan Model School",
    degree: "Secondary School Certificate Exam (SSC)",
    location: "Ramganjmandi, Rajasthan",
    period: "May 2016 – June 2017",
    score: "86.17",
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-[#221F26]" id="education">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-secondary"
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-secondary mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-secondary">{edu.school}</h3>
                  <p className="text-white font-medium mt-1">{edu.degree}</p>
                  <p className="text-gray-400 mt-1">
                    {edu.location} | {edu.period}
                  </p>
                  <p className="text-gray-300 mt-1">Score: {edu.score}</p>
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