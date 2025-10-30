// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO, TechStart",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//     text: "Jatnika menghasilkan website luar biasa yang melebihi ekspektasi kami. Perhatiannya terhadap detail dan keahlian teknisnya sangat menonjol.",
//   },
//   {
//     name: "Michael Chen",
//     role: "Manajer Produk, InnovateCo",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
//     text: "Bekerja dengan Jatnika sangat menyenangkan. Dia memahami visi kami dengan sempurna dan mewujudkannya dengan kode yang bersih dan efisien.",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Pendiri, DesignHub",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
//     text: "Desain UI/UX yang dibuat Jatnika untuk kami sangat indah dan intuitif. Pengguna kami sangat menyukai tampilan barunya!",
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((current + 1) % testimonials.length);
//   const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

//   return (
//     <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
//             data-aos="fade-up"
//           >
//             Testimoni
//           </h2>
//           <p
//             className="text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Apa kata klien tentang saya
//           </p>

//           <div className="relative" data-aos="zoom-in" data-aos-delay="200">
//             <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-card border border-border">
//               <Quote className="h-12 w-12 text-primary/20 mb-6" />

//               <p className="text-lg sm:text-xl text-foreground mb-8 italic">
//                 "{testimonials[current].text}"
//               </p>

//               <div className="flex items-center">
//                 <img
//                   src={testimonials[current].image}
//                   alt={testimonials[current].name}
//                   className="w-14 h-14 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
//                   <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center items-center gap-4 mt-8">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={prev}
//                 aria-label="Previous testimonial"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </Button>

//               <div className="flex gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrent(index)}
//                     className={`w-2 h-2 rounded-full transition-smooth ${
//                       index === current ? "bg-primary w-8" : "bg-muted-foreground/30"
//                     }`}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={next}
//                 aria-label="Next testimonial"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
