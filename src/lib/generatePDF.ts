import html2pdf from "html2pdf.js";

export const downloadPortfolioAsPDF = async () => {
  const element = document.getElementById("root") || document.body;

  const opt = {
    margin: 0,
    filename: "Portfolio_Riza_Sukmawardani.pdf",
    image: { type: "jpeg" as const, quality: 1 },
    html2canvas: {
  scale: 2,               // resolusi lebih tajam
  useCORS: true,           // untuk gambar/font cross-origin
  allowTaint: true,        // biar konten bisa di-capture walau dari origin berbeda
  scrollY: -window.scrollY // agar posisi scroll tidak memengaruhi capture
},

    jsPDF: {
      unit: "px",
      format: [
        document.documentElement.scrollWidth,
        document.documentElement.scrollHeight,
      ] as [number, number],
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  await html2pdf().set(opt).from(element).save();
};
