import { Link } from "wouter";
import { Zap, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { href: "/services", label: "Lead Generation" },
    { href: "/services", label: "Appointment Booking" },
    { href: "/services", label: "Growth Analytics" },
    { href: "/services", label: "Campaign Management" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">DemandFlo</span>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming businesses through premium lead generation and appointment booking solutions. 
              Scale your revenue with proven strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-service-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-company-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            © 2024 DemandFlo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
