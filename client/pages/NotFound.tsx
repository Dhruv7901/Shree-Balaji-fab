import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import Navigation from "../components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="saree-gradient w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. Perhaps you'd like
            to explore our beautiful collection of sarees instead?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-saree-deep-red hover:bg-saree-deep-red/90"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-saree-gold text-saree-deep-red hover:bg-saree-gold/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
