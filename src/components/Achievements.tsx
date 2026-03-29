import { motion } from "framer-motion";
import { Shield, Terminal, Youtube } from "lucide-react";

const achievements = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Microsoft MSRC",
    metric: "#13",
    metricLabel: "Global Rank",
    description: "Q3 2022 Microsoft Security Response Center leaderboard",
    featured: true,
  },
  {
    icon: <Terminal className="w-7 h-7" />,
    title: "Intel CVE",
    metric: "CVE",
    metricLabel: "2023-27298",
    description: "Assigned CVE affecting Intel's WULT software",
  },
  {
    icon: <Youtube className="w-7 h-7" />,
    title: "The Cyber Explorers",
    metric: "YT",
    metricLabel: "Channel",
    description: "Founded cybersecurity education YouTube channel",
  },
];

const Achievements = () => {
  return (
    <section className="py-32 relative" id="achievements">
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary block mb-3">
            04 — Achievements
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-foreground">
            NOTABLE
            <br />
            <span className="text-primary text-glow-green">WINS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((a, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`group glass rounded-2xl p-8 hover-lift relative overflow-hidden ${
                a.featured ? 'md:row-span-1' : ''
              }`}
            >
              {a.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              )}

              <div className="flex items-start justify-between mb-8">
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {a.icon}
                </div>
                {a.featured && (
                  <span className="font-mono text-[9px] tracking-widest uppercase text-primary/60 border border-primary/15 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="font-display text-5xl text-foreground group-hover:text-primary transition-colors">
                  {a.metric}
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground block mt-1">
                  {a.metricLabel}
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {a.title}
              </h3>
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
