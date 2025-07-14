import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Star, MessageCircle, ArrowLeft, Search, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);
  const { sendQuickBuy } = useWhatsApp();

  // All products data for searching
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
      colors: ["golden", "yellow", "cream"],
      description:
        "EXCLUSIVE! Golden zari stripes that catch every eye! Perfect for office parties, casual outings & festive occasions. Lightweight, comfortable & Instagram-ready!",
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
      colors: ["blue", "white", "multicolor"],
      description:
        "TRENDING NOW! Mesmerizing zigzag patterns with rich borders. These sarees are flying off our shelves! Perfect for weddings & special occasions.",
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
      colors: ["black", "white", "geometric"],
      description:
        "STUNNING! Modern geometric patterns that make you stand out. Easy to drape, comfortable fabric. Perfect for young professionals & college events!",
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
      colors: ["red", "golden", "maroon"],
      description:
        "ROYAL ELEGANCE! Premium silk with intricate golden borders. Feel like a queen at every function. Limited stock - grab yours before it's gone!",
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
      colors: ["green", "blue", "multicolor"],
      description:
        "ARTISTIC BEAUTY! Stunning feather motifs that symbolize grace & freedom. Perfect conversation starter at any gathering. Unique & eye-catching!",
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
      colors: ["orange", "red", "traditional"],
      description:
        "MODERN FUSION! Traditional paisley with contemporary twist. Perfect blend of classic & trendy. Ideal for office parties & casual meetups!",
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
      colors: ["green", "natural", "earthy"],
      description:
        "NATURE INSPIRED! Beautiful leaf motifs in earthy tones. Connect with nature while looking absolutely gorgeous. Perfect for eco-conscious fashionistas!",
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
      colors: ["golden", "black", "lace"],
      description:
        "PARTY PERFECT! Luxurious golden lace borders that shimmer under lights. Be the center of attention at every celebration. Premium quality guarantee!",
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
      colors: ["multicolor", "traditional", "heritage"],
      description:
        "HERITAGE PRIDE! Authentic Patola-inspired patterns straight from Gujarat's textile tradition. Own a piece of Indian heritage at unbeatable price!",
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
      colors: ["purple", "golden", "royal"],
      description:
        "SILK LUXURY! Pure silk with golden borders that drape beautifully. Feel the difference of premium quality. Perfect for weddings & special occasions!",
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
      colors: ["pink", "vibrant", "traditional"],
      description:
        "AUTHENTIC BANDHANI! Hand-tied traditional patterns in vibrant colors. Straight from Rajasthan's royal textile heritage. Limited edition collection!",
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
      colors: ["pink", "floral", "fresh"],
      description:
        "FRESH & FEMININE! Beautiful floral prints that never go out of style. Light, breezy, and perfect for daily wear, office, or casual outings!",
    },
  ];

  // Search function
  const searchProducts = (searchTerm: string) => {
    if (!searchTerm.trim()) return allProducts;

    const searchTermLower = searchTerm.toLowerCase();
    return allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTermLower) ||
        product.description.toLowerCase().includes(searchTermLower) ||
        product.category.toLowerCase().includes(searchTermLower) ||
        product.colors.some((color) =>
          color.toLowerCase().includes(searchTermLower),
        )
      );
    });
  };

  const [filteredProducts, setFilteredProducts] = useState(
    searchProducts(query),
  );

  useEffect(() => {
    setFilteredProducts(searchProducts(query));
    setSearchTerm(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams();
    if (searchTerm.trim()) {
      newSearchParams.set("q", searchTerm.trim());
    }
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams}`,
    );
    setFilteredProducts(searchProducts(searchTerm));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Search Results
          </h1>
          {query && (
            <p className="text-lg text-muted-foreground">
              {filteredProducts.length} results found for "{query}"
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, description, or color..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-saree-gold/30 focus:border-saree-gold"
              />
            </div>
            <Button
              type="submit"
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                onClick={() =>
                  (window.location.href = `/product/${product.id}`)
                }
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
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
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
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">No results found</h2>
            <p className="text-muted-foreground mb-6">
              Try searching with different keywords or browse our collections
            </p>
            <Button
              asChild
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              <Link to="/#products-section">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
