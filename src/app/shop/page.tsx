import { getAllProducts } from '@/lib/data';
import Link from 'next/link';

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Shop Zynava Products
        </h1>
        <p className="text-lg text-muted-foreground">
          Premium doctor-supported supplements for optimal health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`} className="block">
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-muted-foreground text-sm">
                  Image: {product.image}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-card-foreground mb-2">
                  {product.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {product.short_description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 