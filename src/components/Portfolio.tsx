import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";


const Portfolio = () => {
  const projects = [
    {
      title: "HRIS Lavenia House",
      category: "Web Development",
      description: "Sistem manajemen SDM komprehensif dengan fitur payroll, absensi, dan performance tracking untuk meningkatkan efisiensi HR.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "/images/hris-lavenia.png"
    },
    {
      title: "Sistem Gym Member",
      category: "Web Development",
      description: "Platform manajemen keanggotaan gym dengan sistem pembayaran, jadwal kelas, dan tracking progress member secara real-time.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      image: "/images/gym-member.png"
    },
    {
      title: "Smart POS System",
      category: "Web Development",
      description: "Aplikasi Point of Sales modern yang dirancang untuk mempermudah proses transaksi, pencatatan penjualan, dan pengelolaan stok barang secara efisien. Dilengkapi antarmuka intuitif dan laporan real-time untuk membantu bisnis mengambil keputusan yang lebih cepat dan akurat.",
      tags: ["React", "Express", "MongoDB"],
      image: "/images/pos-toko.png"
    },
    {
      title: "Recruitment Management System",
      category: "Web Development",
      description: "Platform digital yang dirancang untuk mempermudah proses rekrutmen organisasi, mulai dari pendaftaran kandidat hingga seleksi akhir. Sistem ini mengintegrasikan manajemen data pelamar, jadwal wawancara, dan panel evaluasi secara efisien dengan tampilan modern berbasis Next.js dan Tailwind.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      image: "/images/oprec.png"
    },
    {
      title: "Alumni Connect – Sistem Informasi Alumni Terpadu",
      category: "Web Development",
      description: "Platform digital yang memudahkan pengelolaan data alumni, pelacakan karier, dan komunikasi antar lulusan. Sistem ini dirancang untuk memperkuat jejaring alumni dengan fitur pencarian, berita kampus, serta kegiatan reuni yang terintegrasi dalam satu portal modern dan responsif.",
      tags: ["PHP", "Bootstrap", "Javascript"],
      image: "/images/alumni.png"
    },
    {
      title: "e-Government Suite",
      category: "Web Development",
      description: "Platform web terpadu yang menggabungkan pelaporan masyarakat dan registrasi organisasi politik maupun sosial. Dilengkapi fitur pelacakan laporan, manajemen dokumen digital, dan dashboard admin untuk mendukung tata kelola pemerintahan yang transparan dan efisien.",
      tags: ["PHP", "Bootstrap", "Javascript"],
      image: "/images/lapor.png"
    },
   
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Proyek yang Telah Kami Kerjakan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beberapa contoh proyek sukses yang telah kami selesaikan untuk berbagai klien
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project image placeholder with gradient */}
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                      {/* Gambar utama */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Gradient overlay — hanya dari bawah, lebih transparan */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card/70 via-card/30 to-transparent pointer-events-none" />

                      {/* Ikon di tengah */}
                      <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full border-2 border-accent/40 flex items-center justify-center bg-background/30 backdrop-blur-md">
                          <ExternalLink className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                      </div>


                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary-glow font-semibold glow-blue transition-all duration-300"
            >
              Diskusi Proyek Anda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
