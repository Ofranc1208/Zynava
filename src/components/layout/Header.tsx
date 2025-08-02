import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
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
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Science
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        <Sheet className="md:hidden">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
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
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/shop" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="/science" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Science
              </Link>
              <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 