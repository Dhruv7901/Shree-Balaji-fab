import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import Navigation from "../components/Navigation";
import { useWhatsApp } from "../lib/whatsapp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { sendCustomInquiry } = useWhatsApp();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `📧 *CONTACT FORM SUBMISSION*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

Please respond to this inquiry at your earliest convenience.`;

    sendCustomInquiry(message);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: [
        "Abhishek Market Ring Rd, Sahara Darwaja",
        "New Textile Market, Surat, Gujarat 395002",
      ],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9426617601"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@balajifab.com"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: [
        "Monday - Saturday: 10:00 AM - 9:00 PM",
        "Sunday: 11:00 AM - 8:00 PM",
      ],
      action: null,
    },
  ];

  const faqs = [
    {
      question: "Do you offer home delivery?",
      answer:
        "Yes, we offer home delivery across India with free shipping on orders above ₹2,999.",
    },
    {
      question: "Can I return or exchange sarees?",
      answer:
        "Yes, we have a 7-day return and exchange policy for unused items in original condition.",
    },
    {
      question: "Do you provide stitching services?",
      answer:
        "We provide unstitched blouse pieces. For stitching services, please contact our store directly.",
    },
    {
      question: "How can I check product availability?",
      answer:
        "You can check availability by contacting us on WhatsApp or calling our store directly.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-saree-warm-cream via-secondary to-saree-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Contact <span className="saree-text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you find the perfect saree. Get in touch with us
            for any questions, styling advice, or support.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible. For urgent inquiries, please contact us directly on
                WhatsApp.
              </p>

              {isSubmitted ? (
                <Card className="text-center p-8">
                  <CardContent className="p-0">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll respond to your inquiry
                      on WhatsApp shortly.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="What is this regarding?"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-saree-deep-red hover:bg-saree-deep-red/90"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Prefer to contact us directly? Here are all the ways you can
                reach us.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-saree-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-saree-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          {info.action && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-3"
                            >
                              {info.action}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* WhatsApp Quick Contact */}
                <Card className="bg-saree-deep-red text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          Quick WhatsApp Support
                        </h3>
                        <p className="text-white/90 mb-3">
                          Get instant help and personalized recommendations
                        </p>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white text-saree-deep-red hover:bg-white/90"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking
              for? Contact us directly.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Find Our Store
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Surat's textile market
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-saree-deep-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Store Location</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive map will be available soon
                </p>
                <Button className="bg-saree-deep-red hover:bg-saree-deep-red/90">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
