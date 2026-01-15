import { Candy, Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-16">
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Candy className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Dulce World
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dulce World. Todos los derechos reservados. 🍬
          </p>
        </div>
      </div>
    </footer>
  );
};
