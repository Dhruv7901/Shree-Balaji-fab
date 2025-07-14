import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  MessageCircle,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import Navigation from "../components/Navigation";
import { useCart } from "../contexts/CartContext";
import { useWhatsApp } from "../lib/whatsapp";

const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart, getItemPrice } =
    useCart();
  const { sendCustomInquiry } = useWhatsApp();

  const handleWhatsAppCheckout = () => {
    if (state.items.length === 0) return;

    const orderDetails = state.items
      .map(
        (item) =>
          `• ${item.name}\n  Quantity: ${item.quantity}\n  Price: ${item.price} each\n  Subtotal: ₹${(getItemPrice(item.price) * item.quantity).toLocaleString()}`,
      )
      .join("\n\n");

    const shippingCost = state.total >= 2999 ? 0 : 99;
    const tax = Math.round(state.total * 0.05); // 5% tax
    const finalTotal = state.total + shippingCost + tax;

    const message = `🛍️ *ORDER DETAILS - BALAJI FAB*

${orderDetails}

📊 *PRICE BREAKDOWN:*
Subtotal: ₹${state.total.toLocaleString()}
Tax (5%): ₹${tax.toLocaleString()}
Shipping: ${shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
*Total Amount: ₹${finalTotal.toLocaleString()}*

Please confirm this order and provide:
📍 Delivery address
📞 Contact number
💳 Preferred payment method

Thank you for choosing Balaji Fab! 🙏`;

    sendCustomInquiry(message);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-bold mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any beautiful sarees to your cart
              yet. Explore our stunning collection!
            </p>
            <Button
              asChild
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const shippingCost = state.total >= 2999 ? 0 : 99;
  const tax = Math.round(state.total * 0.05); // 5% tax
  const finalTotal = state.total + shippingCost + tax;

  // Related products (you can customize this logic)
  const relatedProducts = [
    {
      id: 101,
      name: "Elegant Silk Saree",
      price: "₹1,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F8df1c237be694093810d7cad742cf408?format=webp&width=400",
      category: "Silk Collection",
    },
    {
      id: 102,
      name: "Designer Georgette",
      price: "₹1,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F87c1fd5d8ed04adf84bcc00d2b0c5743?format=webp&width=400",
      category: "Designer Collection",
    },
    {
      id: 103,
      name: "Traditional Print",
      price: "₹1,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2Fef043fbc4bde4bbd84730e9ff0f5f72b?format=webp&width=400",
      category: "Traditional Collection",
    },
    {
      id: 104,
      name: "Floral Paradise",
      price: "₹1,500",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2955f573b5cf4d4896c5aa8d99cf667c%2F2cf060907eeb4d7aa3b349b487ae89b7?format=webp&width=400",
      category: "Floral Collection",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {state.itemCount} {state.itemCount === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-saree-deep-red">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive/90"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-bold mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>₹{state.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span
                      className={shippingCost === 0 ? "text-green-600" : ""}
                    >
                      {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                    </span>
                  </div>
                  {state.total < 2999 && (
                    <p className="text-xs text-muted-foreground">
                      Add ₹{(2999 - state.total).toLocaleString()} more for free
                      shipping!
                    </p>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    className="w-full bg-saree-deep-red hover:bg-saree-deep-red/90"
                    onClick={handleWhatsAppCheckout}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Proceed to WhatsApp Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-saree-gold" />
                    <div>
                      <div className="text-sm font-semibold">Free Shipping</div>
                      <div className="text-xs text-muted-foreground">
                        On orders above ₹2,999
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-saree-emerald" />
                    <div>
                      <div className="text-sm font-semibold">
                        Secure Payment
                      </div>
                      <div className="text-xs text-muted-foreground">
                        100% secure transactions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="w-5 h-5 text-saree-coral" />
                    <div>
                      <div className="text-sm font-semibold">Easy Returns</div>
                      <div className="text-xs text-muted-foreground">
                        7-day return policy
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-saree-deep-red">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-saree-deep-red hover:bg-saree-deep-red/90"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
