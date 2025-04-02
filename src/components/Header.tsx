
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Galeria", href: "#gallery" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Instagram", href: "#instagram" },
  { name: "Localização", href: "#location" },
  { name: "Agendamento", href: "#booking" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-2 glass-light dark:glass-dark shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold playfair">
            StyleShave
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button asChild className="bg-barber-gold hover:bg-barber-gold/90 text-white">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              Agendar Agora
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              asChild 
              className="mt-4 w-full bg-barber-gold hover:bg-barber-gold/90 text-white"
            >
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Agendar Agora
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
