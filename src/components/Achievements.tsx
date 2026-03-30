import { motion } from "framer-motion";
import { Shield, Terminal, Youtube, Award } from "lucide-react";

const achievements = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Microsoft MSRC",
    metric: "#13",
    metricLabel: "Global Rank",
    description: "Q3 2022 Microsoft Security Response Center leaderboard",
    featured: true,
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Intel CVE Discovery",
    metric: "CVE",
    metricLabel: "2023-27298",
    description: "Assigned CVE affecting Intel's WULT software",
  },
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "The Cyber Explorers",
    metric: "YT",
    metricLabel: "Channel",
    description: "Founded cybersecurity education YouTube channel",
  },
];

const Achievements = () => {
  return (
    <section className="section-padding relative" id="achievements">
      <div className="gradient-blob w-[500px] h-[500px] bg-primary/10 top-[-100px] right-[-200px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Notable
            <br />
            <span className="text-gradient">wins</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`glass-card glow-border rounded-2xl p-8 relative overflow-hidden ${
                a.featured ? 'ring-1 ring-primary/10' : ''
              }`}
            >
              {a.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              )}

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {a.icon}
                </div>
                {a.featured && (
                  <span className="font-mono text-[9px] tracking-widest uppercase text-primary border border-primary/15 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Award className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-5xl font-bold text-gradient">{a.metric}</span>
                <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground block mt-1">
                  {a.metricLabel}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
