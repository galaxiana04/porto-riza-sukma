import { Smartphone, Layout, BarChart3, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Membangun aplikasi mobile multiplatform dengan performa tinggi menggunakan Flutter dan Dart, berfokus pada kecepatan, efisiensi, dan pengalaman pengguna yang mulus.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Menciptakan antarmuka web yang modern, responsif, dan interaktif menggunakan React atau Next.js dengan pendekatan desain berorientasi pengguna.",
  },
  {
    icon: BarChart3,
    title: "Analisis Data",
    description:
      "Mengolah dan menganalisis data untuk menghasilkan insight yang membantu pengambilan keputusan, serta mendukung pengembangan fitur aplikasi berbasis data.",
  },
  {
    icon: Palette,
    title: "Desain UI/UX",
    description:
      "Merancang tampilan dan pengalaman pengguna yang menarik, intuitif, dan konsisten agar setiap interaksi terasa natural dan menyenangkan.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            data-aos="fade-up"
          >
            Layanan
          </h2>

          <p
            className="text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Keahlian saya dalam menciptakan solusi digital yang fungsional dan berorientasi pada pengalaman pengguna.
          </p>

          {/* Kartu Layanan */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-smooth border border-border hover:border-primary/50"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
