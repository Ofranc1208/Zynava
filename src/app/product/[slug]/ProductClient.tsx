'use client';

import Markdown from 'markdown-to-jsx';
import { useShoppingCart } from 'use-shopping-cart';

interface ProductClientProps {
  product: {
    slug: string;
    title: string;
    price: number;
    image: string;
    short_description: string;
    content: string;
  };
}

export default function ProductClient({ product }: ProductClientProps) {
  const { addItem } = useShoppingCart();

  const handleAddToCart = () => {
    addItem({
      name: product.title,
      description: product.short_description,
      id: product.slug,
      price: product.price * 100,
      currency: 'USD',
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Product Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {product.short_description}
          </p>
          <div className="text-3xl font-bold text-primary mb-6">
            ${product.price}
          </div>
        </div>

        {/* Product Image Placeholder */}
        <div className="mb-8">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground text-lg">
              Image: {product.image}
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="prose prose-lg max-w-none">
          <Markdown>
            {product.content}
          </Markdown>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8">
          <button 
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 