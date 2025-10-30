import { Code, Palette, Brain, Database, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive, high-performance websites using modern frameworks like React, Laravel, and Next.js.",
      features: ["Custom Web Apps", "E-Commerce Solutions", "API Development"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement.",
      features: ["Wireframing", "Prototyping", "User Research"],
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Implementing cutting-edge AI solutions including chatbots, machine learning models, and automation.",
      features: ["Chatbot Development", "ML Integration", "Process Automation"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Developing robust server-side applications with secure databases and scalable architectures.",
      features: ["Database Design", "API Development", "Cloud Deployment"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications that deliver native-like performance and experience.",
      features: ["iOS & Android", "React Native", "Progressive Web Apps"],
    },
    {
      icon: Globe,
      title: "SEO & Performance",
      description:
        "Optimizing websites for search engines and ensuring lightning-fast load times for better user experience.",
      features: ["SEO Optimization", "Performance Tuning", "Analytics Setup"],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
