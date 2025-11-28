import { Card } from './ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => (
  <Card className="p-8 relative shadow-soft">
    <div className="text-4xl text-primary/20 absolute top-4 left-4 font-serif">"</div>
    <p className="text-muted-foreground mb-6 italic relative z-10">
      {quote}
    </p>
    <div>
      <h4 className="font-bold text-foreground">{name}</h4>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  </Card>
);

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard 
          quote="Siddhartha's attention to detail is unmatched. He didn't just find bugs; he helped us architect a more testable application."
          name="Subas Paudel"
          title="CEO | Danphe Software Labs Pvt. Ltd."
        />
        <TestimonialCard 
          quote="The automation framework siddhartha built saved our team hundreds of hours of manual work every month."
          name="Nihal Dhakal"
          title="QA leader | Danphe Software Labs Pvt. Ltd."
        />
      </div>
    </section>
  );
};
