import { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Web Development",
    "Desainer UI/UX",
    "Mobile Development",
    "IT Administrator",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Efek mengetik (typing effect)
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Download CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Riza_Sukma.pdf";
    link.download = "CV_Riza_Sukma.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white"
            data-aos="fade-up"
          >
            Halo, Saya{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Riza Sukma
            </span>
          </h1>

          <div
            className="h-12 sm:h-14 mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              <span className="text-blue-400 font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Pengembang Web Kreatif & Penggiat AI yang bersemangat membangun
            aplikasi web modern dan elegan dengan kode bersih dan desain yang
            berfokus pada pengguna.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg group w-full sm:w-auto transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hubungi Saya
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={downloadCV}
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all w-full sm:w-auto shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Unduh CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
