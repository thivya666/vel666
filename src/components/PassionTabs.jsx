import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: "reads",
    title: "My reads",
    headline: "Exploring the intersections of human behavior and technology.",
    story: "Reading helps me understand the 'why' behind human decisions. I dive into cognitive psychology and behavioral design to ensure my solutions are not just functional, but emotionally resonant.",
    books: [
      { title: "Eat That Frog", url: "https://covers.openlibrary.org/b/isbn/9781524785461-L.jpg" },
      { title: "Hooked", url: "https://covers.openlibrary.org/b/isbn/9781591847786-L.jpg" },
      { title: "The Design of Everyday Things", url: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg" },
      { title: "Atomic Habits", url: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg" },
      { title: "Think Like a Monk", url: "https://covers.openlibrary.org/b/isbn/9781982134488-L.jpg" },
      { title: "The Secret", url: "https://covers.openlibrary.org/b/isbn/9781582701707-L.jpg" },
      { title: "How to Develop Self-Confidence", url: "https://covers.openlibrary.org/b/isbn/9781501171987-L.jpg" }
    ]
  },
  {
    id: "projects",
    title: "Side Projects",
    headline: "Building for passion, learning by doing.",
    story: "My side projects usually stem from real-world frustrations. When I see a problem that technology could resolve with a bit more empathy, I map it out. It's my sandbox for untested ideas and genuine curiosity.",
    pdfLink: "/side%20projects/Shiny,%20The%20Rabbit%20with%20Golden%20ears_pdf.pdf"
  },
  {
    id: "communities",
    title: "Communities",
    headline: "Growing together with fellow creators.",
    story: "Transitioning into design taught me the immense value of community. I actively share my journey and learn from brilliant minds. Community grounds me and challenges my assumptions every single day.",
    image: "/communities/design_for_a_change.png.png",
    imageTitle: "Design for a Change with Jagadeesh"
  }
];

export default function PassionTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-4">How do I recharge myself?</h2>
          <p className="text-body-lg text-foreground/70">What fuels my curiosity and shapes my perspective.</p>
        </div>

        <div className="glass-card bg-white/40 dark:bg-black/20 p-2 md:p-3 max-w-3xl mx-auto rounded-[2rem] flex flex-wrap justify-center gap-2 mb-12 border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab.id ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="passion-tab-bubble"
                  className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl lg:max-w-6xl mx-auto glass-card border border-primary/10 p-8 md:p-12 min-h-[350px] relative bg-white/60 dark:bg-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-display font-semibold text-foreground leading-tight">{activeContent.headline}</h3>
              
              {activeContent.bullets && (
                <ul className="space-y-4 font-body text-foreground/80 mb-8">
                  {activeContent.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-4 text-xl leading-none mt-1 opacity-70">✦</span>
                      <span className="text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className={activeContent.bullets ? "border-t border-border/60 pt-6" : "pt-2"}>
                <p className="font-body text-sm leading-relaxed text-foreground/70 italic bg-background/50 p-4 rounded-xl border border-border/50">
                  "{activeContent.story}"
                </p>
                {activeContent.books && (
                  <div className="mt-8 overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white/80 dark:before:from-black/80 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white/80 dark:after:from-black/80 after:to-transparent">
                    <motion.div 
                      className="flex space-x-6 w-max py-2"
                      animate={{ x: [-1000, 0] }}
                      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    >
                      {[...activeContent.books, ...activeContent.books, ...activeContent.books].map((book, i) => (
                        <div key={i} className="w-32 h-48 md:w-40 md:h-60 flex-shrink-0 bg-muted/30 rounded-md overflow-hidden shadow-sm border border-border/30 hover:scale-105 transition-transform">
                          <img src={book.url} alt={book.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                )}
                
                {activeContent.pdfLink && (
                  <div className="mt-10 flex justify-center">
                    <a href={activeContent.pdfLink} target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="w-64 h-80 md:w-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white/50 dark:border-white/10 bg-white group-hover:scale-105 transition-transform duration-500 relative">
                        <iframe 
                          src={`${activeContent.pdfLink}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                          className="w-full h-full border-none pointer-events-none" 
                          title="Children's Book PDF"
                        />
                        <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                           <span className="opacity-0 group-hover:opacity-100 bg-primary text-white px-6 py-3 rounded-full font-semibold transition-opacity shadow-lg tracking-wide">Read Book</span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
                
                {activeContent.image && (
                  <div className="mt-10 flex flex-col items-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass shadow-lg border-2 border-primary/20 flex items-center justify-center p-4 bg-white/60 dark:bg-black/20">
                      <img src={activeContent.image} alt="Community Logo" className="w-full h-full object-contain drop-shadow-md" onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Logo+Missing" }} />
                    </div>
                    {activeContent.imageTitle && (
                      <span className="mt-6 font-display font-semibold text-xl text-foreground/90 tracking-wide text-center">{activeContent.imageTitle}</span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
