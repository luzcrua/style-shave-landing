
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppForm } from "@/components/WhatsAppForm";

export function BookingSection() {
  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Agende Seu Horário"
              subtitle="Preencha o formulário abaixo para agendar seu atendimento. As informações serão enviadas diretamente para nosso WhatsApp."
            />
            
            <div className="hidden lg:block mt-8 relative">
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-barber-gold rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-barber-gold rounded-lg -z-10"></div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616257241695-1e53ccc7a22f?auto=format&fit=crop&q=80" 
                  alt="Agendamento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 playfair text-center">Formulário de Agendamento</h3>
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </section>
  );
}
