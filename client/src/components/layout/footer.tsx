import { Link } from "wouter";
import { Zap, Linkedin } from "lucide-react";
import logoImage from "@assets/demandflo_logo_white.png";

export default function Footer() {
  const serviceLinks = [
    { href: "/services", label: "Hyper-Personalized Outreach" },
    { href: "/services", label: "AI-Powered Research" },
    { href: "/services", label: "Qualified Appointment Delivery" },
    { href: "/services", label: "Forum Intelligence Automation" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/demand-flo/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Demand Flo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-md">
              Effortless B2B outreach with human-level personalization at scale. 
              Fill your calendar with guaranteed sales conversations.
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
            © 2025 DemandFlo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
