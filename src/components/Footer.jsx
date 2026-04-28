import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background/5 border-t border-border/20 pt-20 pb-10 mt-auto">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="mb-8">
              <h3 className="font-display font-bold text-5xl tracking-wide text-foreground">
                Let's Connect<span className="text-primary">.</span>
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:thivya.sev@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-background border border-border/50 flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all shadow-sm group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/thivyavenugopal" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-background border border-border/50 flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all shadow-sm group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="font-display font-semibold text-lg mb-6 text-foreground tracking-wide uppercase text-xs">Explore</h4>
            <ul className="space-y-4 text-sm font-bold text-foreground/70">
              <li><a href="#home" className="hover:text-primary transition-colors flex items-center group">Home <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 text-primary transition-all" /></a></li>
              <li><a href="#work" className="hover:text-primary transition-colors flex items-center group">Case Studies <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 text-primary transition-all" /></a></li>
              <li><a href="#about" className="hover:text-primary transition-colors flex items-center group">About <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 text-primary transition-all" /></a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors flex items-center group">Contact <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 text-primary transition-all" /></a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-3">
             <h4 className="font-display font-semibold text-lg mb-6 text-foreground tracking-wide uppercase text-xs">Connect</h4>
             <ul className="space-y-4 text-sm font-bold text-foreground/70">
              <li>
                <a href="mailto:thivya.sev@gmail.com" className="hover:text-primary transition-colors flex items-center group">
                  Email Me
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/thivyavenugopal" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center group">
                  LinkedIn Profile
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              </li>
              <li className="pt-2">
                <a href="https://drive.google.com/file/d/16Q-qPM8WEyHB68bzTPW45qe1VmVf_ezG/view?usp=drive_link" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center group text-primary font-bold">
                  Download Resume
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-foreground/50 tracking-wider uppercase">
          <p>&copy; {currentYear} Thivya Venugopal. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
