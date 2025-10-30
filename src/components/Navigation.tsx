import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { generatePortfolioPDF } from "@/lib/generatePDF";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    toast({
      title: "Menghasilkan PDF...",
      description: "Mohon tunggu, portfolio sedang dikonversi ke PDF",
    });

    const success = await generatePortfolioPDF();
    
    setIsGenerating(false);
    if (success) {
      toast({
        title: "Berhasil!",
        description: "Portfolio telah diunduh sebagai PDF",
      });
    } else {
      toast({
        title: "Error",
        description: "Gagal menghasilkan PDF. Silakan coba lagi.",
        variant: "destructive",
      });
    }
  };

  const navItems = [
    { label: "Beranda", id: "hero" },
    { label: "Tentang", id: "about" },
    { label: "Keahlian", id: "skills" },
    { label: "Projects", id: "Projects" },
    { label: "Layanan", id: "services" },
    { label: "Sertifikat & Pengalaman ", id: "Certificate & Experience" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-smooth"
          >
            Riza Sukma
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            title="Download Portfolio PDF"
          >
            <Download className="w-4 h-4" />
            <span>{isGenerating ? "Menghasilkan..." : "Download PDF"}</span>
          </button>
          <ThemeToggle />
        </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left justify-start text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </Button>
            ))}
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 w-full justify-center mt-2"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? "Menghasilkan..." : "Download PDF"}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
