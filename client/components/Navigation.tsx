import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useWhatsApp } from "../lib/whatsapp";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sendGeneralInquiry } = useWhatsApp();

  const menuItems = [
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "About", href: "/about" },
  ];

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <span>+91 9426617601</span>
              </button>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Visit our store in Surat</span>
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
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F53ed207ebebe41a99b31295e5d3b01c2?format=webp&width=800"
              alt="Shree Balaji Fab Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold saree-text-gradient">
                Shree Balaji Fab
              </span>
              <span className="text-xs text-muted-foreground font-sans">
                Unfold the Beauty of Tradition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={scrollToProducts}
              className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium"
            >
              Our Products
            </button>

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={sendGeneralInquiry}
              className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </button>
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

            {/* Account */}
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
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
              <button
                onClick={() => {
                  scrollToProducts();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium py-2"
              >
                Our Products
              </button>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-saree-deep-red transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  sendGeneralInquiry();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-foreground hover:text-saree-deep-red transition-colors duration-200 py-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Our Location</span>
              </button>

              <div className="pt-4 border-t border-border">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 text-foreground hover:text-saree-deep-red transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
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
