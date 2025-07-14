import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useWhatsApp } from "../lib/whatsapp";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sendGeneralInquiry } = useWhatsApp();

  const categories = [
    { name: "Silk Sarees", href: "/silk-sarees" },
    { name: "Cotton Sarees", href: "/cotton-sarees" },
    { name: "Designer Sarees", href: "/designer-sarees" },
    { name: "Wedding Collection", href: "/wedding-collection" },
    { name: "Casual Wear", href: "/casual-wear" },
    { name: "Festive Collection", href: "/festive-collection" },
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-saree-gold/20">
      {/* Top Bar */}
      <div className="border-b border-border/50 bg-saree-deep-red text-saree-warm-cream">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <button
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                onClick={sendGeneralInquiry}
              >
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </button>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Visit our store in Mumbai</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free shipping on orders above ₹2,999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="saree-gradient w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold saree-text-gradient">
                Saree Mahal
              </span>
              <span className="text-xs text-muted-foreground font-sans">
                Traditional Elegance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search sarees..."
                    className="w-64 border-saree-gold/30 focus:border-saree-gold"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-saree-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-saree-deep-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <Input
            type="text"
            placeholder="Search sarees..."
            className="w-full border-saree-gold/30 focus:border-saree-gold"
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 text-foreground hover:text-saree-deep-red transition-colors duration-200 py-2"
                >
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
