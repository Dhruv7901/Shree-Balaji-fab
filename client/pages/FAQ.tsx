import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const { sendGeneralInquiry } = useWhatsApp();

  const faqCategories = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "You can place an order by clicking 'Add to Cart' on any product page, then proceeding to checkout via WhatsApp. Our team will confirm your order and guide you through the payment process.",
        },
        {
          question: "What are the shipping charges?",
          answer:
            "We offer free shipping on orders above ₹2,999. For orders below this amount, shipping charges are ₹99 across India.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Delivery typically takes 5-7 business days for metro cities and 7-10 business days for other locations. We'll provide tracking details once your order is shipped.",
        },
        {
          question: "Do you deliver internationally?",
          answer:
            "Currently, we only deliver within India. We're working on expanding our shipping to international locations soon.",
        },
        {
          question: "Can I cancel my order?",
          answer:
            "Yes, you can cancel your order before it's shipped. Please contact us immediately on WhatsApp at +91 9426617601 to cancel your order.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 7-day return policy from the date of delivery. Items must be unused, in original condition with tags attached, and in the original packaging.",
        },
        {
          question: "How do I return an item?",
          answer:
            "Contact us on WhatsApp within 7 days of delivery. We'll provide you with return instructions and arrange for pickup of the item.",
        },
        {
          question: "Can I exchange a saree for a different design?",
          answer:
            "Yes, exchanges are possible within 7 days of delivery. The item must be in original condition. Exchange is subject to availability of the desired product.",
        },
        {
          question: "Who pays for return shipping?",
          answer:
            "If the return is due to our error (wrong item, damaged product), we'll cover the return shipping. For other returns, customer bears the return shipping cost.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.",
        },
      ],
    },
    {
      category: "Products & Quality",
      questions: [
        {
          question: "Are your sarees authentic and original?",
          answer:
            "Yes, all our sarees are 100% authentic and sourced directly from verified manufacturers and weavers. We guarantee the quality and authenticity of every product.",
        },
        {
          question: "Do sarees come with blouse pieces?",
          answer:
            "Most of our sarees come with matching unstitched blouse pieces. This information is clearly mentioned in the product description.",
        },
        {
          question: "What fabrics do you offer?",
          answer:
            "We offer a wide range of fabrics including silk, cotton, georgette, chiffon, crepe, and traditional handloom varieties. Each product page specifies the fabric type.",
        },
        {
          question: "How do I care for my sarees?",
          answer:
            "Care instructions vary by fabric. Generally, silk sarees should be dry cleaned, while cotton can be hand washed. Detailed care instructions are provided with each saree.",
        },
        {
          question: "Are the colors in photos accurate?",
          answer:
            "We strive to show accurate colors, but they may vary slightly due to screen settings and lighting. If you're unsure about color, please contact us for additional photos.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept UPI, bank transfers, credit/debit cards, and cash on delivery (where available). Payment can be completed after order confirmation on WhatsApp.",
        },
        {
          question: "Are your prices inclusive of taxes?",
          answer:
            "The prices displayed include all applicable taxes. There are no hidden charges except shipping (if applicable).",
        },
        {
          question: "Do you offer discounts or deals?",
          answer:
            "Yes, we regularly offer discounts and special deals. Follow us for updates or check our homepage for current offers. All our products are already priced competitively.",
        },
        {
          question: "Can I get a bulk discount?",
          answer:
            "Yes, we offer attractive bulk discounts for orders of 10 or more sarees. Please contact us on WhatsApp for bulk pricing.",
        },
        {
          question: "Is cash on delivery available?",
          answer:
            "Cash on delivery is available in select cities. This option will be shown during checkout if available for your location.",
        },
      ],
    },
    {
      category: "Size & Fit",
      questions: [
        {
          question: "What is the standard saree length?",
          answer:
            "Our sarees are typically 6.5 meters long with a 0.8-meter blouse piece. Some designer sarees may vary slightly, which is mentioned in the product description.",
        },
        {
          question: "Do you provide stitching services?",
          answer:
            "We provide unstitched blouse pieces. For stitching services, please visit our physical store in Surat or contact local tailors in your area.",
        },
        {
          question: "Can I get custom measurements for blouses?",
          answer:
            "Currently, we don't offer custom stitching online. However, you can visit our Surat store for custom fitting and stitching services.",
        },
        {
          question: "What if the blouse piece is too small?",
          answer:
            "Our blouse pieces are generously sized to accommodate most fittings. If you face any issues, please contact us immediately and we'll find a solution.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "How do I track my order?",
          answer:
            "Once your order is shipped, we'll send you tracking details via WhatsApp and SMS. You can track your package using the provided tracking number.",
        },
        {
          question: "I'm having trouble with the website. What should I do?",
          answer:
            "If you're experiencing technical issues, please try refreshing the page or clearing your browser cache. If the problem persists, contact us on WhatsApp for immediate assistance.",
        },
        {
          question: "How do I update my delivery address?",
          answer:
            "You can update your delivery address before the order is shipped by contacting us on WhatsApp. Once shipped, address changes are not possible.",
        },
        {
          question: "Can I change my order after placing it?",
          answer:
            "Order modifications are possible only before the order is processed and shipped. Please contact us immediately on WhatsApp if you need to make changes.",
        },
      ],
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-saree-warm-cream via-secondary to-saree-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Frequently Asked{" "}
            <span className="saree-text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about our sarees, shipping,
            returns, and more. Can't find what you're looking for? We're here to
            help!
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-center"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                {category.questions.length > 0 && (
                  <>
                    <h2 className="text-2xl font-serif font-bold mb-6 text-saree-deep-red">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => {
                        const globalIndex = categoryIndex * 100 + questionIndex;
                        const isExpanded = expandedItems.includes(globalIndex);

                        return (
                          <Card key={questionIndex}>
                            <CardContent className="p-0">
                              <button
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                                onClick={() => toggleExpanded(globalIndex)}
                              >
                                <span className="font-semibold text-lg pr-4">
                                  {faq.question}
                                </span>
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                              </button>
                              {isExpanded && (
                                <div className="px-6 pb-6">
                                  <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            ))}

            {searchTerm &&
              filteredFAQs.every(
                (category) => category.questions.length === 0,
              ) && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">
                    No results found for "{searchTerm}"
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try different keywords or contact us directly for
                    assistance.
                  </p>
                  <Button
                    onClick={() => setSearchTerm("")}
                    variant="outline"
                    className="mr-4"
                  >
                    Clear Search
                  </Button>
                  <Button
                    onClick={sendGeneralInquiry}
                    className="bg-saree-deep-red hover:bg-saree-deep-red/90"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our customer support team is here to help you with any questions
              or concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-saree-deep-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-saree-deep-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help and personalized assistance
                </p>
                <Button
                  onClick={sendGeneralInquiry}
                  className="bg-saree-deep-red hover:bg-saree-deep-red/90"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-saree-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-saree-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our support team
                </p>
                <Button variant="outline">+91 9426617601</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-saree-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-saree-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us detailed questions or feedback
                </p>
                <Button variant="outline">info@balajifab.com</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
