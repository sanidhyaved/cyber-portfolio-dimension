import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary p-4">
      <div className="container mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Sanidhya Ved</h1>
          <h2 className="text-2xl mb-6">Security Analyst & Web Pentester</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Passionate about cybersecurity with expertise in Web Application Security Testing,
            Vulnerability Assessment, and Penetration Testing.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/sanidhyaved"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sanidhyaved"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sanidhyaved@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;