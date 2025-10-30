import { useState } from "react";
import { Award, X } from "lucide-react";

const certificatesData = {
  "Sertifikat Pencapaian": [
    {
      title: "Peserta Kamadiksi Awards",
      issuer: "Universitas Politeknik Negeri Semarang",
      date: "2024",
      image: "/assets/Pencapaian/PesertaKamadiksiAwards.jpg",
    },
    {
      title: "Magang dan Studi Independen Bersertifikat",
      issuer: "Kemendikbud",
      date: "2024",
      image: "/assets/Pencapaian/MSIB-7.png",
    },
  ],

  Sertifikasi: [
    {
      title: "MTCA",
      issuer: "MikroTik",
      date: "2025",
      image: "/assets/Pelatihan/MTCA.png",
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "2024",
      image: "/assets/Pelatihan/Database Programming with SQL.jpg",
    },
    {
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "2024",
      image: "/assets/Pelatihan/DatabaseDesign.jpg",
    },
    {
      title: "Sharing Technology",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Pelatihan/Sharing Technology.jpg",
    },
    {
      title: "JMP",
      issuer: "BNSP",
      date: "2024",
      image: "/assets/Pelatihan/JMP.jpg",
    },
    {
      title: "UI/UX Fundamental",
      issuer: "MySkill",
      date: "2024",
      image: "/assets/Pelatihan/UX fundamental.jpg",
    },
    {
      title: "LMOM",
      issuer: "HME Polines",
      date: "2022",
      image: "/assets/Pelatihan/LMOM.jpg",
    },
  ],

  "Sertifikat Panitia": [
    {
      title: "Pekan Literasi",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Panitia/PekanLiterasi.jpg",
    },
    {
      title: "LMOM",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Panitia/LMOM.jpg",
    },
    {
      title: "Campus Fair",
      issuer: "SMAN 1 Babadan",
      date: "2023",
      image: "/assets/Panitia/CampusFair.jpg",
    },
    {
      title: "ECC 2023",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/ECC2023.jpg",
    },
    {
      title: "Seminar Nasional",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/Semnas.jpg",
    },
    {
      title: "FKBSE",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/FKBSE.jpg",
    },
  ],

  "Sertifikat Pengalaman": [
    {
      title: "Sekretaris Jenderal BPM Polines",
      issuer: "BPM",
      date: "2024",
      image: "/assets/Pengalaman/SekjendBPM.jpg",
    },
    {
      title: "Staf Bidang Kaderisasi",
      issuer: "Himpunan Mahasiswa Elektro",
      date: "2023",
      image: "/assets/Pengalaman/Sertifikat HME.png",
    },
    {
      title: "Engineeering Intern",
      issuer: "PT Rekaindo Global Jasa",
      date: "2024",
      image: "/assets/Pengalaman/engineering_intern.png",
    },
  ],
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Certificates & Achievements
        </h2>
        <p
          className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Berikut adalah kumpulan sertifikat yang menunjukkan pengalaman,
          pencapaian, dan kontribusi saya di berbagai bidang.
        </p>

        {Object.entries(certificatesData).map(([category, items], i) => (
          <div
            key={category}
            className="mb-16"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <h3 className="text-2xl font-semibold mb-6 text-sky-400 text-center">
              {category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-all border border-slate-700 hover:border-sky-400/50 cursor-pointer"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                      <Award className="h-6 w-6 text-sky-400" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-base sm:text-lg font-semibold mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-slate-900 rounded-2xl p-4 max-w-4xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-xl object-contain max-h-[80vh] mb-4"
            />
            <div className="text-center">
              <h4 className="text-xl font-bold mb-1">{selectedCert.title}</h4>
              <p className="text-gray-400">{selectedCert.issuer}</p>
              <p className="text-gray-500 text-sm">{selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
