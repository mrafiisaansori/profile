import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const waUrl = "https://wa.me/62859106997680?text=Hi%20Raftech,%20saya%20ingin%20konsultasi%20pembuatan%20website";
    window.open(waUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] p-0 shadow-lg animate-float glow-cyan transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
