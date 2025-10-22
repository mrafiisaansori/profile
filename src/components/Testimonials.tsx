import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Khafidz",
      role: "Senior Director Lavenia House",
      content: "Raftech sangat profesional dan responsif. Website HRIS yang mereka buat sangat membantu efisiensi kerja tim HR kami. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      role: "Owner, Fitness Center",
      content: "Sistem membership yang dibuat Raftech sangat user-friendly dan memudahkan operasional gym kami. Pelayanan after-sales juga sangat baik.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Owner, Optik Modern",
      content: "POS system dari Raftech benar-benar membantu bisnis optik saya. Fiturnya lengkap dan mudah digunakan. Tim support juga sangat helpful.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Testimoni
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kepercayaan klien adalah prioritas kami
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote icon */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
