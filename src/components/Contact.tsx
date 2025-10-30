import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Your message has been sent successfully. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "jatnika@example.com" },
    { icon: Phone, label: "Phone", value: "+62 123 4567 890" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="w-12 h-12 bg-card border border-border hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
                    >
                      <Icon className="text-primary" size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-lg overflow-hidden h-64">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <MapPin className="text-muted-foreground" size={48} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-primary min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
