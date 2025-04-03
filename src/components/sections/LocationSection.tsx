
import { MapPin, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const businessHours = [
  { day: "Segunda-feira", hours: "9h às 20h" },
  { day: "Terça-feira", hours: "9h às 20h" },
  { day: "Quarta-feira", hours: "9h às 20h" },
  { day: "Quinta-feira", hours: "9h às 20h" },
  { day: "Sexta-feira", hours: "9h às 20h" },
  { day: "Sábado", hours: "9h às 18h" },
  { day: "Domingo", hours: "Fechado" },
];

export function LocationSection() {
  return (
    <section id="location" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="Nossa Localização"
              subtitle="Fácil acesso, ambiente agradável e estacionamento próximo."
            />
            
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <MapPin className="text-barber-gold shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Exemplo, 123 - Centro<br />
                    São Paulo, SP - CEP 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-barber-gold shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Horário de Funcionamento</h4>
                  <div className="mt-2 space-y-1 text-sm">
                    {businessHours.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between border-b border-border pb-1 last:border-none"
                      >
                        <span>{item.day}</span>
                        <span 
                          className={item.day === "Domingo" ? "text-barber-red" : ""}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.122808060623!2d-46.652471684406104!3d-23.564357184682882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625835823752!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Localização da barbearia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
