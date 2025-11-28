import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
      <p>© {new Date().getFullYear()} Siddhartha Paudel. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a 
          href="#" 
          className="hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="#" 
          className="hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="#" 
          className="hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
};
