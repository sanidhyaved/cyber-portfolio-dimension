import { motion } from "framer-motion";
import { Shield, Terminal, Lock } from "lucide-react";
import Globe3D from "./Globe3D";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-[#221F26] p-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221F26_1px,transparent_1px),linear-gradient(to_bottom,#221F26_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container mx-auto text-white relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="flex space-x-4 mb-6">
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
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-secondary to-accent">
              Sanidhya Ved
            </h1>
            <h2 className="text-2xl mb-6 text-secondary">Security Analyst & Web Pentester</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-xl">
              Passionate about cybersecurity with expertise in Web Application Security Testing,
              Vulnerability Assessment, and Penetration Testing. Ranked 13th globally in Microsoft Security Response Center.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/sanidhyaved"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors flex items-center space-x-2 shadow-lg shadow-secondary/20"
              >
                <Terminal className="w-4 h-4" />
                <span>View Projects</span>
              </motion.a>
              <motion.a
                href="mailto:sanidhyaved@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Globe3D />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;