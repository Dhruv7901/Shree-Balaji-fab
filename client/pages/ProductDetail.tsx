import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { sendQuickBuy, sendGeneralInquiry } = useWhatsApp();

  // Real product data matching the homepage products
  const products = [
    {
      id: 1,
      name: "Premium Trendy Collection - Golden Diagonal Stripes",
      price: "₹1,500",
      originalPrice: "₹2,500",
      discount: "40% OFF",
      rating: 4.9,
      reviews: 245,
      category: "Trendy Collection",
      description:
        "✨ EXCLUSIVE! Golden zari stripes that catch every eye! Perfect for office parties, casual outings & festive occasions. Lightweight, comfortable & Instagram-ready!",
      features: [
        "Premium quality fabric with golden zari work",
        "Lightweight and comfortable for all-day wear",
        "Perfect for office parties and casual outings",
        "Instagram-ready design",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8df1c237be694093810d7cad742cf408?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8df1c237be694093810d7cad742cf408?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8df1c237be694093810d7cad742cf408?format=webp&width=800",
      ],
      specifications: {
        fabric: "Cotton Silk Blend",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "650 grams",
        blouse: "Included (0.8 meters)",
        care: "Machine wash gentle or dry clean",
      },
    },
    {
      id: 2,
      name: "Elegant Zigzag Pattern - Royal Collection",
      price: "₹1,500",
      originalPrice: "₹2,200",
      discount: "32% OFF",
      rating: 4.8,
      reviews: 189,
      category: "Designer Collection",
      description:
        "🔥 TRENDING NOW! Mesmerizing zigzag patterns with rich borders. These sarees are flying off our shelves! Perfect for weddings & special occasions.",
      features: [
        "Mesmerizing zigzag patterns with rich borders",
        "Perfect for weddings and special occasions",
        "High-quality craftsmanship",
        "Trending design that's flying off our shelves",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=800",
      ],
      specifications: {
        fabric: "Designer Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "700 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean recommended",
      },
    },
    {
      id: 3,
      name: "Geometric Diamond Print - Contemporary Style",
      price: "₹1,500",
      originalPrice: "₹2,300",
      discount: "35% OFF",
      rating: 4.7,
      reviews: 156,
      category: "Contemporary Collection",
      description:
        "💎 STUNNING! Modern geometric patterns that make you stand out. Easy to drape, comfortable fabric. Perfect for young professionals & college events!",
      features: [
        "Modern geometric diamond patterns",
        "Easy to drape and comfortable fabric",
        "Perfect for young professionals",
        "Ideal for college events and casual wear",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fef043fbc4bde4bbd84730e9ff0f5f72b?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fef043fbc4bde4bbd84730e9ff0f5f72b?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fef043fbc4bde4bbd84730e9ff0f5f72b?format=webp&width=800",
      ],
      specifications: {
        fabric: "Cotton Blend",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "600 grams",
        blouse: "Included (0.8 meters)",
        care: "Machine wash or dry clean",
      },
    },
    {
      id: 4,
      name: "Luxury Silk Collection with Golden Border",
      price: "₹1,500",
      originalPrice: "₹2,800",
      discount: "46% OFF",
      rating: 4.9,
      reviews: 298,
      category: "Silk Sarees",
      description:
        "👑 ROYAL ELEGANCE! Premium silk with intricate golden borders. Feel like a queen at every function. Limited stock - grab yours before it's gone!",
      features: [
        "Premium luxury silk fabric",
        "Intricate golden border work",
        "Royal elegance for special occasions",
        "Limited stock availability",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=800",
      ],
      specifications: {
        fabric: "Pure Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "800 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean only",
      },
    },
    {
      id: 5,
      name: "Vibrant Feather Print - Artistic Collection",
      price: "₹1,500",
      originalPrice: "₹2,400",
      discount: "38% OFF",
      rating: 4.8,
      reviews: 167,
      category: "Printed Collection",
      description:
        "🦚 ARTISTIC BEAUTY! Stunning feather motifs that symbolize grace & freedom. Perfect conversation starter at any gathering. Unique & eye-catching!",
      features: [
        "Stunning feather motifs design",
        "Symbolizes grace and freedom",
        "Perfect conversation starter",
        "Unique and eye-catching patterns",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F9a66ca2601f54523927dc3d6b74dc52c?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F9a66ca2601f54523927dc3d6b74dc52c?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F9a66ca2601f54523927dc3d6b74dc52c?format=webp&width=800",
      ],
      specifications: {
        fabric: "Art Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "650 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean recommended",
      },
    },
  ];

  // Find the current product or default to first product
  const product =
    products.find((p) => p.id === parseInt(id || "1")) || products[0];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely stunning saree! The quality is exceptional and the colors are vibrant. Perfect for my sister's wedding.",
      verified: true,
    },
    {
      id: 2,
      name: "Meera Patel",
      rating: 5,
      date: "1 month ago",
      comment:
        "Beautiful craftsmanship and fast delivery. The saree looks exactly like the pictures. Highly recommend!",
      verified: true,
    },
    {
      id: 3,
      name: "Anjali Reddy",
      rating: 4,
      date: "2 months ago",
      comment:
        "Good quality saree but the blouse piece could be a bit longer. Overall satisfied with the purchase.",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-saree-deep-red">
            Home
          </Link>
          <span>/</span>
          <Link to="/#products-section" className="hover:text-saree-deep-red">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? "border-saree-gold"
                      : "border-transparent hover:border-saree-gold/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-serif font-bold mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-saree-gold text-saree-gold" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold text-saree-deep-red">
                  {product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
                <Badge variant="destructive" className="bg-saree-coral">
                  {product.discount}
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-saree-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Order Now Button - Green WhatsApp Style */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                onClick={() =>
                  sendQuickBuy({
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    image: product.images[selectedImage],
                  })
                }
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order Now via WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-saree-gold text-saree-deep-red hover:bg-saree-gold/10 py-4"
                onClick={sendGeneralInquiry}
              >
                Ask Questions via WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Truck className="w-6 h-6 text-saree-gold mx-auto mb-2" />
                <div className="text-xs font-semibold">Free Shipping</div>
                <div className="text-xs text-muted-foreground">
                  Above ₹2,999
                </div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-saree-emerald mx-auto mb-2" />
                <div className="text-xs font-semibold">Secure Payment</div>
                <div className="text-xs text-muted-foreground">100% Safe</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-saree-coral mx-auto mb-2" />
                <div className="text-xs font-semibold">Easy Returns</div>
                <div className="text-xs text-muted-foreground">7 Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({product.reviews})
              </TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-border/50"
                        >
                          <span className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold">{review.name}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-saree-gold text-saree-gold"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">
                      Care Instructions for Your Saree
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Check fabric label for specific care instructions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Store in a cool, dry place away from direct sunlight
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Use muslin cloth or tissue paper for storage
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Avoid contact with perfumes, deodorants, and chemicals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Iron on low heat with a cloth layer if needed
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
