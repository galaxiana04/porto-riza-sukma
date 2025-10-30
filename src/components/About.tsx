import { Code2, Palette, Brain, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Laravel", level: 85 },
    { name: "UI/UX Design", level: 82 },
    { name: "AI Tools", level: 80 },
  ];

  const highlights = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Palette, title: "Modern Design", description: "Creating beautiful user interfaces" },
    { icon: Brain, title: "AI Integration", description: "Leveraging AI for smarter solutions" },
    { icon: Rocket, title: "Performance", description: "Optimized for speed and efficiency" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer with a keen eye for design and a love for creating
              seamless digital experiences. With expertise in modern web technologies and a
              continuous drive to learn, I transform ideas into elegant, functional solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines clean code practices with user-focused design, ensuring every
              project not only looks great but performs exceptionally. I believe in the power of
              technology to solve real-world problems and create meaningful impact.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                  >
                    <Icon className="text-primary mb-2" size={24} />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
