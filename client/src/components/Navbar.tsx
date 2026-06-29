import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Sobre', 'Destinos', 'Programação', 'Investimento'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-4 group"
          whileHover={{ scale: 1.02 }}
        >
          <img src="/logos/cieam.png" alt="CIEAM" className="h-12 w-auto" />
          <div className="w-px h-8 bg-white/20" />
          <img src="/logos/mb.png" alt="MB Consultoria" className="h-12 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E31E24] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="px-6 py-2.5 bg-[#E31E24] text-white text-[10px] font-black rounded uppercase tracking-widest hover:bg-[#C1191F] transition-all"
          >
            Inscrever
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-[#1A1A1A] border-t border-white/10"
        >
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-bold text-white/60 hover:text-white uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full py-4 bg-[#E31E24] text-white text-xs font-black rounded uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Inscrever
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
