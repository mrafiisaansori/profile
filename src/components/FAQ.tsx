import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Berapa biaya pembuatan website di Raftech?",
      answer: "Biaya pembuatan website bervariasi tergantung kebutuhan dan kompleksitas proyek. Kami menyediakan berbagai paket mulai dari website company profile sederhana hingga aplikasi web kompleks. Hubungi kami untuk mendapatkan penawaran yang sesuai dengan kebutuhan bisnis Anda."
    },
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer: "Waktu pengerjaan tergantung kompleksitas proyek. Website company profile sederhana biasanya selesai dalam 2-4 minggu, sedangkan aplikasi web atau sistem yang lebih kompleks membutuhkan 1-3 bulan. Kami akan memberikan timeline yang jelas setelah diskusi kebutuhan proyek."
    },
    {
      question: "Apakah bisa update konten website sendiri?",
      answer: "Ya, tentu! Kami menyediakan Content Management System (CMS) yang user-friendly sehingga Anda dapat dengan mudah mengelola dan update konten website sendiri tanpa perlu coding. Kami juga akan memberikan pelatihan penggunaan CMS kepada tim Anda."
    },
    {
      question: "Apakah sudah termasuk hosting dan domain?",
      answer: "Paket kami bisa disesuaikan dengan kebutuhan. Kami menyediakan opsi hosting dan domain, atau Anda bisa menggunakan hosting dan domain sendiri. Kami akan membantu setup dan konfigurasi sesuai pilihan Anda untuk memastikan website berjalan optimal."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in-up">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card hover:border-accent/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-accent transition-colors py-6">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
