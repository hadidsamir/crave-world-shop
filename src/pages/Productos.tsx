import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

// Categorías con imágenes generadas
import gomitasImg from "@/assets/hero-banner-3.jpg";
import chocolatesImg from "@/assets/hero-banner-4.jpg";
import dulcesImg from "@/assets/hero-banner-2.jpg";
import paletasImg from "@/assets/products/paletas-rellenas.jpg";
import caramelasImg from "@/assets/products/caramelos-duros.jpg";
import mixImg from "@/assets/products/mix-fiesta.jpg";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

const categories: Category[] = [
  {
    id: "1",
    name: "GOMITAS",
    slug: "gomitas",
    image: gomitasImg,
    productCount: 24
  },
  {
    id: "2",
    name: "CHOCOLATES",
    slug: "chocolates",
    image: chocolatesImg,
    productCount: 18
  },
  {
    id: "3",
    name: "DULCERÍA",
    slug: "dulceria",
    image: dulcesImg,
    productCount: 45
  },
  {
    id: "4",
    name: "PALETAS",
    slug: "paletas",
    image: paletasImg,
    productCount: 12
  },
  {
    id: "5",
    name: "CARAMELOS",
    slug: "caramelos",
    image: caramelasImg,
    productCount: 30
  },
  {
    id: "6",
    name: "MIX FIESTA",
    slug: "mix-fiesta",
    image: mixImg,
    productCount: 8
  }
];

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link 
      to={`/categoria/${category.slug}`}
      className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Background Image */}
      <img 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
          {category.name}
        </h3>
        <p className="text-sm text-white/80">
          {category.productCount} PRODUCTOS
        </p>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          viewBox="0 0 400 60" 
          className="w-full h-12 text-background/20"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,30 Q100,60 200,30 T400,30 L400,0 L0,0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </Link>
  );
};

const Productos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4">
              Productos
            </h1>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora nuestras categorías y encuentra tus dulces favoritos
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Productos;
