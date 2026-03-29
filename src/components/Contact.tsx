import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "sanidhyaved@gmail.com", href: "mailto:sanidhyaved@gmail.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-63772-73784", href: "tel:+916377273784" },
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Pune, Maharashtra" },
];

const Contact = () => {
  return (
    <section className="py-32 relative" id="contact">
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary block mb-3">
            06 — Contact
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-foreground">
            LET'S
            <br />
            <span className="text-primary text-glow-green">CONNECT</span>
          </h2>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <a
            href="mailto:sanidhyaved@gmail.com"
            className="group inline-flex items-center gap-3 font-display text-4xl md:text-6xl text-foreground hover:text-primary transition-colors"
          >
            SAY HELLO
            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0" />
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-4">
          {contacts.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {c.href ? (
                <a href={c.href} className="block glass rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors mb-3 flex justify-center">
                    {c.icon}
                  </div>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground block mb-1">
                    {c.label}
                  </span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                    {c.value}
                  </span>
                </a>
              ) : (
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-muted-foreground mb-3 flex justify-center">{c.icon}</div>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground block mb-1">
                    {c.label}
                  </span>
                  <span className="text-sm text-foreground">{c.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-display text-xl text-foreground">
            SV<span className="text-primary">.</span>
          </span>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} SANIDHYA VED — ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
