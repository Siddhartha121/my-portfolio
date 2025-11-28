import { CheckCircle, Code2, Terminal, Users } from 'lucide-react';
import { Card } from './ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <Card className="p-6 hover:shadow-strong transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-secondary rounded-lg">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillCard 
          icon={<CheckCircle className="text-accent" size={32} />}
          title="QA Core"
          skills={['Test Planning', 'Test Case Design', 'Manual QA', 'Regression Testing', 'Exploratory Testing', 'Defect Management']}
        />

        <SkillCard 
          icon={<Code2 className="text-primary" size={32} />}
          title="Automation"
          skills={['Playwright', 'Cypress', 'Selenium', 'API Automation', 'CI/CD Integration']}
        />

        <SkillCard 
          icon={<Terminal className="text-[hsl(270_70%_60%)]" size={32} />}
          title="Tools"
          skills={['Postman', 'JMeter', 'Git & GitHub', 'Jira','Github Actions']}
        />

        <SkillCard 
          icon={<Users className="text-[hsl(30_90%_60%)]" size={32} />}
          title="Soft Skills"
          skills={['Communication', 'Problem Solving', 'Detail Oriented', 'Collaboration', 'Mentoring']}
        />
      </div>
    </section>
  );
};
