
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Desde que comecei a frequentar essa barbearia, nunca mais quis outra. O atendimento é excepcional e o corte sempre fica perfeito!",
  },
  {
    name: "Rafael Mendes",
    text: "Ambiente super agradável e profissionais muito qualificados. Recomendo para todos que buscam um serviço de qualidade.",
  },
  {
    name: "Bruno Costa",
    text: "O melhor lugar para cuidar da barba na cidade. Serviço de primeira e preço justo.",
  },
  {
    name: "Marcos Oliveira",
    text: "Atendimento pontual e profissionais competentes. O resultado sempre supera minhas expectativas.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionTitle 
          title="O Que Nossos Clientes Dizem"
          subtitle="A opinião de quem já experimentou nossos serviços."
          center
        />
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 px-4">
                <TestimonialCard 
                  name={testimonial.name}
                  text={testimonial.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
