import { Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 mb-8 animate-fade-in-up shadow-strong">
        <div className="w-full h-full rounded-full bg-card overflow-hidden">
          <img 
            src={profileAvatar} 
            alt="Siddhartha - QA Engineer" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
        Siddhartha Paudel
        <span className="block text-2xl sm:text-3xl text-primary mt-2 font-semibold">
          QA Automation Engineer 
        </span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-8">
        "I ensure product quality through manual testing, automation, strategy, and continuous improvement."
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
      <a href="/resume.pdf" download> 
        <Button 
          size="lg"
          className="gap-2 shadow-strong hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
        >
          <Download size={20} /> Download Resume
        </Button>
      </a>  
        <Button 
          variant="secondary" 
          size="lg"
          className="gap-2 hover:-translate-y-0.5 transition-all"
          asChild
        >
          <a href="#contact">
            <Mail size={20} /> Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
};
