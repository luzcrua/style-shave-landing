
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { BackToTopButton } from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>StyleShave | Barbearia de Alta Qualidade em São Paulo</title>
        <meta name="description" content="StyleShave - Barbearia profissional com cortes modernos, barba impecável e atendimento personalizado em São Paulo. Agende seu horário!" />
        <meta name="keywords" content="barbearia, barber shop, corte masculino, barba, StyleShave, São Paulo, barbeiro, fade, degradê, navalhado" />
        <meta name="author" content="StyleShave" />
        <link rel="canonical" href="https://styleshave.com/" />
        
        {/* Structured data for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BarberShop",
              "name": "StyleShave",
              "image": "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?auto=format&fit=crop&q=80",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Exemplo, 123",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "01234-567",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.550520",
                "longitude": "-46.633308"
              },
              "url": "https://styleshave.com/",
              "telephone": "+551199999999",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <InstagramSection />
      <LocationSection />
      <BookingSection />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Index;
