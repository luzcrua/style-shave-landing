
import { Scissors, Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Sobre a StyleShave"
              subtitle="Há mais de 5 anos proporcionando cortes de qualidade para homens que valorizam estilo e cuidado pessoal."
            />
            <p className="mb-6 text-muted-foreground">
              A StyleShave nasceu da paixão pelo trabalho bem feito e pelo cuidado com a estética masculina. Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center bg-secondary p-4 rounded-lg">
                <Scissors className="text-barber-gold mb-3" size={32} />
                <span className="text-lg font-semibold">+5000</span>
                <span className="text-sm text-muted-foreground">Cortes Realizados</span>
              </div>
              <div className="flex flex-col items-center bg-secondary p-4 rounded-lg">
                <Star className="text-barber-gold mb-3" size={32} />
                <span className="text-lg font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">Avaliação Média</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?auto=format&fit=crop&q=80" 
                alt="Equipe StyleShave" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-barber-gold rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-barber-gold rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
