import { motion } from "framer-motion";
import { Shield, Terminal, Youtube, Award } from "lucide-react";

const achievements = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Microsoft MSRC",
    subtitle: "Global Rank #13",
    description: "13th position globally in Microsoft Security Response Center Q3 2022 leaderboard",
    highlight: true,
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Intel CVE",
    subtitle: "CVE-2023-27298",
    description: "Assigned CVE affecting Intel's WULT software",
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "The Cyber Explorers",
    subtitle: "YouTube Channel",
    description: "Founded cybersecurity education YouTube channel for the community",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 relative" id="achievements">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-2 block">
            // achievements.unlock
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-lg border ${
                a.highlight ? 'border-primary/40 box-glow' : 'border-border'
              } hover:border-primary/40 p-6 transition-all duration-500 overflow-hidden`}
            >
              {a.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded border ${
                  a.highlight ? 'border-primary/50 text-primary' : 'border-primary/20 text-muted-foreground'
                } flex items-center justify-center group-hover:text-primary group-hover:border-primary/50 transition-all`}>
                  {a.icon}
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground">{a.title}</h3>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-primary/70">{a.subtitle}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
