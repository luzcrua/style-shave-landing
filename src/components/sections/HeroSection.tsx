
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 playfair animate-fade-in">
          Bem-vindo à <span className="text-barber-gold">StyleShave</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          Cortes modernos, barba impecável e atendimento personalizado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Button asChild size="lg" className="bg-barber-gold hover:bg-barber-gold/90 text-white">
            <a href="#booking">Agendar Horário</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <a href="#services">Nossos Serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
