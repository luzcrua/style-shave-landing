
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Corte Masculino",
    price: "R$40",
    description: "Estilo clássico ou moderno, feito sob medida para você.",
    featured: false,
  },
  {
    title: "Barba",
    price: "R$30",
    description: "Acabamento perfeito para uma barba bem cuidada.",
    featured: false,
  },
  {
    title: "Corte + Barba",
    price: "R$60",
    description: "Combo completo para quem busca um visual impecável.",
    featured: true,
  },
  {
    title: "Progressiva Masculina",
    price: "R$80",
    description: "Tratamento para alisar e dar brilho aos cabelos.",
    featured: false,
  },
  {
    title: "Manicure/Pedicure",
    price: "R$50",
    description: "Cuidado completo para suas mãos e pés.",
    featured: false,
  },
  {
    title: "Tratamento Capilar",
    price: "R$55",
    description: "Hidratação profunda e nutrição para seus cabelos.",
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionTitle 
          title="Nossos Serviços"
          subtitle="Oferecemos uma variedade de serviços para atender todas as suas necessidades."
          center
        />
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="hair">Cabelo</TabsTrigger>
            <TabsTrigger value="beard">Barba</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                price={service.price}
                description={service.description}
                featured={service.featured}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="hair" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(s => s.title.includes("Corte") || s.title.includes("Progressiva") || s.title.includes("Tratamento"))
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  featured={service.featured}
                />
              ))}
          </TabsContent>
          
          <TabsContent value="beard" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(s => s.title.includes("Barba"))
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  featured={service.featured}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
