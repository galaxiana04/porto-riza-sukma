import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const roles = ["Web Developer", "UI/UX Designer", "AI Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = roles[currentRole];
      
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <img
              src={profileImage}
              alt="Jatnika - Web Developer"
              className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-primary/30 mx-auto shadow-2xl"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Hi, I'm <span className="text-primary">Jatnika</span>
            </h1>
            <div className="h-8 sm:h-10">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                <span className="text-primary">{displayText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Creative Web Developer & AI Enthusiast crafting beautiful, user-focused digital experiences
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              <Mail className="mr-2" size={20} />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
