'use client';

import { CartProvider } from "use-shopping-cart";

interface CartProviderWrapperProps {
  children: React.ReactNode;
}

export default function CartProviderWrapper({ children }: CartProviderWrapperProps) {
  return (
    <CartProvider
      cartMode="client-only"
      stripe="your_stripe_public_key_placeholder"
      successUrl="your_success_url_placeholder"
      cancelUrl="your_cancel_url_placeholder"
      currency="USD"
      allowedCountries={['US']}
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  );
} 