interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const ExperienceItem = ({ role, company, duration, description }: ExperienceItemProps) => (
  <div className="relative mb-10 last:mb-0">
    <div className="absolute -left-[41px] bg-primary h-5 w-5 rounded-full border-4 border-background"></div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <h3 className="text-xl font-bold text-foreground">{role}</h3>
      <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
        {duration}
      </span>
    </div>
    <p className="text-lg font-medium text-muted-foreground mb-3">{company}</p>
    <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Experience</h2>
        <div className="space-y-12 border-l-2 border-border ml-4 pl-8 relative">
          
          <ExperienceItem 
            role="QA Engineer"
            company="Danphe Software Labs Pvt. Ltd."
            duration="Aug 2022 - Present"
            description={[
              "Performed rigorous manual and automated testing for high-traffic e-commerce web apps.",
              "Established an API testing suite using Postman, catching 95% of backend bugs pre-production.",
              "Collaborated with product owners to define acceptance criteria and test plans.",
              "Mentored 3 junior QAs in automation best practices and JavaScript."
            ]}
          />

          <ExperienceItem 
            role="Quality Assurance Intern"
            company="Danphe Software Labs Pvt. Ltd."
            duration="Feb 2022 - Aug 2022"
            description={[
              "Executed manual test cases for mobile and web applications.",
              "Documented defects in Jira and verified fixes.",
              "Participated in daily stand-ups and sprint planning meetings."
            ]}
          />
        </div>
      </div>
    </section>
  );
};
