import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { ButterflySVG } from './Butterflies';

// Animated Number Counter Component
function AnimatedCounter({ from = 0, to, duration = 2, suffix = '' }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[90vh] pt-24 lg:pt-28 pb-20 flex items-start overflow-hidden"
    >
      {/* Animated gradient orbs specific to Hero */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10 pb-16">
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <motion.h1 variants={itemVariants} className="text-hero mb-6 text-foreground drop-shadow-sm flex flex-col">
            <span className="mb-2 relative inline-flex items-center">
              Thivya
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="ml-3 inline-block"
              >
                <ButterflySVG size={45} color="#D173C0" className="opacity-80" />
              </motion.div>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent pb-2">Venugopal</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="inline-block mb-8 px-5 py-2 rounded-full glass bg-white/50 border border-primary/20 backdrop-blur-md shadow-sm">
            <span className="font-body font-bold text-primary text-sm tracking-[0.2em] uppercase">UX Designer</span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-body-lg text-foreground font-medium mb-10 max-w-xl leading-relaxed">
            I design products that make people feel understood, supported and empowered. Focused on creating impact on Healthcare and Wellbeing space.
            <motion.span 
              className="inline-block ml-1.5 align-middle -mt-1"
              animate={{ y: [0, -4, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="28" height="28" viewBox="0 0 64 64" fill="#CE93D8" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))' }}>
                <ellipse cx="32" cy="36" rx="2" ry="12" fill="#5c3a58" />
                <path d="M30 24 Q26 16 22 18" fill="none" stroke="#5c3a58" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M34 24 Q38 16 42 18" fill="none" stroke="#5c3a58" strokeWidth="1.5" strokeLinecap="round" />
                <motion.path animate={{ scaleX: [1, 0.7, 1] }} transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "right" }} d="M30 30 C 15 10, -5 25, 15 42 C 5 55, 20 60, 30 46 Z" fill="#CE93D8" />
                <motion.path animate={{ scaleX: [1, 0.7, 1] }} transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "left" }} d="M34 30 C 49 10, 69 25, 49 42 C 59 55, 44 60, 34 46 Z" fill="#CE93D8" />
              </svg>
            </motion.span>
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a href="#work" className="btn-primary group">
              View my Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="mailto:thivya.sev@gmail.com" className="btn-secondary">
              <Mail className="mr-2 w-5 h-5" />
              Email me
            </a>
          </motion.div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
          style={{ y: yImage, opacity: opacityImage }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >


          {/* Photo Frame */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden glass border-4 border-white/60 dark:border-white/10 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10 pointer-events-none transition-opacity group-hover:opacity-0 duration-500" />
            <img 
              src="/photo.jpg.jpg" 
              alt="Thivya Venugopal" 
              className="w-full h-full object-cover object-center filter saturate-100 group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        </motion.div>
      </div>

      {/* Credibility Stats */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/50 bg-white/40 dark:bg-black/30 backdrop-blur-2xl py-8 z-30 shadow-[0_-10px_40px_rgba(26,4,41,0.03)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="font-display font-bold text-5xl text-primary mb-2 drop-shadow-sm">
                <AnimatedCounter from={0} to={4} suffix="+" duration={2.5}/>
              </span>
              <span className="font-body text-xs font-bold text-foreground/60 uppercase tracking-widest">Years Experience</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="font-display font-bold text-5xl text-primary mb-2 drop-shadow-sm">
                <AnimatedCounter from={0} to={3} duration={2} />
              </span>
              <span className="font-body text-xs font-bold text-foreground/60 uppercase tracking-widest">Projects Completed</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="font-display font-bold text-5xl text-primary mb-2 drop-shadow-sm">
                <AnimatedCounter from={0} to={2} duration={1.5} />
              </span>
              <span className="font-body text-xs font-bold text-foreground/60 uppercase tracking-widest">Case Studies</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="font-display font-bold text-xl text-primary leading-tight mb-2 drop-shadow-sm flex items-center h-12 text-center">
                Best UX Researcher
              </div>
              <span className="font-body text-[10px] font-bold text-foreground/60 uppercase tracking-widest leading-relaxed">
                Hackathon <br /> (Design for a Change)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
