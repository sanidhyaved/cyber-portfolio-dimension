import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/sanidhyaved", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/sanidhyaved", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:sanidhyaved@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section className="section-padding relative" id="contact">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm rounded-xl hover:shadow-[0_0_40px_hsl(230_90%_65%/0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "sanidhyaved@gmail.com", href: "mailto:sanidhyaved@gmail.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-63772-73784", href: "tel:+916377273784" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Pune, Maharashtra" },
              ].map((c, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-foreground hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-sm text-foreground">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all hover:scale-110"
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
