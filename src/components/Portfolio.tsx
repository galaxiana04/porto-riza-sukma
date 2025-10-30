import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "design", "ai"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online shopping experience with payment integration",
      image: "/placeholder.svg",
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking interface",
      image: "/placeholder.svg",
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete branding package for startup company",
      image: "/placeholder.svg",
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "AI Chatbot Integration",
      description: "Smart customer service chatbot with NLP capabilities",
      image: "/placeholder.svg",
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Minimalist portfolio for creative professional",
      image: "/placeholder.svg",
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative project management tool",
      image: "/placeholder.svg",
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing web development, design, and AI integration
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="mt-4">
                  <span className="text-xs text-primary font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
