import { Bug, Github, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  results: string;
}

const ProjectCard = ({ title, desc, tags, results }: ProjectCardProps) => (
  <Card className="overflow-hidden border hover:border-primary transition-all hover:-translate-y-1 group">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <Bug size={24} />
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            asChild
          >
            <a href="#" aria-label="View on GitHub">
              <Github size={18} />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            asChild
          >
            <a href="#" aria-label="View live project">
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{desc}</p>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-accent">✨ {results}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="px-2 py-1 text-xs bg-muted border border-border rounded text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="E2E Automation Framework"
          desc="A scalable framework built with Playwright."
          tags={['Playwright', 'Javascript', 'GitHub Actions']}
          results="Reduced flaky tests by 40%"
        />
          <ProjectCard 
          title="E2E Automation Framework of employee management system "
          desc="A scalable framework built with Cypress."
          tags={['Playwright', 'Javascript', 'GitHub Actions']}
          results="Reduced Manual testing by 60%"
        />
        <ProjectCard 
          title="API Testing Suite"
          desc="Automated verification of RESTful endpoints covering auth, data validation, and error handling."
          tags={['Postman', 'JavaScript']}
          results="Runs daily on postman"
        />
      </div>
    </section>
  );
};
