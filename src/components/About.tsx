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
                  src="src/assets/profile.png"
                  alt="Riza Sukma"
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
                Bersemangat Menciptakan Solusi Mobile yang Adaptif dan Berbasis
                Data, serta Tentang Desain yang Bersih dan Berfokus pada
                Pengguna.
              </h3>

              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Halo, saya <b>Riza Sukmawardani</b>, seorang Mobile Developer
                dengan latar belakang keahlian lintas-fungsi. Saya bersemangat
                membangun aplikasi mobile yang tidak hanya intuitif dan elegan,
                tetapi juga didukung oleh proses yang terstruktur dan keputusan
                berbasis data.
              </p>

              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Perjalanan karir saya memungkinkan saya menggabungkan keahlian
                inti di bidang Mobile Development dengan wawasan mendalam dari
                Front End, Data Analysis, dan Administrasi. Pendekatan saya
                selalu berfokus pada kualitas, efisiensi, dan pengembangan
                berkelanjutan.
              </p>

              {/* Daftar Poin */}
              <div className="space-y-6">
                {/* Fokus & Kekuatan */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      💡 Fokus dan Kekuatan Lintas-Fungsi
                    </h4>
                    <ul className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>
                        <b>Mobile Development:</b> Adaptif terhadap teknologi
                        terbaru dan berfokus pada antarmuka yang mulus dan
                        user-friendly.
                      </li>
                      <li>
                        <b>Data Analysis:</b> Menganalisis metrik pengguna untuk
                        mengoptimalkan fitur dan pengalaman aplikasi.
                      </li>
                      <li>
                        <b>Administrasi & Organisasi:</b> Kode yang terstruktur,
                        dokumentasi rapi, dan manajemen proyek efisien.
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
                        <b>Ketepatan Waktu:</b> Komitmen untuk penyelesaian
                        proyek sesuai jadwal yang disepakati.
                      </li>
                      <li>
                        <b>Pengembangan Diri:</b> Terus belajar dan beradaptasi
                        dengan inovasi teknologi terkini.
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
