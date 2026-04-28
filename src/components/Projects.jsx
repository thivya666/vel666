import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const projects = [
  {
    title: "R-AID",
    context: "Healthcare UX case study addressing delays in emergency care due to inaccessible patient medical history.",
    role: "UX Designer (End-to-end: Research, Strategy, Prototyping)",
    timeline: "10 weeks",
    team: "Team project (Hackathon, 4 members)",
    star: {
      s: "Emergency care is delayed because patient medical data is fragmented or missing during critical moments.",
      t: "Design a system that enables doctors to access accurate patient information within seconds, even in low-connectivity.",
      a: "Conducted research with patients & doctors. Designed a QR-based, offline-first solution with simplified emergency flows and minimal UI.",
      r: "Concept enabled faster access to critical data, reduced dependency on verbal recall, and improved decision-making clarity."
    },
    metrics: ["Time-to-task ↓ ~40%", "Data access time < 5 seconds", "Improved response efficiency"],
    tools: ["Figma", "FigJam", "Perplexity", "ChatGPT", "Gamma"],
    fileUrl: "/R-AID/Case%20study%20R-AID_pdf%20(2).pdf",
    iframeUrl: "", // Uses fileUrl fallback in the modal
    videoUrl: "https://www.youtube.com/embed/Qoq8zUIfBsY",
    gradientClass: "from-[#008080]/15 to-[#008080]/5 dark:from-[#008080]/40 dark:to-[#008080]/10"
  },
  {
    title: "Traqio",
    context: "Founder Operating System for Visible Traction. Helping early-stage founders show credible progress to investors.",
    role: "UX / Product Designer",
    timeline: "10 weeks (Hackathon Project)",
    team: "Team project (Cross-functional collaboration)",
    star: {
      s: "Early-stage founders work across multiple scattered tools, making daily execution invisible and investor trust hard to gain.",
      t: "Design a founder-first system that helps users structure work, track progress, and present credible traction.",
      a: "Reframed traction as 'proof of execution'. Designed Traqio with an AI Planner, Proof-of-Work logs, and an AI Analyst for investor summaries.",
      r: "Transformed scattered activity into visible progress. Received strong validation for its emotional relevance and investor-aligned approach."
    },
    metrics: ["Visible execution tracking", "Reduced founder anxiety", "Improved investor clarity"],
    tools: ["Figma", "Notion", "ChatGPT", "AI tools"],
    fileUrl: "/Traqio/TRAQIO%20-%20UX%20case%20study.pdf",
    iframeUrl: "https://www.canva.com/design/DAHFCb03d6c/KBAZG_bE7jb4rJ7O47RW4Q/view?embed",
    videoUrl: "https://www.youtube.com/embed/sONuEStONiI",
    gradientClass: "from-[#02084D]/15 to-[#02084D]/5 dark:from-[#02084D]/60 dark:to-[#02084D]/20"
  },
  {
    title: "BetterParent",
    context: "AI Calm Companion for Parents managing toddler tantrums using positive reinforcement.",
    role: "UX Designer",
    timeline: "1 week",
    team: "Individual project",
    star: {
      s: "Parents struggle to handle tantrums calmly and often resort to negative reinforcement due to stress.",
      t: "Design a real-time, judgment-free solution to help parents regulate emotions and respond positively.",
      a: "Conducted surveys to identify emotional triggers. Designed an AI voice assistant providing real-time guidance, affirmations, and habit tracking.",
      r: "Users reported feeling calmer, more confident, and better equipped to handle emotional situations in early feedback."
    },
    metrics: ["Improved emotional regulation", "Higher parent confidence", "Real-time support access"],
    tools: ["Figma", "Google Forms", "ChatGPT", "Lovable"],
    fileUrl: "/Better%20Parent/Better%20Parent%20Calm%20Companion%20UX.pdf",
    iframeUrl: "", // Uses fileUrl fallback in the modal
    videoUrl: "https://www.youtube.com/embed/RjdhSh_O6n4",
    gradientClass: "from-[#FFDAB9]/60 to-[#FFB6C1]/60 dark:from-[#FFDAB9]/20 dark:to-[#FFB6C1]/20"
  }
];

