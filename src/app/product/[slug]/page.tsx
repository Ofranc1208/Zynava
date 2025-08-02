import { getProductBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
} 