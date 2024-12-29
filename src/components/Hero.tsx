import { motion } from "framer-motion";
import { Shield, Terminal, Lock } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-[#221F26] p-4">
      <div className="container mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-12 h-12 text-secondary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Terminal className="w-12 h-12 text-accent" />
            </motion.div>
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Lock className="w-12 h-12 text-secondary" />
            </motion.div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Sanidhya Ved
          </h1>
          <h2 className="text-2xl mb-6 text-secondary">Security Analyst & Web Pentester</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Passionate about cybersecurity with expertise in Web Application Security Testing,
            Vulnerability Assessment, and Penetration Testing. Ranked 13th globally in Microsoft Security Response Center.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://github.com/sanidhyaved"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="mailto:sanidhyaved@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;