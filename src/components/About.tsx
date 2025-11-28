export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-center sm:text-left">
          <p>
            With over 4 years of experience in Quality Assurance, I have transitioned from manual testing to building robust automation frameworks. My journey began with a curiosity about how software breaks, which evolved into a passion for preventing it from breaking in the first place.
          </p>
          <p>
            I specialize in designing scalable test strategies, automating complex workflows, and integrating quality checks into CI/CD pipelines. Whether it's writing E2E scripts in Playwright or stress-testing APIs with JMeter, I enjoy the technical challenge of ensuring flawless user experiences.
          </p>
          <p>
            Beyond the code, I am a strong advocate for bridging the gap between developers and QA. I believe that quality is a shared responsibility, and I strive to foster a culture of collaboration and continuous improvement in every team I join.
          </p>
        </div>
      </div>
    </section>
  );
};
