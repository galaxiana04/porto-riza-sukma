import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "design", "ai"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online shopping experience with payment integration.",
      image: "/images/DesainLinesvpay.jpg",
      category: "web",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking interface.",
      image: "/images/placeholder.svg",
      category: "mobile",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete branding package for a startup company.",
      image: "/images/placeholder.svg",
      category: "design",
    },
    {
      id: 4,
      title: "AI Chatbot Integration",
      description: "Smart customer service chatbot with NLP capabilities.",
      image: "/images/placeholder.svg",
      category: "ai",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio-section" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-muted-foreground">
              Explore my recent projects showcasing web, mobile, design, and AI.
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className="capitalize"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary/50 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  {project.description}
                </p>
                <span className="text-xs text-primary uppercase font-semibold">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
