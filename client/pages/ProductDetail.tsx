import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Star,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  MessageCircle,
  ArrowLeft,
  Palette,
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
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const { sendQuickBuy, sendGeneralInquiry } = useWhatsApp();

  // Complete product data with all products from homepage
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
      colors: [
        { name: "Golden Yellow", code: "#FFD700", available: true },
        { name: "Cream", code: "#F5F5DC", available: true },
        { name: "Light Gold", code: "#F0E68C", available: false },
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
      colors: [
        { name: "Royal Blue", code: "#4169E1", available: true },
        { name: "Navy Blue", code: "#000080", available: true },
        { name: "Sky Blue", code: "#87CEEB", available: true },
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
      colors: [
        { name: "Black", code: "#000000", available: true },
        { name: "White", code: "#FFFFFF", available: true },
        { name: "Gray", code: "#808080", available: false },
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
      colors: [
        { name: "Deep Red", code: "#8B0000", available: true },
        { name: "Maroon", code: "#800000", available: true },
        { name: "Burgundy", code: "#900020", available: true },
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
      colors: [
        { name: "Emerald Green", code: "#50C878", available: true },
        { name: "Teal Blue", code: "#008080", available: true },
        { name: "Forest Green", code: "#228B22", available: false },
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
    {
      id: 6,
      name: "Abstract Paisley - Modern Traditional Fusion",
      price: "₹1,500",
      originalPrice: "₹2,100",
      discount: "29% OFF",
      rating: 4.7,
      reviews: 134,
      category: "Fusion Collection",
      description:
        "🎨 MODERN FUSION! Traditional paisley with contemporary twist. Perfect blend of classic & trendy. Ideal for office parties & casual meetups!",
      features: [
        "Traditional paisley with contemporary twist",
        "Perfect blend of classic and trendy",
        "Ideal for office parties",
        "Casual meetup appropriate",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fb36e7a5d7d6346669a8ada54c6fc4636?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fb36e7a5d7d6346669a8ada54c6fc4636?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fb36e7a5d7d6346669a8ada54c6fc4636?format=webp&width=800",
      ],
      colors: [
        { name: "Orange", code: "#FFA500", available: true },
        { name: "Coral", code: "#FF7F50", available: true },
        { name: "Peach", code: "#FFCBA4", available: true },
      ],
      specifications: {
        fabric: "Cotton Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "680 grams",
        blouse: "Included (0.8 meters)",
        care: "Machine wash or dry clean",
      },
    },
    {
      id: 7,
      name: "Nature's Leaf Collection - Organic Charm",
      price: "₹1,500",
      originalPrice: "₹2,600",
      discount: "42% OFF",
      rating: 4.8,
      reviews: 201,
      category: "Nature Collection",
      description:
        "🍃 NATURE INSPIRED! Beautiful leaf motifs in earthy tones. Connect with nature while looking absolutely gorgeous. Perfect for eco-conscious fashionistas!",
      features: [
        "Beautiful leaf motifs in earthy tones",
        "Nature-inspired design",
        "Eco-conscious fashion choice",
        "Perfect for environmentally aware customers",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F7ee7684723684e5da5e63b1c2ada56ae?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F7ee7684723684e5da5e63b1c2ada56ae?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F7ee7684723684e5da5e63b1c2ada56ae?format=webp&width=800",
      ],
      colors: [
        { name: "Olive Green", code: "#808000", available: true },
        { name: "Earth Brown", code: "#8B4513", available: true },
        { name: "Natural Beige", code: "#F5F5DC", available: true },
      ],
      specifications: {
        fabric: "Organic Cotton",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "620 grams",
        blouse: "Included (0.8 meters)",
        care: "Eco-friendly wash recommended",
      },
    },
    {
      id: 8,
      name: "Golden Lace Border Collection - Party Special",
      price: "₹1,500",
      originalPrice: "₹2,700",
      discount: "44% OFF",
      rating: 4.9,
      reviews: 276,
      category: "Party Wear",
      description:
        "✨ PARTY PERFECT! Luxurious golden lace borders that shimmer under lights. Be the center of attention at every celebration. Premium quality guarantee!",
      features: [
        "Luxurious golden lace borders",
        "Shimmers beautifully under lights",
        "Perfect for parties and celebrations",
        "Premium quality guarantee",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8ada929b9c964af6b7146d68984dcc3a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8ada929b9c964af6b7146d68984dcc3a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8ada929b9c964af6b7146d68984dcc3a?format=webp&width=800",
      ],
      colors: [
        { name: "Golden Black", code: "#1C1C1C", available: true },
        { name: "Midnight Blue", code: "#191970", available: true },
        { name: "Deep Purple", code: "#483D8B", available: false },
      ],
      specifications: {
        fabric: "Silk with Lace",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "750 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean only",
      },
    },
    {
      id: 9,
      name: "Traditional Patola Pattern - Heritage Collection",
      price: "₹1,500",
      originalPrice: "₹3,000",
      discount: "50% OFF",
      rating: 4.9,
      reviews: 312,
      category: "Traditional Collection",
      description:
        "🏛️ HERITAGE PRIDE! Authentic Patola-inspired patterns straight from Gujarat's textile tradition. Own a piece of Indian heritage at unbeatable price!",
      features: [
        "Authentic Patola-inspired patterns",
        "Gujarat's textile tradition",
        "Heritage and cultural significance",
        "Unbeatable price for quality",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2275342944014037a1baab85cc26729a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2275342944014037a1baab85cc26729a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2275342944014037a1baab85cc26729a?format=webp&width=800",
      ],
      colors: [
        { name: "Traditional Red", code: "#CC0000", available: true },
        { name: "Heritage Blue", code: "#003366", available: true },
        { name: "Royal Purple", code: "#663399", available: true },
      ],
      specifications: {
        fabric: "Traditional Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "780 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean with heritage care",
      },
    },
    {
      id: 10,
      name: "Royal Silk Dupatta Collection - Premium Quality",
      price: "₹1,500",
      originalPrice: "₹2,500",
      discount: "40% OFF",
      rating: 4.8,
      reviews: 189,
      category: "Silk Collection",
      description:
        "👸 SILK LUXURY! Pure silk with golden borders that drape beautifully. Feel the difference of premium quality. Perfect for weddings & special occasions!",
      features: [
        "Pure silk with golden borders",
        "Drapes beautifully",
        "Premium quality difference",
        "Perfect for weddings",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F468ee82c93f44263be70198e10d99c5c?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F468ee82c93f44263be70198e10d99c5c?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F468ee82c93f44263be70198e10d99c5c?format=webp&width=800",
      ],
      colors: [
        { name: "Royal Purple", code: "#7851A9", available: true },
        { name: "Lavender", code: "#E6E6FA", available: true },
        { name: "Plum", code: "#DDA0DD", available: false },
      ],
      specifications: {
        fabric: "Pure Silk",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "720 grams",
        blouse: "Included (0.8 meters)",
        care: "Dry clean only",
      },
    },
    {
      id: 11,
      name: "Vibrant Bandhani - Rajasthani Elegance",
      price: "₹1,500",
      originalPrice: "₹2,300",
      discount: "35% OFF",
      rating: 4.7,
      reviews: 145,
      category: "Bandhani Collection",
      description:
        "🎯 AUTHENTIC BANDHANI! Hand-tied traditional patterns in vibrant colors. Straight from Rajasthan's royal textile heritage. Limited edition collection!",
      features: [
        "Hand-tied traditional Bandhani patterns",
        "Vibrant authentic colors",
        "Rajasthan's royal textile heritage",
        "Limited edition collection",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fbb0975b280054b3d85ee71d51ea3d52a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fbb0975b280054b3d85ee71d51ea3d52a?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fbb0975b280054b3d85ee71d51ea3d52a?format=webp&width=800",
      ],
      colors: [
        { name: "Vibrant Pink", code: "#FF69B4", available: true },
        { name: "Magenta", code: "#FF00FF", available: true },
        { name: "Hot Pink", code: "#FF1493", available: true },
      ],
      specifications: {
        fabric: "Traditional Bandhani",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "660 grams",
        blouse: "Included (0.8 meters)",
        care: "Hand wash with care",
      },
    },
    {
      id: 12,
      name: "Delicate Floral Print - Garden Fresh Collection",
      price: "₹1,500",
      originalPrice: "₹2,200",
      discount: "32% OFF",
      rating: 4.8,
      reviews: 223,
      category: "Floral Collection",
      description:
        "🌸 FRESH & FEMININE! Beautiful floral prints that never go out of style. Light, breezy, and perfect for daily wear, office, or casual outings!",
      features: [
        "Beautiful floral prints",
        "Timeless and never out of style",
        "Light and breezy fabric",
        "Perfect for daily wear and office",
        "Comes with matching blouse piece",
      ],
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F0b1c6490a16b41a889c815109d4c4894?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F0b1c6490a16b41a889c815109d4c4894?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F0b1c6490a16b41a889c815109d4c4894?format=webp&width=800",
      ],
      colors: [
        { name: "Soft Pink", code: "#FFB6C1", available: true },
        { name: "Rose", code: "#FF007F", available: true },
        { name: "Blush", code: "#FFC0CB", available: true },
      ],
      specifications: {
        fabric: "Cotton Floral",
        length: "6.5 meters",
        width: "1.2 meters",
        weight: "580 grams",
        blouse: "Included (0.8 meters)",
        care: "Machine wash gentle",
      },
    },
  ];

  // Find the current product or handle error
  const product = products.find((p) => p.id === parseInt(id || "1"));

  // If product not found, show error page
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-saree-deep-red hover:bg-saree-deep-red/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

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

  const handleOrderNow = () => {
    const selectedColorName = product.colors[selectedColor]?.name || "Default";
    sendQuickBuy({
      name: `${product.name} - ${selectedColorName}`,
      price: product.price,
      category: product.category,
      image: product.images[selectedImage],
    });
  };

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
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
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

            {/* Color Options */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Palette className="w-4 h-4 mr-2" />
                Available Colors
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    disabled={!color.available}
                    className={`relative flex items-center space-x-2 p-2 rounded-lg border-2 transition-all ${
                      selectedColor === index
                        ? "border-saree-gold"
                        : "border-gray-200 hover:border-saree-gold/50"
                    } ${!color.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="text-sm font-medium">{color.name}</span>
                    {!color.available && (
                      <span className="text-xs text-red-500">
                        (Out of Stock)
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

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

            {/* Order Now Button - Enhanced Green WhatsApp Style */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                onClick={handleOrderNow}
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
                <RotateCcw className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <div className="text-xs font-semibold">Return Policy</div>
                <div className="text-xs text-muted-foreground">No Returns</div>
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
