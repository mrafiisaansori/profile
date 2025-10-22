import { Instagram, Linkedin, Github } from "lucide-react";
import logo from "@/assets/raftech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and copyright */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="Raftech Logo" 
                  className="h-8 w-auto"
                />
                <h3 className="text-2xl font-bold text-gradient">Raftech</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                © {currentYear} Raftech. All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/raftech.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/raftech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://github.com/raftech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Jasa Pembuatan Website Profesional untuk Bisnis, Startup, dan UKM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
