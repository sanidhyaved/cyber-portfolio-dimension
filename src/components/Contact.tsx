import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-primary" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Mail className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:sanidhyaved@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              sanidhyaved@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-white"
          >
            <Phone className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+91-63772-73784</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-white"
          >
            <MapPin className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Pune, Maharashtra</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;