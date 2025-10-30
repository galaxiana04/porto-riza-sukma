import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movkgdbe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message:
            "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya 😊",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setNotification({
          type: "error",
          message: "Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.",
        });
      }
    } catch (error) {
      console.error(error);
      setNotification({
        type: "error",
        message: "Gagal mengirim pesan. Periksa koneksi internet kamu.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ type: null, message: "" }), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative"
    >
      {/* Notification Pop-up */}
      {notification.type && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 transition-all duration-500 ${
            notification.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <p className="font-medium">{notification.message}</p>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            data-aos="fade-up"
          >
            Mari Terhubung
          </h2>
          <p
            className="text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Punya proyek dalam pikiran? Mari bekerja sama untuk mewujudkan ide
            Anda.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email.anda@contoh.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang proyek Anda..."
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </div>
          </form>

          {/* Social Buttons */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a
                href="https://github.com/galaxiana04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="font-semibold">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a
                href="http://www.linkedin.com/in/riza-sukmawardani-532685288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a
                href="https://www.instagram.com/rzaskma_29/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
                <span className="font-semibold">Instagram</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a href="mailto:rizasukmaaa@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="font-semibold">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Riza Sukma. Hak cipta dilindungi.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
