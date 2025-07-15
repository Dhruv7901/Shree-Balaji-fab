import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  MessageCircle,
  ArrowLeft,
  Filter,
  SortAsc,
  Grid3X3,
  List,
  Search,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const AllProducts = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { sendQuickBuy, sendCustomInquiry } = useWhatsApp();

  // Complete product data
  const allProducts = [
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

  // Get unique categories
  const categories = ["all", ...new Set(allProducts.map((p) => p.category))];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesCategory =
        filterCategory === "all" || product.category === filterCategory;
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return (
            parseInt(a.price.replace("₹", "").replace(",", "")) -
            parseInt(b.price.replace("₹", "").replace(",", ""))
          );
        case "price-high":
          return (
            parseInt(b.price.replace("₹", "").replace(",", "")) -
            parseInt(a.price.replace("₹", "").replace(",", ""))
          );
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleAskForMoreProducts = () => {
    const message = `Hi! I would like to see more products from your collection.

🛍️ *MORE PRODUCTS REQUEST*
👀 I'm interested in exploring additional designs beyond what's currently displayed on your website.

Could you please share:
✨ Latest arrivals
🎨 Seasonal collections
💎 Premium/exclusive pieces
🏷️ Custom designs

Looking forward to seeing more beautiful sarees!

Thank you!`;

    sendCustomInquiry(message);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold text-saree-deep-red">
              All Products
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover our complete collection of {allProducts.length} beautiful
              sarees
            </p>
          </div>

          {/* Ask for More Products Button */}
          <Button
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
            onClick={handleAskForMoreProducts}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Ask for More Products
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex-1"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex-1"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
          {searchTerm && (
            <p className="text-sm text-saree-deep-red">
              Search results for "{searchTerm}"
            </p>
          )}
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "grid grid-cols-1 gap-4"
            }
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className={`group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div
                      className={`relative ${
                        viewMode === "list" ? "w-48 h-48" : "aspect-square"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                          viewMode === "list" ? "rounded-l-lg" : ""
                        }`}
                      />
                      <Badge
                        variant="destructive"
                        className="absolute top-3 left-3 bg-saree-coral"
                      >
                        {product.discount}
                      </Badge>
                    </div>
                    <div
                      className={`p-4 ${
                        viewMode === "list" ? "flex-1 flex flex-col" : ""
                      }`}
                    >
                      <Badge variant="outline" className="text-xs mb-2 w-fit">
                        {product.category}
                      </Badge>
                      <h3
                        className={`font-semibold group-hover:text-saree-deep-red transition-colors ${
                          viewMode === "list"
                            ? "text-xl mb-2"
                            : "text-lg mb-2 line-clamp-2"
                        }`}
                      >
                        {product.name}
                      </h3>
                      {viewMode === "list" && (
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-2">
                          <Star className="w-4 h-4 fill-saree-gold text-saree-gold" />
                          <span className="text-sm ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div
                        className={`flex items-center ${
                          viewMode === "list" ? "justify-between" : "mb-3"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            className={`font-bold text-saree-deep-red ${
                              viewMode === "list" ? "text-xl" : "text-lg"
                            }`}
                          >
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div
                    className={`p-4 ${
                      viewMode === "list" ? "pt-0 self-end" : "pt-0"
                    }`}
                  >
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
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold mb-4">No products found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("all");
              }}
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-saree-warm-cream to-saree-gold/20 rounded-lg p-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Didn't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We have many more designs and can create custom pieces just for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleAskForMoreProducts}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Request More Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
              asChild
            >
              <Link to="/contact">Contact Us Directly</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
