import { motion } from 'framer-motion';
import LiteYouTube from './LiteYouTube';

export default function VideoCenterpiece() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display mb-4 text-foreground">My Design Philosophy</h2>
          <p className="text-body-lg text-foreground/70 max-w-2xl mx-auto">
            How I turn human struggles into simple, empathetic digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video rounded-3xl overflow-hidden bg-black/5 border-2 border-white/50 dark:border-white/10 shadow-2xl relative"
          >
            <div className="w-full h-full">
              <LiteYouTube videoId="gS8AmMiIC5E" title="My Design Story" />
            </div>
          </motion.div>

          {/* Talking Points */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="flex flex-col space-y-8"
          >
            {[
              {
                title: "What I design",
                desc: "I design healthcare and wellbeing-focused digital products that support people in real-life situations."
              },
              {
                title: "What problems I solve",
                desc: "I solve problems where people feel overwhelmed, confused, or unsupported by creating simple, intuitive and emotionally thoughtful experiences."
              },
              {
                title: "What roles I'm open to",
                desc: "UX Designer or Product Designer roles where I can create meaningful, human-centered impact."
              }
            ].map((point, i) => (
              <motion.div 
                key={i} 
                className="flex items-start space-x-5 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 border border-primary/20 text-primary flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">{point.title}</h3>
                  <p className="font-body text-foreground/70 leading-relaxed text-sm md:text-base">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
