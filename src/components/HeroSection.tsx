import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBanner1 from "@/assets/hero-banner.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import heroBanner4 from "@/assets/hero-banner-4.jpg";

const heroImages = [heroBanner1, heroBanner2, heroBanner3, heroBanner4];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToProducts = () => {
    navigate('/productos');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Dulces coloridos ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center pt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            El mundo de tus{" "}
            <span className="text-primary">antojos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Descubre los dulces más deliciosos y coloridos. Gomitas, chocolates, paletas y mucho más. ¡Tu felicidad dulce te espera!
          </p>
          
          <Button 
            size="lg" 
            className="rounded-full px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={goToProducts}
          >
            Ver Productos 🍭
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-primary/40 hover:bg-primary/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
