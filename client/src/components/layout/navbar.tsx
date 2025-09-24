import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import demandFloLogo from "@assets/demandflo_logo_400x90_1758688046797.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/roi-calculator", label: "ROI Calculator" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur shadow-lg" : "nav-blur"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
            <img 
              src={demandFloLogo} 
              alt="Demand Flo"
              className="h-8 md:h-10 lg:h-12 w-auto -ml-6 -mr-6 -mt-1 -mb-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location === item.href ? "text-primary" : ""
                }`}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="gradient-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid="button-book-consultation"
            >
              <a href="https://calendly.com/samueljong/30min" target="_blank" rel="noopener noreferrer">
                Get Your First Appointments
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        location === item.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="gradient-primary text-primary-foreground mt-4 w-full"
                    data-testid="button-mobile-book-consultation"
                  >
                    <a href="https://calendly.com/samueljong/30min" target="_blank" rel="noopener noreferrer">
                      Get Your First Appointments
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
