import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full w-full max-w-4xl px-4 md:px-6 h-14 ${
          scrolled ? 'glass-strong shadow-xl shadow-background/50 border border-white/10' : 'bg-background/40 backdrop-blur-md border border-white/5'
        }`}
      >
        <a href="#home" className="text-xl font-bold text-foreground hover:text-primary transition-colors flex-shrink-0">
          SV<span className="text-gradient">.</span>
        </a>

        {/* Desktop Links - Pill Shaped */}
        <div className="hidden md:flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex ml-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_20px_hsl(230_90%_65%/0.4)] transition-all hover:scale-105"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-16 left-0 right-0 glass-strong border border-white/10 shadow-2xl rounded-3xl p-4 flex flex-col gap-2 md:hidden origin-top"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-medium text-foreground hover:text-primary hover:bg-white/5 transition-colors text-center"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center w-full px-5 py-3 text-base font-medium rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
