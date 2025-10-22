import { Sparkles, Shield, Headphones } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Desain Responsif & Modern",
      description: "Website yang tampil sempurna di semua perangkat dengan desain yang menarik dan user-friendly"
    },
    {
      icon: Shield,
      title: "Optimasi SEO Terintegrasi",
      description: "Website Anda mudah ditemukan di mesin pencari dengan teknik SEO terbaik"
    },
    {
      icon: Headphones,
      title: "Dukungan Teknis & Maintenance",
      description: "Tim kami siap membantu Anda dengan dukungan teknis dan perawatan website"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Tentang Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Realisasikan Visi Digital Anda
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Raftech adalah penyedia layanan pembuatan website profesional berbasis teknologi terkini. 
              Kami menggabungkan desain modern dan performa tinggi agar website Anda tampil menonjol dan optimal di mesin pencari.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-card border-gradient hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
