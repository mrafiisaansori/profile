import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Mohon lengkapi semua field");
      return;
    }

    // Create WhatsApp message
    const waMessage = `Halo Raftech, saya ${formData.name}

Email: ${formData.email}
No. HP: ${formData.phone}

${formData.message}`;

    const waUrl = `https://wa.me/62859106997680?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");
    
    toast.success("Mengarahkan ke WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/10 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Hubungi Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Mari Wujudkan Website Impian Anda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tertarik membuat website profesional? Hubungi kami sekarang dan dapatkan konsultasi gratis!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Telepon</h3>
                <a href="tel:+62859106997680" className="text-muted-foreground hover:text-accent transition-colors">
                  +62 859-1069-97680
                </a>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:info@raftech.web.id" className="text-muted-foreground hover:text-accent transition-colors">
                  info@raftech.web.id
                </a>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Lokasi</h3>
                <p className="text-muted-foreground">
                  Indonesia
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border-gradient">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Nomor Telepon <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+62 xxx-xxxx-xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-accent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan kebutuhan website Anda..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold glow-cyan transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
