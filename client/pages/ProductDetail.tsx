import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  MessageCircle,
  Plus,
  Minus,
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
  const [quantity, setQuantity] = useState(1);
  const { sendQuickBuy, sendGeneralInquiry } = useWhatsApp();

  // Mock product data - in real app, this would come from API/database
  const product = {
    id: 1,
    name: "Royal Banarasi Silk Saree",
    price: "₹8,999",
    originalPrice: "₹12,999",
    discount: "31% OFF",
    rating: 4.8,
    reviews: 127,
    category: "Silk Sarees",
    description:
      "Exquisite handwoven Banarasi silk saree with intricate zari work and traditional motifs. Perfect for weddings and special occasions.",
    features: [
      "100% Pure Silk",
      "Handwoven by master craftsmen",
      "Intricate zari work",
      "Traditional motifs",
      "Comes with matching blouse piece",
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    specifications: {
      fabric: "Pure Silk",
      length: "6.5 meters",
      width: "1.2 meters",
      weight: "800 grams",
      blouse: "Included (0.8 meters)",
      care: "Dry clean only",
    },
  };

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
          <Link to="/silk-sarees" className="hover:text-saree-deep-red">
            Silk Sarees
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
            <div className="grid grid-cols-4 gap-2">
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

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-saree-deep-red hover:bg-saree-deep-red/90"
                  onClick={() =>
                    sendQuickBuy({
                      name: product.name,
                      price: product.price,
                      category: product.category,
                      image: product.images[selectedImage],
                    })
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
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
                      Care Instructions for Silk Sarees
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-saree-gold rounded-full mr-3 mt-2" />
                        <span>
                          Dry clean only to preserve the silk and zari work
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
