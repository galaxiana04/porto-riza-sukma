import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePortfolioPDF = async () => {
  try {
    // Show loading toast or indicator
    const sections = [
      'hero',
      'about', 
      'skills',
      'portfolio',
      'services',
      'testimonials',
      'contact'
    ];

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let isFirstPage = true;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (!element) continue;

      // Capture the section as canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      // Add new page if not first
      if (!isFirstPage) {
        pdf.addPage();
      }
      isFirstPage = false;

      // Add image to PDF
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Handle multi-page sections
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
    }

    // Save the PDF
    pdf.save('Portfolio_Jatnika.pdf');
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};
