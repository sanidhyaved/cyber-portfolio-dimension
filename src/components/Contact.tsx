import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[#221F26]" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-secondary"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-300"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <a
              href="mailto:sanidhyaved@gmail.com"
              className="hover:text-secondary transition-colors"
            >
              sanidhyaved@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-300"
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p>+91-63772-73784</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-300"
          >
            <MapPin className="w-8 h-8 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
            <p>Pune, Maharashtra</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;