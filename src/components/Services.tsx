import { Globe, Code, TrendingUp, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Pembuatan Website Bisnis",
      description: "Website profesional untuk usaha Anda, cepat, aman, dan mudah dikelola dengan desain menarik yang meningkatkan kredibilitas bisnis."
    },
    {
      icon: Code,
      title: "Custom Web App Development",
      description: "Solusi web berbasis kebutuhan khusus bisnis Anda. Dari sistem manajemen hingga aplikasi kompleks yang disesuaikan dengan workflow perusahaan."
    },
    {
      icon: TrendingUp,
      title: "Optimasi SEO",
      description: "Naikkan peringkat situs Anda di Google dengan strategi SEO yang tepat. Tingkatkan visibilitas dan jangkauan bisnis Anda secara organik."
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Perawatan rutin agar situs selalu aman, cepat, dan up-to-date. Termasuk backup berkala, update keamanan, dan optimasi performa."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-dark/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Layanan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Solusi Digital Terlengkap
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berikut beberapa layanan yang kami sediakan untuk membantu tumbuhkan bisnis Anda
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-cyan">
                      <service.icon className="w-7 h-7 text-background" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
