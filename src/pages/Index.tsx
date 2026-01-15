import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container px-4 py-12">
        <section id="productos">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Nuestros Dulces 🍭
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Los dulces más deliciosos y frescos, perfectos para cualquier ocasión
            </p>
          </div>
          
          <ProductGrid />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
