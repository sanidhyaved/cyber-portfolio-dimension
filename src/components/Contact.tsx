import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/sanidhyaved", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/sanidhyaved", label: "LinkedIn" },
  //{ icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

const Contact = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="gradient-blob w-[600px] h-[600px] bg-primary/10 top-[-200px] left-[-200px] animate-glow-pulse" />
      <div className="gradient-blob w-[400px] h-[400px] bg-secondary/10 bottom-[-100px] right-[-100px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's
            <span className="text-gradient"> connect</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12"
          >
            <div className="grid sm:grid-cols-3 w-full gap-6">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "sanidhyaved@gmail.com", href: "mailto:sanidhyaved@gmail.com" },
                { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91-63772-73784", href: "tel:+916377273784" },
                { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Pune, Maharashtra" },
              ].map((c, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-primary/30 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 shadow-lg">
                    {c.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground block mb-1">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest font-mono">My Socials</p>
              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110 shadow-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
