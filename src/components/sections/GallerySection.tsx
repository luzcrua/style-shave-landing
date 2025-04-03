
import { SectionTitle } from "@/components/SectionTitle";

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1593702288091-cd8ded9af225?auto=format&fit=crop&q=80",
];

export function GallerySection() {
  return (
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
  );
}
