import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [touched, setTouched] = useState({});

  const isValid = formData.name && formData.email.includes('@') && formData.message;

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-background border-t border-border/30">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Get In Touch
          </div>
          <h2 className="text-display mb-4 text-foreground">Let's Connect</h2>
          <p className="text-body-lg text-foreground/70 max-w-xl mx-auto">
            I'm currently open for UX/Product Designer roles. Whether it's a job opportunity, a design task, or a quick portfolio review, I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border border-border/80 bg-white/70 dark:bg-black/40 shadow-xl"
        >
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-primary mb-6 drop-shadow-md" />
              <h3 className="text-3xl font-display font-bold mb-3">Message Sent!</h3>
              <p className="text-foreground/70 mb-10 text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
              <button onClick={() => {setStatus('idle'); setFormData({ name: '', email: '', role: '', message: '' }); setTouched({});}} className="btn-secondary">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground/80 tracking-wide uppercase">Name <span className="text-primary">*</span></label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                    className={`w-full px-5 py-4 rounded-xl bg-background/80 border focus:ring-2 outline-none transition-all ${touched.name && !formData.name ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-border focus:border-primary focus:ring-primary/20'}`}
                  />
                  {touched.name && !formData.name && <p className="text-xs text-red-500 font-semibold mt-1">Name is required.</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground/80 tracking-wide uppercase">Email <span className="text-primary">*</span></label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                    className={`w-full px-5 py-4 rounded-xl bg-background/80 border focus:ring-2 outline-none transition-all ${touched.email && !formData.email.includes('@') ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-border focus:border-primary focus:ring-primary/20'}`}
                  />
                  {touched.email && !formData.email.includes('@') && <p className="text-xs text-red-500 font-semibold mt-1">Valid email is required.</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-bold text-foreground/80 tracking-wide uppercase">Role / Company <span className="text-muted-foreground/60 font-normal lowercase tracking-normal">(Optional)</span></label>
                <input
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  placeholder="e.g. Design Recruiter at Acme"
                  className="w-full px-5 py-4 rounded-xl bg-background/80 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground/80 tracking-wide uppercase">Message <span className="text-primary">*</span></label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onBlur={() => handleBlur('message')}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Hi Thivya, I'd love to invite you for an interview..."
                  className={`w-full px-5 py-4 rounded-xl bg-background/80 border focus:ring-2 outline-none transition-all resize-none ${touched.message && !formData.message ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-border focus:border-primary focus:ring-primary/20'}`}
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 pb-2">
                <p className="text-xs font-semibold text-foreground/50 flex-1 flex items-center bg-muted/50 px-3 py-2 rounded-lg">
                  <span className="mr-2">🔒</span> No spam. Your privacy is respected.
                </p>
                <button 
                  type="submit" 
                  disabled={!isValid || status === 'loading'}
                  className="btn-primary w-full sm:w-auto min-w-[180px] py-4"
                >
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Send Message'}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:thivya.sev@gmail.com" className="btn-secondary w-full sm:w-auto py-3 bg-white/50 dark:bg-black/50">
              <Mail className="w-5 h-5 mr-3" />
              thivya.sev@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/thivyavenugopal" target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto py-3 bg-white/50 dark:bg-black/50">
              <Linkedin className="w-5 h-5 mr-3" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
