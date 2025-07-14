import { useState } from "react";
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
  Heart,
  ShoppingBag,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Navigation from "../components/Navigation";

const Index = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Royal Banarasi Silk",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 127,
      discount: "31% OFF",
      category: "Silk Sarees",
    },
    {
      id: 2,
      name: "Designer Wedding Saree",
      price: "₹15,999",
      originalPrice: "₹22,999",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89,
      discount: "30% OFF",
      category: "Wedding Collection",
    },
    {
      id: 3,
      name: "Kanjivaram Classic",
      price: "₹6,999",
      originalPrice: "₹9,999",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 156,
      discount: "30% OFF",
      category: "Silk Sarees",
    },
    {
      id: 4,
      name: "Elegant Cotton Saree",
      price: "₹2,999",
      originalPrice: "₹4,499",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 203,
      discount: "33% OFF",
      category: "Cotton Sarees",
    },
  ];

  const categories = [
    {
      name: "Silk Sarees",
      image: "/placeholder.svg",
      count: "250+ Designs",
      color: "bg-saree-deep-red",
    },
    {
      name: "Wedding Collection",
      image: "/placeholder.svg",
      count: "180+ Designs",
      color: "bg-saree-gold",
    },
    {
      name: "Cotton Sarees",
      image: "/placeholder.svg",
      count: "320+ Designs",
      color: "bg-saree-emerald",
    },
    {
      name: "Designer Sarees",
      image: "/placeholder.svg",
      count: "150+ Designs",
      color: "bg-saree-royal-blue",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
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
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
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
              <div className="relative z-10">
                <img
                  src="/placeholder.svg"
                  alt="Beautiful Saree"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 saree-gradient opacity-20 rounded-2xl"></div>
              </div>
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

      {/* Trending Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Trending Sarees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved pieces that are trending right now
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
                    <div
                      className={`absolute top-3 right-3 transition-all duration-300 ${
                        hoveredProduct === product.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col space-y-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-10 h-10 p-0"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-10 h-10 p-0"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-saree-deep-red transition-colors">
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-saree-deep-red">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-saree-deep-red hover:bg-saree-deep-red/90"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
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
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
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
                in Mumbai for a personalized shopping experience with expert
                assistance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-saree-deep-red mt-1" />
                  <div>
                    <div className="font-semibold">Saree Mahal</div>
                    <div className="text-muted-foreground">
                      123 Fashion Street, Linking Road
                      <br />
                      Bandra West, Mumbai - 400050
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-saree-deep-red" />
                  <div>
                    <div className="font-semibold">+91 98765 43210</div>
                    <div className="text-muted-foreground">
                      Open 10 AM - 9 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-saree-deep-red hover:bg-saree-deep-red/90">
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Store
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-saree-deep-red mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Map Integration Coming Soon
                  </p>
                </div>
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
              <div className="flex items-center space-x-2 mb-6">
                <div className="saree-gradient w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-xl font-serif font-bold">
                    Saree Mahal
                  </div>
                  <div className="text-sm opacity-80">Traditional Elegance</div>
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
                <li>+91 98765 43210</li>
                <li>info@sareemahal.com</li>
                <li>123 Fashion Street, Mumbai</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-saree-warm-cream/20 mt-12 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Saree Mahal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
