import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the Balaji Fab website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms and conditions may be updated periodically without prior notice. Your continued use of the website constitutes acceptance of any changes.",
      ],
    },
    {
      title: "2. Products and Services",
      content: [
        "Balaji Fab specializes in traditional Indian sarees and related ethnic wear.",
        "All product descriptions, images, and prices are provided in good faith and are subject to change without notice.",
        "We reserve the right to discontinue any product at any time without prior notice.",
        "Product availability is subject to stock and confirmation will be provided after order placement.",
      ],
    },
    {
      title: "3. Ordering and Payment",
      content: [
        "Orders can be placed through our website or WhatsApp commerce platform.",
        "All orders are subject to acceptance and availability confirmation.",
        "Prices are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise.",
        "We accept various payment methods including UPI, bank transfers, credit/debit cards, and cash on delivery (where available).",
        "Full payment must be received before order processing and shipping.",
      ],
    },
    {
      title: "4. Shipping and Delivery",
      content: [
        "We ship across India with delivery times varying based on location.",
        "Free shipping is provided on orders above ₹2,999. Orders below this amount incur a shipping charge of ₹99.",
        "Delivery timeframes are estimates and may vary due to factors beyond our control.",
        "Risk of loss and title for products pass to you upon delivery to the carrier.",
        "We are not responsible for delays or damages caused by shipping carriers.",
      ],
    },
    {
      title: "5. Returns and Exchanges",
      content: [
        "We offer a 7-day return and exchange policy from the date of delivery.",
        "Items must be in original, unused condition with all tags and packaging intact.",
        "Custom-made or altered items cannot be returned or exchanged.",
        "Return shipping costs are borne by the customer unless the return is due to our error.",
        "Refunds will be processed within 5-7 business days after receiving and inspecting returned items.",
      ],
    },
    {
      title: "6. Product Quality and Authenticity",
      content: [
        "All products sold are authentic and sourced from verified manufacturers and weavers.",
        "We guarantee the quality of our products under normal use and care.",
        "Color variations may occur due to photography, monitor settings, or dye lot differences.",
        "Care instructions are provided with each product and must be followed to maintain warranty coverage.",
      ],
    },
    {
      title: "7. Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, images, and software, is the property of Balaji Fab or its suppliers.",
        "You may not reproduce, distribute, or create derivative works from our content without written permission.",
        "Product images and descriptions are proprietary and protected by copyright laws.",
        "Unauthorized use of our intellectual property may result in legal action.",
      ],
    },
    {
      title: "8. User Conduct",
      content: [
        "You agree to use our website and services only for lawful purposes.",
        "You will not engage in any activity that interferes with or disrupts our services.",
        "Providing false or misleading information is prohibited.",
        "You are responsible for maintaining the confidentiality of your account information.",
      ],
    },
    {
      title: "9. Privacy and Data Protection",
      content: [
        "We collect and use personal information in accordance with our Privacy Policy.",
        "Your personal information will be used solely for order processing, customer service, and marketing (with consent).",
        "We implement appropriate security measures to protect your personal information.",
        "We do not sell or share your personal information with third parties except as necessary for order fulfillment.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      content: [
        "Balaji Fab shall not be liable for any indirect, incidental, special, or consequential damages.",
        "Our total liability for any claim arising from these terms shall not exceed the amount paid for the specific product in question.",
        "We are not responsible for any damages resulting from use or inability to use our products or services.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
    {
      title: "11. Force Majeure",
      content: [
        "We shall not be liable for any failure to perform due to circumstances beyond our reasonable control.",
        "This includes but is not limited to acts of God, natural disasters, government actions, strikes, or supply chain disruptions.",
        "In such events, we will make reasonable efforts to notify affected customers and minimize disruption.",
      ],
    },
    {
      title: "12. Dispute Resolution",
      content: [
        "Any disputes arising from these terms shall be resolved through good faith negotiation.",
        "If negotiation fails, disputes shall be subject to the jurisdiction of courts in Surat, Gujarat, India.",
        "Indian law shall govern these terms and any disputes arising therefrom.",
        "Both parties agree to attempt mediation before pursuing litigation.",
      ],
    },
    {
      title: "13. Contact Information",
      content: [
        "For questions about these terms, please contact us:",
        "Address: Abhishek Market Ring Rd, Sahara Darwaja, New Textile Market, Surat, Gujarat 395002",
        "Phone: +91 9426617601",
        "Email: info@balajifab.com",
        "WhatsApp: +91 9426617601",
      ],
    },
    {
      title: "14. Severability",
      content: [
        "If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.",
        "Invalid provisions shall be replaced with enforceable provisions that most closely reflect the original intent.",
      ],
    },
    {
      title: "15. Entire Agreement",
      content: [
        "These terms constitute the entire agreement between you and Balaji Fab regarding use of our website and services.",
        "These terms supersede all prior or contemporaneous communications and proposals.",
        "Any modifications must be made in writing and agreed upon by both parties.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Please read these terms and conditions carefully before using our
            website or purchasing our products. By using our services, you agree
            to these terms.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p>
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-saree-deep-red">
                Welcome to Balaji Fab
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of the
                Balaji Fab website and purchase of our products. Balaji Fab is a
                traditional saree retailer based in Surat, Gujarat, India,
                specializing in authentic Indian ethnic wear. By accessing our
                website or making a purchase, you agree to be bound by these
                Terms.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-4 text-saree-deep-red">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4 text-saree-deep-red">
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions,
                please don't hesitate to contact us. We're here to help clarify
                any concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-saree-deep-red hover:bg-saree-deep-red/90">
                  Contact Us on WhatsApp
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Visit Contact Page</Link>
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Balaji Fab</strong> - Your trusted partner for
                  authentic traditional sarees
                  <br />
                  Abhishek Market Ring Rd, Sahara Darwaja, New Textile Market,
                  Surat, Gujarat 395002
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
