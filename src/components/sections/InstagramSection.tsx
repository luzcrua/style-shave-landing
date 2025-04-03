
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/SectionTitle";
import { Instagram } from "lucide-react";

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

export function InstagramSection() {
  return (
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
  );
}
