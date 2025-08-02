'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = (e: React.MouseEvent) => {
    // Only close if clicking on the content area, not on links
    if (e.target === e.currentTarget) {
      setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Zynava
          </Link>
        </div>

        {/* Center: Desktop Navigation - Hidden on mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    Browse by benefit:
                  </div>
                  <Link href="/shop?category=immunity" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Immunity
                  </Link>
                  <Link href="/shop?category=energy" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Energy
                  </Link>
                  <Link href="/shop?category=gut-health" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Gut Health
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/science" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  pathname === '/science' 
                    ? 'bg-orange-100 text-orange-700 font-semibold' 
                    : 'bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                }`}>
                  Science
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  pathname === '/about' 
                    ? 'bg-orange-100 text-orange-700 font-semibold' 
                    : 'bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                }`}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  pathname === '/contact' 
                    ? 'bg-orange-100 text-orange-700 font-semibold' 
                    : 'bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                }`}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Account">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="View cart">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            onClick={handleMenuClick}
            className="touch-manipulation"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            
            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full py-6">
              {/* Account Section */}
              <div className="mb-6">
                <Link 
                  href="/account" 
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    pathname === '/account' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                  }`}
                  onClick={handleLinkClick}
                >
                  <User className="h-5 w-5" />
                  <span className="font-semibold">Sign In</span>
                </Link>
              </div>

              {/* SHOP Section */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-4 mb-4">
                  Shop
                </h3>
                <div className="space-y-3 px-4">
                  <Link 
                    href="/shop" 
                    className={`block text-lg font-bold transition-colors ${
                      pathname === '/shop' 
                        ? 'text-orange-600' 
                        : 'text-gray-900 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Shop All
                  </Link>
                  <Link 
                    href="/bundles" 
                    className={`block text-lg font-bold transition-colors ${
                      pathname === '/bundles' 
                        ? 'text-orange-600' 
                        : 'text-gray-900 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Bundles
                  </Link>
                  <Link 
                    href="/trier" 
                    className={`block text-lg font-bold transition-colors ${
                      pathname === '/trier' 
                        ? 'text-orange-600' 
                        : 'text-gray-900 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Trier Matchmaker
                  </Link>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6 px-4">
                  <Link 
                    href="/product/immune-revival" 
                    className="block bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-xl">🛡️</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">Immune Revival</h4>
                  </Link>
                  <Link 
                    href="/product/immune-revival" 
                    className="block bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-xl">🌱</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">Gut Health Plus</h4>
                  </Link>
                </div>
              </div>

              {/* LEARN Section */}
              <Separator className="my-6" />
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-4 mb-4">
                  Learn
                </h3>
                <div className="space-y-3 px-4">
                  <Link 
                    href="/science" 
                    className={`block transition-colors ${
                      pathname === '/science' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Our Science
                  </Link>
                  <Link 
                    href="/about" 
                    className={`block transition-colors ${
                      pathname === '/about' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    About Zynava
                  </Link>
                  <Link 
                    href="/reviews" 
                    className={`block transition-colors ${
                      pathname === '/reviews' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Reviews
                  </Link>
                  <Link 
                    href="/blog" 
                    className={`block transition-colors ${
                      pathname === '/blog' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              {/* SUPPORT Section */}
              <Separator className="my-6" />
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-4 mb-4">
                  Support
                </h3>
                <div className="space-y-3 px-4">
                  <Link 
                    href="/contact" 
                    className={`block transition-colors ${
                      pathname === '/contact' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/shipping" 
                    className={`block transition-colors ${
                      pathname === '/shipping' 
                        ? 'text-orange-600 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    Shipping & Returns
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 