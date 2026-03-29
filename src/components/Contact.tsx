import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "sanidhyaved@gmail.com",
    href: "mailto:sanidhyaved@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91-63772-73784",
    href: "tel:+916377273784",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Pune, Maharashtra",
  },
];

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-2 block">
            // connect.init
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary">
            Get In Touch
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-6">
          {contacts.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              {c.href ? (
                <a
                  href={c.href}
                  className="block bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/40 p-6 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded border border-primary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 mx-auto mb-3 transition-all">
                    {c.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                    {c.label}
                  </span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {c.value}
                  </span>
                </a>
              ) : (
                <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6">
                  <div className="w-10 h-10 rounded border border-primary/20 flex items-center justify-center text-muted-foreground mx-auto mb-3">
                    {c.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
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
          className="mt-20 text-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-6" />
          <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Sanidhya Ved — Built with precision
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
