import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Case Studies', href: '#work' },
  { name: 'About', href: '#about' },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex items-center justify-center transition-all duration-300",
          isScrolled ? "py-2" : "py-6 mt-2"
        )}
      >
        <div className={cn(
          "flex items-center justify-between w-full max-w-7xl px-6 py-3 transition-all duration-300 rounded-2xl mx-auto",
          isScrolled ? "glass bg-white/60 dark:bg-black/50 backdrop-blur-lg border border-border/50" : "bg-transparent border border-transparent"
        )}>
          
          {/* Logo */}
          <motion.a 
            href="#home"
            className="flex items-center relative group"
            whileHover="hover"
          >
            <img src="/logo.png.png" alt="Thivya Venugopal Logo" className="h-16 md:h-20 w-auto relative z-10 drop-shadow-md transition-transform group-hover:scale-105 duration-300 mix-blend-multiply dark:mix-blend-screen" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className="relative text-sm font-body font-semibold text-foreground/80 hover:text-primary transition-colors py-2 group"
              >
                {link.name}
                {/* Active state indicator */}
                {activeSection === link.name && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
                {/* Hover underline */}
                {activeSection !== link.name && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/40 group-hover:w-full transition-all duration-300 rounded-full"></span>
                )}
              </a>
            ))}
            
            <motion.a 
              animate={{ y: [0, -4, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              href="https://drive.google.com/file/d/16Q-qPM8WEyHB68bzTPW45qe1VmVf_ezG/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2 px-4 rounded-xl glass bg-white/70 dark:bg-black/50 shadow-sm border border-white/60 hover:shadow-md transition-all duration-300 group hover:scale-[1.02] ml-4"
            >
              <span className="font-body font-bold text-sm text-foreground tracking-wide">View Resume</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform text-primary" />
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/40 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background border-l border-border glass p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-end mb-12 mt-2">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary p-2 bg-muted/30 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-display text-4xl font-medium text-foreground hover:text-primary transition-colors border-b border-border/50 pb-4"
                    onClick={() => {
                      setActiveSection(link.name);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto pb-8 space-y-4 text-center">
                <a href="mailto:thivya.sev@gmail.com" className="btn-primary w-full">
                  Email me
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
