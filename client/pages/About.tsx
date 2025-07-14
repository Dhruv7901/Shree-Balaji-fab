import {
  Users,
  Award,
  Heart,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Navigation from "../components/Navigation";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Every saree in our collection is handpicked for its exceptional quality, craftsmanship, and authentic traditional appeal.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide personalized service and support to help you find the perfect saree for every occasion.",
    },
    {
      icon: Award,
      title: "Heritage & Tradition",
      description:
        "We celebrate India's rich textile heritage by promoting traditional weaving techniques and supporting local artisans.",
    },
    {
      icon: Star,
      title: "Affordable Luxury",
      description:
        "Beautiful sarees shouldn't break the bank. We offer premium quality at prices that make traditional elegance accessible to all.",
    },
  ];

  const team = [
    {
      name: "Dhruv Tejwani",
      role: "Founder & CEO",
      description:
        "With a passion for traditional Indian textiles and modern e-commerce, Dhruv founded Balaji Fab to make beautiful sarees accessible to everyone.",
      image: "/placeholder.svg",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Balaji Fab was established in Surat with a vision to make traditional sarees accessible online.",
    },
    {
      year: "2021",
      title: "Growth",
      description:
        "Expanded our collection to include over 500+ unique designs from various regions of India.",
    },
    {
      year: "2022",
      title: "Recognition",
      description:
        "Achieved 10,000+ happy customers and 4.9-star rating for quality and service.",
    },
    {
      year: "2023",
      title: "Innovation",
      description:
        "Launched WhatsApp commerce platform for seamless shopping experience.",
    },
    {
      year: "2024",
      title: "Expansion",
      description:
        "Continuing to grow with new collections and enhanced customer experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-saree-warm-cream via-secondary to-saree-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              About <span className="saree-text-gradient">Balaji Fab</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your trusted destination for authentic, beautiful, and affordable
              traditional sarees. We bring the elegance of Indian heritage to
              your doorstep with modern convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-saree-deep-red">
                  10,000+
                </div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-saree-deep-red">
                  500+
                </div>
                <div className="text-muted-foreground">Unique Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-saree-deep-red">
                  4.9★
                </div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Balaji Fab was born from a simple yet powerful vision: to make
                  the timeless beauty of traditional Indian sarees accessible to
                  women everywhere. Founded in the textile hub of Surat,
                  Gujarat, we understand the artistry and craftsmanship that
                  goes into every saree.
                </p>
                <p>
                  What started as a small family business has grown into a
                  trusted online destination for saree lovers across India. We
                  believe that every woman deserves to feel beautiful and
                  confident in traditional wear, regardless of her budget or
                  location.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing
                  modern technology to provide you with the best shopping
                  experience. From our WhatsApp-based customer service to our
                  carefully curated collections, everything we do is designed
                  with you in mind.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 saree-gradient opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment
              to you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-saree-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-saree-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in traditional
              wear
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-saree-deep-red text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">
                        {milestone.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Balaji Fab
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-saree-deep-red font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our sarees in person at our Surat location
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">
                      Store Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-saree-deep-red mt-1" />
                        <div>
                          <div className="font-semibold">Address</div>
                          <div className="text-muted-foreground">
                            Abhishek Market Ring Rd, Sahara Darwaja
                            <br />
                            New Textile Market, Surat, Gujarat 395002
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-saree-deep-red" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-muted-foreground">
                            +91 9426617601
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-saree-deep-red" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-muted-foreground">
                            info@balajifab.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-saree-deep-red" />
                        <div>
                          <div className="font-semibold">Store Hours</div>
                          <div className="text-muted-foreground">
                            Monday - Saturday: 10:00 AM - 9:00 PM
                            <br />
                            Sunday: 11:00 AM - 8:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">
                      Get In Touch
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Have questions about our sarees or need styling advice?
                      We're here to help! Contact us through WhatsApp for
                      instant assistance.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-saree-deep-red hover:bg-saree-deep-red/90">
                        Contact Us on WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
