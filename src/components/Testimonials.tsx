import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg",
      content:
        "Jatnika delivered an exceptional website that exceeded our expectations. Professional, creative, and always responsive to our needs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      image: "/placeholder.svg",
      content:
        "Working with Jatnika was a pleasure. The attention to detail and commitment to quality made our project a huge success.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      image: "/placeholder.svg",
      content:
        "The UI/UX design work was outstanding. Our user engagement increased by 150% after the redesign. Highly recommended!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-[var(--shadow-card)]">
            <div className="flex flex-col items-center text-center">
              {/* Client Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                <img
                  src={current.image}
                  alt={current.name}
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-primary/30"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                "{current.content}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-bold mb-1">{current.name}</h4>
                <p className="text-primary text-sm">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
