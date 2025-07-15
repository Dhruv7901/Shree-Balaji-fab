import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useWhatsApp } from "../lib/whatsapp";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const mobileSearchInput = e.currentTarget.querySelector(
      "input",
    ) as HTMLInputElement;
    if (mobileSearchInput?.value.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(mobileSearchInput.value.trim())}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setIsLogoZoomed(true);
    setTimeout(() => {
      setIsLogoZoomed(false);
      setIsLogoModalOpen(true);
    }, 200);
  };

  const closeLogoModal = () => {
    setIsLogoModalOpen(false);
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
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F53ed207ebebe41a99b31295e5d3b01c2?format=webp&width=800"
                alt="Shree Balaji Fab Logo"
                className={`w-16 h-16 object-contain cursor-pointer transition-all duration-300 hover:scale-110 ${
                  isLogoZoomed ? "scale-125" : ""
                }`}
                onClick={handleLogoClick}
                title="Click to view full logo"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-saree-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif font-bold saree-text-gradient hover:scale-105 transition-transform duration-200">
                Shree Balaji Fab
              </span>
              <span className="text-sm text-muted-foreground font-sans">
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
                <form
                  onSubmit={handleSearch}
                  className="flex items-center space-x-2"
                >
                  <Input
                    type="text"
                    placeholder="Search sarees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 border-saree-gold/30 focus:border-saree-gold"
                    autoFocus
                  />
                  <Button type="submit" variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
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
          <form onSubmit={handleMobileSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Search sarees..."
              className="flex-1 border-saree-gold/30 focus:border-saree-gold"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
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
                  to="/login"
                  className="flex items-center space-x-2 text-foreground hover:text-saree-deep-red transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Login / Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Logo Modal */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLogoModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-8 text-center">
              <h2 className="text-3xl font-serif font-bold text-saree-deep-red mb-6">
                Shree Balaji Fab
              </h2>

              {/* Full Logo Display */}
              <div className="relative mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F53ed207ebebe41a99b31295e5d3b01c2?format=webp&width=800"
                  alt="Shree Balaji Fab Complete Logo"
                  className="w-full max-w-md mx-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saree-gold/10 to-transparent"></div>
              </div>

              {/* Brand Information */}
              <div className="space-y-4">
                <p className="text-xl font-serif text-saree-deep-red">
                  "Unfold the Beauty of Tradition"
                </p>
                <p className="text-muted-foreground">
                  Experience the finest collection of traditional sarees with
                  authentic Indian craftsmanship
                </p>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
                  <div className="flex items-center justify-center space-x-2 p-3 bg-saree-warm-cream/50 rounded-lg">
                    <Phone className="w-4 h-4 text-saree-deep-red" />
                    <span>+91 9426617601</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 p-3 bg-saree-warm-cream/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-saree-deep-red" />
                    <span>Surat, Gujarat</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    closeLogoModal();
                    sendGeneralInquiry();
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
