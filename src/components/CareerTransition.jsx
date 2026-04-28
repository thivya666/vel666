import { motion } from 'framer-motion';
import { ButterflySVG } from './Butterflies';

export default function CareerTransition() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground mb-4 mt-8">How I Found Myself in Design</h2>
          <p className="font-body text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            How I emerged from a suppressed cocoon to fly freely holding onto my true personality.
          </p>
        </motion.div>

        {/* Circular Lifecycle Layout: 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          
          {/* Background Dashed Circle (Desktop only) */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none pb-12">
            <svg className="w-[85%] h-[85%] opacity-30 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" className="text-primary" strokeWidth="0.5" strokeDasharray="2 3" />
            </svg>
          </div>

          {/* Centerspace Illustration */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center z-10 pointer-events-none pb-12">
            <div className="relative flex items-center justify-center">
              <img src="/portfolio%20pic.png" alt="Thivya Illustration" className="w-72 md:w-[22rem] h-auto max-h-96 object-contain drop-shadow-2xl filter saturate-105 brightness-110 contrast-105" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 relative z-10">
            
            {/* Panel 1: The Caterpillar */}
            <motion.div variants={itemVariants} className="order-1">
              <div className="glass-card p-10 max-w-sm mx-auto rounded-[3.5rem] border-2 border-emerald-300 relative flex flex-col items-center text-center bg-white/60 dark:bg-black/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-colors h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-sm shadow-sm z-20 font-bold text-emerald-800">1</div>
                
                <div className="w-32 h-32 rounded-full border-2 border-emerald-200 flex items-center justify-center mb-6 relative overflow-hidden shadow-inner group bg-emerald-50/50 dark:bg-emerald-900/20">
                  {/* Animated Caterpillar SVG */}
                  <svg width="80" height="50" viewBox="0 0 100 60" className="opacity-80 group-hover:opacity-100 transition-opacity">
                    <path d="M5,45 Q40,30 95,40 Q60,55 5,45" fill="#a7f3d0" />
                    <motion.circle cx="30" cy="35" r="11" fill="#34d399" animate={{ y: [0, -4, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0 }} />
                    <motion.circle cx="43" cy="33" r="11" fill="#10b981" animate={{ y: [0, -4, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.15 }} />
                    <motion.circle cx="56" cy="30" r="13" fill="#059669" animate={{ y: [0, -4, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
                    <path d="M56,17 Q51,7 45,12" stroke="#064e3b" strokeWidth="2" fill="none" />
                    <path d="M56,17 Q61,7 67,12" stroke="#064e3b" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">The Crawl</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">
                  Worked 4 years as a software developer, then stepped away for motherhood. I was moving along a predefined path, acquiring technical skills but searching for my true emotional purpose.
                </p>
              </div>
            </motion.div>

            {/* Panel 2: The Cocoon */}
            <motion.div variants={itemVariants} className="order-2">
              <div className="glass-card p-10 max-w-sm mx-auto rounded-[3.5rem] border-2 border-amber-300 relative flex flex-col items-center text-center bg-white/60 dark:bg-black/30 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-sm shadow-sm z-20 font-bold text-amber-800">2</div>
                
                <div className="w-32 h-32 rounded-full border-2 border-amber-200 flex items-center justify-center mb-6 relative overflow-hidden shadow-inner group bg-amber-50/50 dark:bg-amber-900/20">
                   {/* Animated Cocoon SVG */}
                   <motion.svg width="50" height="70" viewBox="0 0 60 90" className="opacity-80 group-hover:opacity-100 transition-opacity" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "top center" }}>
                     <path d="M30,0 L30,10" stroke="#78350f" strokeWidth="3" />
                     <path d="M30,10 C5,25 0,55 30,85 C60,55 55,25 30,10 Z" fill="#fcd34d" />
                     <path d="M15,30 Q30,40 45,30" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6" />
                     <path d="M18,45 Q30,55 42,45" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6" />
                   </motion.svg>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">The Cocoon</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">
                  Prepared 3 years for public service exams trying to make an impact. Yet, inside this intense cocoon of family expectations, my natural creative and artistic side was completely suppressed.
                </p>
              </div>
            </motion.div>

            {/* Panel 4: Spreading Wings */}
            <motion.div variants={itemVariants} className="order-4 md:order-3">
              <div className="glass-card p-10 max-w-sm mx-auto rounded-[3.5rem] border-2 border-primary relative flex flex-col items-center text-center bg-white/60 dark:bg-black/30 hover:bg-primary/5 transition-colors h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-100 border-2 border-primary flex items-center justify-center text-sm shadow-sm z-20 font-bold text-primary">4</div>
                
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                  <motion.div 
                    animate={{ 
                      y: [0, -6, 0]
                    }} 
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }} 
                  >
                    <motion.div
                      animate={{ scaleX: [1, 0.7, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ButterflySVG size={80} color="#c084fc" className="opacity-100 z-10 drop-shadow-md" />
                    </motion.div>
                  </motion.div>
                </div>
                
                <h3 className="font-display font-semibold text-2xl mb-3 text-primary drop-shadow-sm">Spreading wings</h3>
                <p className="font-body text-foreground/80 text-sm leading-relaxed font-medium">
                  Design brought me alive! Reconnecting my dots of empathy, psychology, and logic. UX lets me freely express my true, vibrant artistic personality to help others.
                </p>
              </div>
            </motion.div>

            {/* Panel 3: The Breakout */}
            <motion.div variants={itemVariants} className="order-3 md:order-4">
              <div className="glass-card p-10 max-w-sm mx-auto rounded-[3.5rem] border-2 border-orange-300 relative flex flex-col items-center text-center bg-white/60 dark:bg-black/30 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center text-sm shadow-sm z-20 font-bold text-orange-800">3</div>
                
                <div className="w-32 h-32 rounded-full border-2 border-orange-200 flex items-center justify-center mb-6 relative overflow-hidden shadow-inner group bg-orange-50/50 dark:bg-orange-900/20">
                   {/* Cracking Cocoon SVG */}
                   <motion.svg width="60" height="85" viewBox="0 0 70 90" className="opacity-90 group-hover:scale-105 transition-transform duration-500">
                     <path d="M35,10 C10,25 5,55 35,85 C65,55 60,25 35,10 Z" fill="#fcd34d" />
                     <path d="M35,10 L30,30 L40,45 L25,60" stroke="#fef08a" strokeWidth="4" fill="none" style={{ filter: "drop-shadow(0 0 5px #fef08a)" }} />
                     <path d="M40,45 L50,55" stroke="#fef08a" strokeWidth="3" fill="none" style={{ filter: "drop-shadow(0 0 3px #fef08a)" }} />
                     <path d="M25,60 C15,50 10,60 20,70" fill="#c084fc" />
                   </motion.svg>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Cracking Shell</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">
                  A personality test led me to UX design. Taking a terrifying leap of faith past my doubts to enroll in DFC burst my creative bubble. The light of my true self finally broke through.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
