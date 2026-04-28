import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      title: "Why Design?",
      icon: "💡",
      text: "I chose design because it allows me to combine empathy, creativity, and problem-solving to create meaning. I've always been curious about human behavior and naturally drawn to simplifying problems.",
    },
    {
      title: "What Drives Me",
      icon: "❤️",
      text: "I'm driven by empathy, kindness, and making a positive difference. Thoughtful design can help people feel supported, understood, and empowered, especially in challenging situations.",
    },
    {
      title: "How I Work",
      icon: "🔄",
      text: "I start by understanding users deeply, then analyze insights to bring simple, practical solutions. I use structured thinking, value clarity, and continuous learning in my process.",
    },
    {
      title: "Where I Belong",
      icon: "🏥",
      text: "I want to work with teams building products that genuinely help people, especially in areas like wellbeing and healthcare, where empathy matters most.",
    }
  ];

  return (
    <section className="py-32 relative bg-white/30 dark:bg-black/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display mb-4 text-foreground"
          >
            About me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-foreground/70 max-w-2xl"
          >
            A closer look at my professional values, human philosophy, and how I approach the craft of product design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-4 md:p-5 group hover:border-primary/30 transition-colors bg-gradient-to-br from-[#FFDAB9]/40 to-[#D173C0]/40 dark:from-[#FFDAB9]/10 dark:to-[#D173C0]/10"
            >
              <div className="text-2xl mb-4 bg-muted/50 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{card.title}</h3>
              <p className="font-body text-foreground/70 leading-relaxed text-xs md:text-sm">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Accolades Section */}
        <div className="mt-20 pt-16 border-t border-border/30">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-display text-3xl text-foreground">My Accolades</h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Best UX Researcher.pdf', 'DFC Hackathon v5.0.pdf', 'DFC Hackathon v6.0.pdf'].map((cert, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex flex-col items-center group"
              >
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-white/50 dark:border-white/10 bg-white group-hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
                  <iframe 
                    src={`/certificates/${cert}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                    className="w-full h-full border-none pointer-events-none" 
                    title={cert}
                  />
                  <div className="absolute inset-0 z-10"></div>
                </div>
                <span className="font-display font-semibold mt-5 text-foreground/80 tracking-wide text-sm">{cert.replace('.pdf', '').replace(' (1)', '')}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
