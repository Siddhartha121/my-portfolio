import { Award } from 'lucide-react';
import { Card } from './ui/card';

export const Certifications = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Certifications & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-accent" size={28} />
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Playwright: Web Automation Testing From Zero to Hero
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Certified Cypress Professional
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Testing Ruby with RSpec: The Complete Guide</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1 bg-secondary rounded text-xl">🎓</div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground">B.Sc. CSIT</h4>
                <p className="text-muted-foreground">Orchid International College • 2017 - 2022</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">Full Stack QA Bootcamp</h4>
                <p className="text-muted-foreground">Orchild International College • 2018</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
