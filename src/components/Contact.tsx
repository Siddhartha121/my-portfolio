import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <a 
                href="mailto:Paudelsiddhartha11@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
              Paudelsiddhartha11@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Linkedin className="text-primary" />
              <a 
                href="https://www.linkedin.com/in/siddhartha-paudel-804352153/" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                https://www.linkedin.com/in/siddhartha-paudel-804352153/
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Github className="text-primary" />
              <a 
                href="https://github.com/Siddhartha121" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                github.com/siddahrtha121
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                type="text" 
                placeholder="Your Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="siddhartha@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                rows={4} 
                placeholder="Hello..."
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
