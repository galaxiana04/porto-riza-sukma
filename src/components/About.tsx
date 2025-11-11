import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center"
            data-aos="fade-up"
          >
            Tentang Saya
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Gambar Profil */}
            <div data-aos="fade-right" className="relative">
              {/* Efek Glow Latar */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl animate-pulse"></div>

              {/* Animasi Floating */}
              <div className="relative animate-float">
                <img
                  src="/assets/profile.png"
                  alt="Riza Sukmawardani"
                  className="rounded-2xl shadow-2xl shadow-cyan-500/20 w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500 backdrop-blur-sm"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))",
                    opacity: 0.95,
                  }}
                />
              </div>
            </div>

            {/* Deskripsi Tentang Saya */}
            <div data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                Bersemangat menciptakan solusi mobile yang adaptif, berbasis
                data, serta berfokus pada desain yang bersih dan pengalaman
                pengguna yang optimal.
              </h3>

              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Halo, saya <b>Riza Sukmawardani</b>, seorang{" "}
                <b>Mobile Developer </b>
                dan <b>Front End Web Developer</b> dengan keahlian lintas
                bidang. Saya bersemangat dalam membangun aplikasi yang tidak
                hanya intuitif dan elegan, tetapi juga didukung oleh proses yang
                terstruktur serta keputusan berbasis data.
              </p>

              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Perjalanan karier saya memperkaya kemampuan dalam menggabungkan
                keahlian inti di bidang <b>Mobile Development</b> dengan wawasan
                dari
                <b> Front End Web Development</b> dan
                <b> Administrasi Proyek</b>. Pendekatan saya selalu berfokus
                pada kualitas, efisiensi, dan pengembangan berkelanjutan.
              </p>

              {/* Daftar Poin */}
              <div className="space-y-6">
                {/* Fokus & Kekuatan */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      💡 Fokus dan Kekuatan Lintas Bidang
                    </h4>
                    <ul className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>
                        <b>Mobile Development:</b> Selalu adaptif terhadap
                        teknologi terbaru, berfokus pada antarmuka yang mulus
                        dan ramah pengguna.
                      </li>
                      <li>
                        <b>Front End Web Development:</b> Mengembangkan tampilan
                        web yang responsif, interaktif, dan modern menggunakan
                        teknologi seperti React dan Tailwind CSS.
                      </li>
                      <li>
                        <b>Manajemen & Administrasi:</b> Penulisan kode yang
                        terstruktur, dokumentasi rapi, serta manajemen proyek
                        yang efisien.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tujuan & Komitmen */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">🎯 Tujuan & Komitmen</h4>
                    <ul className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>
                        <b>Ketepatan Waktu:</b> Berkomitmen menyelesaikan setiap
                        proyek sesuai jadwal yang telah disepakati.
                      </li>
                      <li>
                        <b>Pengembangan Diri:</b> Terus belajar dan beradaptasi
                        dengan perkembangan teknologi terkini untuk menghasilkan
                        solusi terbaik.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
