import { motion } from "framer-motion";
import { Shield, Code, Zap } from "lucide-react";

const highlights = [
  { icon: <Shield className="w-5 h-5" />, label: "Security First", description: "Deep expertise in vulnerability assessment" },
  { icon: <Code className="w-5 h-5" />, label: "Full Stack", description: "Python, JavaScript, and modern frameworks" },
  { icon: <Zap className="w-5 h-5" />, label: "Impact Driven", description: "Real-world CVEs and global recognition" },
];

const About = () => {
  return (
    <section className="section-padding relative" id="about">
      <div className="gradient-blob w-[400px] h-[400px] bg-primary/10 top-[20%] right-[-100px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building a safer
            <br />
            <span className="text-gradient">digital world</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
              I'm a cybersecurity professional with a passion for uncovering vulnerabilities and 
              strengthening digital defenses. With experience spanning penetration testing, SaaS 
              security posture management, and compliance frameworks, I bring a holistic approach 
              to security.
            </p>
            <p className="text-muted-foreground/60 leading-relaxed">
              My work has been recognized by industry leaders — from ranking <span className="text-primary font-medium">#13 globally on Microsoft MSRC</span> to 
              discovering vulnerabilities in Intel's software (CVE-2023-27298). I believe in making 
              the internet a safer place, one vulnerability at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-card glow-border rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{h.label}</h3>
                  <p className="text-sm text-muted-foreground">{h.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
