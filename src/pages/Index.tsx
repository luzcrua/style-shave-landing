
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { useState, useEffect } from "react";
import { Scissors, Beard, Star, Clock, MapPin, Instagram, Calendar } from "lucide-react";

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

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1593702288091-cd8ded9af225?auto=format&fit=crop&q=80",
];

const instagramPosts = [
  {
    id: "post1",
    image: "https://images.unsplash.com/photo-1596728325488-d92c78bbfc45?auto=format&fit=crop&q=80",
    caption: "Corte moderno para o final de semana! #barbearia #hair",
    likes: 156,
    date: "2 dias atrás",
  },
  {
    id: "post2",
    image: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?auto=format&fit=crop&q=80",
    caption: "Acabamento perfeito faz toda a diferença. #barba #cuidadosdehomem",
    likes: 231,
    date: "5 dias atrás",
  },
  {
    id: "post3",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80",
    caption: "Dia de cliente especial! Resultado incrível. #antesedepois",
    likes: 198,
    date: "1 semana atrás",
  },
  {
    id: "post4",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80",
    caption: "Produtos profissionais para o melhor resultado! #produtosparabarbearia",
    likes: 143,
    date: "2 semanas atrás",
  },
];

const businessHours = [
  { day: "Segunda-feira", hours: "9h às 20h" },
  { day: "Terça-feira", hours: "9h às 20h" },
  { day: "Quarta-feira", hours: "9h às 20h" },
  { day: "Quinta-feira", hours: "9h às 20h" },
  { day: "Sexta-feira", hours: "9h às 20h" },
  { day: "Sábado", hours: "9h às 18h" },
  { day: "Domingo", hours: "Fechado" },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* About Section */}
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
      
      {/* Services Section */}
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
      
      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nossa Galeria"
            subtitle="Veja alguns dos nossos melhores trabalhos."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Trabalho ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
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
      
      {/* Instagram Section */}
      <section id="instagram" className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle 
            title="Siga-nos no Instagram"
            subtitle="Fique por dentro das novidades e inspirações."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.caption} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm truncate text-muted-foreground">{post.caption}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <div className="flex items-center">
                      <Instagram size={12} className="mr-1" />
                      <span className="text-xs">{post.likes} likes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-barber-gold text-barber-gold hover:bg-barber-gold/10">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={16} className="mr-2" />
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
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
      
      {/* Booking Section */}
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
      
      {/* Footer */}
      <footer className="bg-barber-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">StyleShave</h3>
              <p className="text-gray-300 mb-4">
                Proporcionando estilo e cuidado para homens que valorizam qualidade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-barber-gold transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-barber-gold transition-colors">Sobre</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-barber-gold transition-colors">Serviços</a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-barber-gold transition-colors">Galeria</a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-300 hover:text-barber-gold transition-colors">Agendamento</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">Contato</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2 text-barber-gold" />
                  Rua Exemplo, 123 - Centro, São Paulo
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-barber-gold"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  (11) 9999-9999
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-barber-gold"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path>
                  </svg>
                  contato@styleshave.com
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} StyleShave Barbearia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-barber-gold text-white shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
