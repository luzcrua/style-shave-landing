
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
