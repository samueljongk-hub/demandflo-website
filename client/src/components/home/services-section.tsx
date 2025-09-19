import { motion } from "framer-motion";
import { Target, Calendar, BarChart3, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/animated-card";

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Targeted Lead Generation",
      description: "Advanced targeting algorithms to identify and capture high-quality leads that convert into paying customers.",
      features: [
        "AI-powered lead scoring",
        "Multi-channel campaigns",
        "Real-time analytics"
      ],
      buttonClass: "bg-primary text-primary-foreground",
      iconClass: "bg-primary"
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Automated scheduling system that converts leads into booked appointments with intelligent optimization.",
      features: [
        "Calendar integration",
        "Automated reminders",
        "No-show reduction"
      ],
      buttonClass: "bg-accent text-accent-foreground",
      iconClass: "bg-accent"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Comprehensive analytics and reporting to track performance and optimize your sales funnel continuously.",
      features: [
        "ROI tracking",
        "Performance insights",
        "Custom reporting"
      ],
      buttonClass: "bg-secondary text-secondary-foreground",
      iconClass: "bg-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-services-title">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive lead generation solutions designed to scale your business and maximize ROI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedCard
                className="h-full"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-8 space-y-6">
                  <div className={`w-12 h-12 ${service.iconClass} rounded-lg flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${service.buttonClass} hover:opacity-90 transition-all duration-200`}
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