export default function Projects() {
  const [activeIframe, setActiveIframe] = useState(null);

  return (
    <section id="work" className="py-32 relative bg-accent/5">
      {/* Decorative Blur */}
      <div className="absolute right-0 top-1/3 w-[30%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-display text-foreground">Case Studies</h2>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`glass-card p-5 md:p-6 lg:p-8 overflow-hidden relative group bg-gradient-to-br border-white/50 dark:border-white/10 shadow-lg ${project.gradientClass}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Meta Sidebar */}
                <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-display font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="font-body text-base font-semibold text-primary mb-6 leading-relaxed opacity-90">{project.context}</p>
                    
                    <div className="space-y-5">
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-foreground/50 mb-1 font-bold">Role</span>
                        <span className="text-sm font-medium text-foreground">{project.role}</span>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-foreground/50 mb-1 font-bold">Timeline & Team</span>
                        <span className="text-sm font-medium text-foreground">{project.timeline} <br className="hidden lg:block"/> {project.team}</span>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-foreground/50 mb-2 font-bold">Tools</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs font-semibold bg-white/50 dark:bg-black/50 border border-border/50 rounded-lg text-foreground/80">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <span className="block text-xs uppercase tracking-wider text-foreground/50 mb-3 font-bold">Key Metrics</span>
                        <div className="flex flex-col gap-3">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="flex items-center text-sm font-semibold text-foreground bg-white/40 dark:bg-black/20 p-3 rounded-xl border border-white/40 dark:border-white/5 backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-0.5">
                              <span className="text-primary font-bold mr-3 text-lg leading-none">✦</span>
                              <span className="leading-tight">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block pt-4 border-t border-border/50">
                    <button onClick={() => setActiveIframe(project.iframeUrl || project.fileUrl)} className="btn-primary w-full group py-4">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Content Area - Video & STAR */}
                <div className="lg:col-span-8 bg-white/40 dark:bg-black/20 rounded-3xl p-4 md:p-6 border border-white/50 dark:border-white/5 relative flex flex-col gap-6">
                  {/* Video Player */}
                  {project.videoUrl ? (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-inner border border-white/50 dark:border-white/5 bg-black/5">
                      <iframe 
                        className="w-full h-full"
                        src={project.videoUrl} 
                        title={`${project.title} Intro Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-white/50 dark:bg-black/40 rounded-2xl border-2 border-dashed border-border/60 flex flex-col items-center justify-center text-foreground/50 shadow-inner backdrop-blur-sm group hover:border-primary/50 transition-colors">
                      <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">▶️</span>
                      <span className="font-display font-semibold text-sm tracking-widest uppercase">Project Intro Video</span>
                    </div>
                  )}

                  {/* STAR 4-Block Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground/70 mb-3 border-b border-border/50 pb-2">
                        <span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center mr-2 shadow-sm font-display leading-none">S</span>ituation
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-body">{project.star.s}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground/70 mb-3 border-b border-border/50 pb-2">
                        <span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center mr-2 shadow-sm font-display leading-none">T</span>ask
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-body">{project.star.t}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground/70 mb-3 border-b border-border/50 pb-2">
                        <span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center mr-2 shadow-sm font-display leading-none">A</span>ction
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-body">{project.star.a}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground/70 mb-3 border-b border-border/50 pb-2">
                        <span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center mr-2 shadow-sm font-display leading-none">R</span>esult
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-body">{project.star.r}</p>
                    </div>
                  </div>

                  <div className="mt-8 lg:hidden">
                    <button onClick={() => setActiveIframe(project.iframeUrl || project.fileUrl)} className="btn-primary w-full group py-4">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Iframe Modal */}
      <AnimatePresence>
        {activeIframe && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setActiveIframe(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full bg-background flex flex-col z-10"
            >
              <div className="flex justify-between items-center p-2 md:p-3 border-b border-border/50 bg-background/50 backdrop-blur-xl absolute top-0 inset-x-0 z-20">
                <h3 className="font-display font-semibold text-foreground tracking-wide px-2 text-base">Case Study Viewer</h3>
                <button 
                  onClick={() => setActiveIframe(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-muted text-foreground/80 hover:text-primary transition-all shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 w-full bg-muted/20 pt-12">
                <iframe 
                  src={activeIframe} 
                  className="w-full h-full border-none"
                  allowFullScreen 
                  title="Case Study Content"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
