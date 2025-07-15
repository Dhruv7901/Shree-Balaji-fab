import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Truck,
  Shield,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Users,
  Instagram,
  Mail,
  ExternalLink,
  Navigation2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const Index = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [currentHeroProduct, setCurrentHeroProduct] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { sendGeneralInquiry, sendQuickBuy, sendStoreVisitInquiry } =
    useWhatsApp();

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Trendy Collection - Golden Diagonal Stripes",
      price: "₹1,500",
      originalPrice: "₹2,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8df1c237be694093810d7cad742cf408?format=webp&width=800",
      rating: 4.9,
      reviews: 245,
      discount: "40% OFF",
      category: "Trendy Collection",
      description:
        "✨ EXCLUSIVE! Golden zari stripes that catch every eye! Perfect for office parties, casual outings & festive occasions. Lightweight, comfortable & Instagram-ready!",
    },
    {
      id: 2,
      name: "Elegant Zigzag Pattern - Royal Collection",
      price: "₹1,500",
      originalPrice: "₹2,200",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=800",
      rating: 4.8,
      reviews: 189,
      discount: "32% OFF",
      category: "Designer Collection",
      description:
        "🔥 TRENDING NOW! Mesmerizing zigzag patterns with rich borders. These sarees are flying off our shelves! Perfect for weddings & special occasions.",
    },
    {
      id: 3,
      name: "Geometric Diamond Print - Contemporary Style",
      price: "₹1,500",
      originalPrice: "₹2,300",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fef043fbc4bde4bbd84730e9ff0f5f72b?format=webp&width=800",
      rating: 4.7,
      reviews: 156,
      discount: "35% OFF",
      category: "Contemporary Collection",
      description:
        "💎 STUNNING! Modern geometric patterns that make you stand out. Easy to drape, comfortable fabric. Perfect for young professionals & college events!",
    },
    {
      id: 4,
      name: "Luxury Silk Collection with Golden Border",
      price: "₹1,500",
      originalPrice: "₹2,800",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=800",
      rating: 4.9,
      reviews: 298,
      discount: "46% OFF",
      category: "Silk Sarees",
      description:
        "👑 ROYAL ELEGANCE! Premium silk with intricate golden borders. Feel like a queen at every function. Limited stock - grab yours before it's gone!",
    },
    {
      id: 5,
      name: "Vibrant Feather Print - Artistic Collection",
      price: "₹1,500",
      originalPrice: "₹2,400",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F9a66ca2601f54523927dc3d6b74dc52c?format=webp&width=800",
      rating: 4.8,
      reviews: 167,
      discount: "38% OFF",
      category: "Printed Collection",
      description:
        "🦚 ARTISTIC BEAUTY! Stunning feather motifs that symbolize grace & freedom. Perfect conversation starter at any gathering. Unique & eye-catching!",
    },
    {
      id: 6,
      name: "Abstract Paisley - Modern Traditional Fusion",
      price: "₹1,500",
      originalPrice: "₹2,100",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fb36e7a5d7d6346669a8ada54c6fc4636?format=webp&width=800",
      rating: 4.7,
      reviews: 134,
      discount: "29% OFF",
      category: "Fusion Collection",
      description:
        "🎨 MODERN FUSION! Traditional paisley with contemporary twist. Perfect blend of classic & trendy. Ideal for office parties & casual meetups!",
    },
    {
      id: 7,
      name: "Nature's Leaf Collection - Organic Charm",
      price: "₹1,500",
      originalPrice: "₹2,600",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F7ee7684723684e5da5e63b1c2ada56ae?format=webp&width=800",
      rating: 4.8,
      reviews: 201,
      discount: "42% OFF",
      category: "Nature Collection",
      description:
        "🍃 NATURE INSPIRED! Beautiful leaf motifs in earthy tones. Connect with nature while looking absolutely gorgeous. Perfect for eco-conscious fashionistas!",
    },
    {
      id: 8,
      name: "Golden Lace Border Collection - Party Special",
      price: "₹1,500",
      originalPrice: "₹2,700",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8ada929b9c964af6b7146d68984dcc3a?format=webp&width=800",
      rating: 4.9,
      reviews: 276,
      discount: "44% OFF",
      category: "Party Wear",
      description:
        "✨ PARTY PERFECT! Luxurious golden lace borders that shimmer under lights. Be the center of attention at every celebration. Premium quality guarantee!",
    },
    {
      id: 9,
      name: "Traditional Patola Pattern - Heritage Collection",
      price: "₹1,500",
      originalPrice: "₹3,000",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2275342944014037a1baab85cc26729a?format=webp&width=800",
      rating: 4.9,
      reviews: 312,
      discount: "50% OFF",
      category: "Traditional Collection",
      description:
        "🏛️ HERITAGE PRIDE! Authentic Patola-inspired patterns straight from Gujarat's textile tradition. Own a piece of Indian heritage at unbeatable price!",
    },
    {
      id: 10,
      name: "Royal Silk Dupatta Collection - Premium Quality",
      price: "₹1,500",
      originalPrice: "₹2,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F468ee82c93f44263be70198e10d99c5c?format=webp&width=800",
      rating: 4.8,
      reviews: 189,
      discount: "40% OFF",
      category: "Silk Collection",
      description:
        "👸 SILK LUXURY! Pure silk with golden borders that drape beautifully. Feel the difference of premium quality. Perfect for weddings & special occasions!",
    },
    {
      id: 11,
      name: "Vibrant Bandhani - Rajasthani Elegance",
      price: "₹1,500",
      originalPrice: "₹2,300",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fbb0975b280054b3d85ee71d51ea3d52a?format=webp&width=800",
      rating: 4.7,
      reviews: 145,
      discount: "35% OFF",
      category: "Bandhani Collection",
      description:
        "🎯 AUTHENTIC BANDHANI! Hand-tied traditional patterns in vibrant colors. Straight from Rajasthan's royal textile heritage. Limited edition collection!",
    },
    {
      id: 12,
      name: "Delicate Floral Print - Garden Fresh Collection",
      price: "₹1,500",
      originalPrice: "₹2,200",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F0b1c6490a16b41a889c815109d4c4894?format=webp&width=800",
      rating: 4.8,
      reviews: 223,
      discount: "32% OFF",
      category: "Floral Collection",
      description:
        "🌸 FRESH & FEMININE! Beautiful floral prints that never go out of style. Light, breezy, and perfect for daily wear, office, or casual outings!",
    },
  ];

  // Categories with real product images
  const categories = [
    {
      name: "Silk Sarees",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=800",
      count: "250+ Designs",
      color: "bg-saree-deep-red",
    },
    {
      name: "Wedding Collection",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8ada929b9c964af6b7146d68984dcc3a?format=webp&width=800",
      count: "180+ Designs",
      color: "bg-saree-gold",
    },
    {
      name: "Cotton Sarees",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F0b1c6490a16b41a889c815109d4c4894?format=webp&width=800",
      count: "320+ Designs",
      color: "bg-saree-emerald",
    },
    {
      name: "Designer Sarees",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=800",
      count: "150+ Designs",
      color: "bg-saree-royal-blue",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Surat",
      rating: 5,
      comment:
        "Beautiful sarees with excellent quality. The colors are vibrant and the fabric is amazing!",
      avatar: "/placeholder.svg",
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad",
      rating: 5,
      comment:
        "Ordered my wedding saree from here. Perfect fit and delivered on time. Highly recommended!",
      avatar: "/placeholder.svg",
    },
    {
      name: "Kavitha Reddy",
      location: "Hyderabad",
      rating: 5,
      comment:
        "Great collection and affordable prices. Customer service is also very responsive.",
      avatar: "/placeholder.svg",
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentHeroProduct((prev) => (prev + 1) % featuredProducts.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProducts.length]);

  // Function to scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hero navigation functions
  const nextHeroProduct = () => {
    setCurrentHeroProduct((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevHeroProduct = () => {
    setCurrentHeroProduct((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1,
    );
  };

  const goToHeroProduct = (index: number) => {
    setCurrentHeroProduct(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saree-warm-cream via-secondary to-saree-gold/20">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="text-saree-deep-red border-saree-gold"
                >
                  ✨ New Collection Arrived
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                  Discover the{" "}
                  <span className="saree-text-gradient">Elegance</span> of
                  Traditional Sarees
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Immerse yourself in the beauty of handcrafted sarees. From
                  silk to cotton, wedding to casual - find your perfect drape
                  with authentic Indian craftsmanship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-saree-deep-red hover:bg-saree-deep-red/90 text-white"
                  onClick={scrollToProducts}
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
                  onClick={sendGeneralInquiry}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-saree-coral border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">10,000+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold flex items-center">
                    4.9
                    <Star className="w-4 h-4 fill-saree-gold text-saree-gold ml-1" />
                  </div>
                  <div className="text-muted-foreground">Google Reviews</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Dynamic Product Carousel */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentHeroProduct * 100}%)`,
                  }}
                >
                  {featuredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="w-full flex-shrink-0 relative"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 saree-gradient opacity-20"></div>

                      {/* Product Badge */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                        <div className="text-sm font-semibold text-saree-deep-red">
                          Featured Collection
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {product.category}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-saree-deep-red">
                              {product.price}
                            </span>
                            <span className="text-xs text-muted-foreground line-through ml-2">
                              {product.originalPrice}
                            </span>
                          </div>
                          <Badge
                            variant="destructive"
                            className="bg-saree-coral text-xs"
                          >
                            {product.discount}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-2">
                          <Star className="w-3 h-3 fill-saree-gold text-saree-gold" />
                          <span className="text-xs ml-1">{product.rating}</span>
                          <span className="text-xs text-muted-foreground ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Quick Order Button */}
                      <div className="absolute bottom-6 right-6">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                          onClick={() =>
                            sendQuickBuy({
                              name: product.name,
                              price: product.price,
                              category: product.category,
                              image: product.image,
                            })
                          }
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Order Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevHeroProduct}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextHeroProduct}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-6 right-6 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Carousel Indicators/Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToHeroProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentHeroProduct
                        ? "bg-saree-deep-red scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Horizontal Scroll Bar */}
              <div className="mt-4 bg-gray-200 rounded-full h-2 relative overflow-hidden">
                <div
                  className="bg-saree-deep-red h-full rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${((currentHeroProduct + 1) / featuredProducts.length) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Product Navigation Thumbnails */}
              <div className="mt-6 flex space-x-3 overflow-x-auto pb-2">
                {featuredProducts.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => goToHeroProduct(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentHeroProduct
                        ? "border-saree-gold shadow-lg scale-105"
                        : "border-gray-200 hover:border-saree-gold/50"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Background Decorations */}
              <div className="absolute top-8 -left-8 w-32 h-32 saree-gradient rounded-full opacity-30 blur-xl"></div>
              <div className="absolute bottom-8 -right-8 w-40 h-40 bg-saree-emerald/30 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-saree-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-saree-gold" />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                On orders above ₹2,999
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-saree-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-saree-emerald" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                100% secure transactions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-saree-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-saree-coral" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked authentic sarees
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-saree-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-saree-royal-blue" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Always here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections of traditional sarees for every
              occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                onClick={scrollToProducts}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-serif font-bold">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products - This is the target section for Shop Now */}
      <section id="products-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Our Products & Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of traditional sarees with
              high-quality fabrics and detailed craftsmanship
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge
                        variant="destructive"
                        className="absolute top-3 left-3 bg-saree-coral"
                      >
                        {product.discount}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-saree-deep-red transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-2">
                          <Star className="w-4 h-4 fill-saree-gold text-saree-gold" />
                          <span className="text-sm ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-saree-deep-red">
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4 pt-0">
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        sendQuickBuy({
                          name: product.name,
                          price: product.price,
                          category: product.category,
                          image: product.image,
                        });
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
              asChild
            >
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Visit Our Store
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the beauty of our sarees in person. Visit our store
                in Surat for a personalized shopping experience with expert
                assistance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-saree-deep-red mt-1" />
                  <div>
                    <div className="font-semibold">Shree Balaji Fab</div>
                    <div className="text-muted-foreground">
                      Abhishek Market Ring Rd, Sahara Darwaja
                      <br />
                      New Textile Market, Surat, Gujarat 395002
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-saree-deep-red" />
                  <div>
                    <div className="font-semibold">+91 9426617601</div>
                    <div className="text-muted-foreground">
                      Open 10 AM - 9 PM
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-saree-deep-red" />
                  <div>
                    <div className="font-semibold">balajifab165@gmail.com</div>
                    <div className="text-muted-foreground">
                      Email us for inquiries
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-saree-deep-red" />
                  <div>
                    <div className="font-semibold">@divya_saree_couture</div>
                    <div className="text-muted-foreground">
                      Follow us on Instagram
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="bg-saree-deep-red hover:bg-saree-deep-red/90"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=Abhishek+Market+Ring+Rd,+Sahara+Darwaja,+New+Textile+Market,+Surat,+Gujarat+395002",
                      "_blank",
                    )
                  }
                >
                  <Navigation2 className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
                  onClick={sendStoreVisitInquiry}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Store
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() =>
                    window.open("mailto:balajifab165@gmail.com", "_blank")
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-600 hover:bg-pink-50"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/divya_saree_couture?igsh=MTFpaTY3NHFkNzc5cw==",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6846815937887!2d72.82874657526145!3d21.189568380474395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e9c0d4e1f15%3A0x4b8b2f8a8a8a8a8a!2sAbhishek%20Market%20Ring%20Rd%2C%20Sahara%20Darwaja%2C%20New%20Textile%20Market%2C%20Surat%2C%20Gujarat%20395002!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Balaji Fab Store Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read authentic reviews from our happy customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-saree-gold text-saree-gold"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-saree-deep-red text-saree-warm-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F53ed207ebebe41a99b31295e5d3b01c2?format=webp&width=800"
                  alt="Shree Balaji Fab Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-xl font-serif font-bold">
                    Shree Balaji Fab
                  </div>
                  <div className="text-sm opacity-80">
                    Unfold the Beauty of Tradition
                  </div>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Your destination for authentic traditional sarees with modern
                convenience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About Us</li>
                <li>Size Guide</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Silk Sarees</li>
                <li>Cotton Sarees</li>
                <li>Wedding Collection</li>
                <li>Designer Sarees</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+91 9426617601</li>
                <li>info@shreebalalifab.com</li>
                <li>Abhishek Market, Surat, Gujarat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-saree-warm-cream/20 mt-12 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Shree Balaji Fab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
