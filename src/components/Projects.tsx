import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AR Edukasi",
    description:
      "AR Edukasi Pengenalan Hewan Melalui Suara, Gambar dan Deskripsi",
    tech: ["C", "Unity"],
    image: "/assets/projek/AR-Crow.jpg",
    category: "Picture",
  },
  {
    title: "RAILFUN",
    description:
      "Aplikasi Multimedia on Demand Berbasis ChatBot Sebagai Hiburan Pada Pelanggan Kereta Api",
    tech: ["Flutter", "Dart", "Docker"],
    image: "/assets/projek/railfun.png",
    category: "Aplikasi",
  },
  {
    title: "Website Portfolio",
    description: "Showcase kreatif dengan animasi menakjubkan",
    tech: ["Next.js", "Tailwind", "Framer"],
    image: "/assets/projek/portofolio.png",
    category: "Desain",
  },

  {
    title: "Sistem Informasi Penelitian dan Pengabdian Kepada Masyarakat",
    description:
      "Website berbasis Laravel untuk manajemen data penelitian dan pengabdian masyarakat di perguruan tinggi.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/assets/projek/sipmas.png",
    category: "Web",
  },
  // {
  //   title: "Alat Bantu Tunanetra dengan GPS dan ESP8266",
  //   description:
  //     "Proyek IoT berbasis sensor dan GPS untuk membantu tunanetra dengan integrasi sistem web.",
  //   tech: ["ESP8266", "IoT", "Web"],
  //   image: "/assets/projek/AlatBantuTunanetra.jpg",
  //   category: "Aplikasi",
  // },
  {
    title: "Desain UI/UX Aplikasi Linesvpay",
    description:
      "Perancangan antarmuka aplikasi pembayaran digital dengan fokus pada kemudahan pengguna.",
    tech: ["Figma", "UI/UX"],
    image: "/assets/projek/desainlinesvpay.png",
    category: "Desain",
  },
  {
    title: "Desain UI/UX Pengembangan Aplikasi KAI Access",
    description:
      "Redesain antarmuka aplikasi KAI Access agar lebih modern dan ramah pengguna.",
    tech: ["Figma", "UI/UX"],
    image: "/assets/projek/desainkaiaccess.png",
    category: "Desain",
  },
  // {
  //   title: "Aplikasi Toko Sandhika",
  //   description:
  //     "Aplikasi toko sederhana untuk pengelolaan produk dan transaksi penjualan.",
  //   tech: ["Flutter", "Firebase"],
  //   image: "/assets/projek/TokoSandhika.jpg",
  //   category: "Aplikasi",
  // },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    "Semua",
    "Web",
    "Mobile",
    "Desain",
    "AI",
    "Aplikasi",
    "Picture",
  ];

  const filteredProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            data-aos="fade-up"
          >
            Projects
          </h2>
          <p
            className="text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Showcase karya dan pencapaian terbaru saya
          </p>

          {/* Category Filter */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-smooth border border-border"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      <ExternalLink className="mr-1 h-4 w-4" /> Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="mr-1 h-4 w-4" /> Kode
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Gambar */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative max-w-4xl w-full mx-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-400 transition"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="rounded-xl shadow-lg w-full max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
