import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-2xl tracking-wide text-foreground hover:text-primary transition-colors">
          SV<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-primary/40 mr-1">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-lg text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary/40 mr-2 font-mono text-xs">0{i + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
