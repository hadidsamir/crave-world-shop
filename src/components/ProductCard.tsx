import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Plus } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const price = node.priceRange.minVariantPrice;
  const image = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    });

    toast.success("¡Agregado al carrito!", {
      description: node.title,
      position: "top-center"
    });
  };

  return (
    <Link to={`/product/${node.handle}`}>
      <Card className="group overflow-hidden border-0 bg-card shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">
        <div className="aspect-square overflow-hidden bg-secondary/50">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">🍬</span>
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {node.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {node.description || "Delicioso dulce para disfrutar"}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${parseFloat(price.amount).toFixed(2)}
              <span className="text-xs text-muted-foreground ml-1">MXN</span>
            </span>
            
            <Button
              size="sm"
              className="rounded-full h-9 w-9 p-0"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
