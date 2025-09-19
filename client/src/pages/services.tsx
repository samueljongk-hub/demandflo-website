import { motion } from "framer-motion";
import { Target, Calendar, BarChart3, Users, Zap, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/animated-card";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Lead Generation",
      description: "AI-powered lead generation that identifies and captures high-quality prospects ready to convert.",
      features: [
        "Advanced targeting algorithms",
        "Multi-channel campaign management",
        "Real-time lead scoring",
        "A/B testing optimization",
        "Custom landing pages",
        "Lead qualification system"
      ],
      price: "Starting at $2,500/month"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Automated scheduling system that converts leads into confirmed appointments with intelligent optimization.",
      features: [
        "Calendar integration",
        "Automated follow-ups",
        "SMS & email reminders",
        "No-show reduction strategies",
        "Timezone management",
        "Booking analytics"
      ],
      price: "Starting at $1,500/month"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Comprehensive analytics and reporting to track performance and optimize your entire sales funnel.",
      features: [
        "ROI tracking & reporting",
        "Performance dashboards",
        "Custom KPI monitoring",
        "Conversion optimization",
        "Predictive analytics",
        "Competitor analysis"
      ],
      price: "Starting at $1,000/month"
    },
    {
      icon: Users,
      title: "Customer Acquisition",
      description: "Full-service customer acquisition program designed to scale your business systematically.",
      features: [
        "Market research & analysis",
        "Customer persona development",
        "Multi-touch attribution",
        "Lifecycle marketing",
        "Retention strategies",
        "Acquisition cost optimization"
      ],
      price: "Starting at $5,000/month"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Sophisticated automation workflows that nurture leads and drive conversions 24/7.",
      features: [
        "Email marketing sequences",
        "Behavioral triggers",
        "Lead nurturing workflows",
        "Dynamic content personalization",
        "Cross-channel automation",
        "Performance optimization"
      ],
      price: "Starting at $2,000/month"
    },
    {
      icon: Shield,
      title: "Conversion Optimization",
      description: "Data-driven optimization strategies to maximize your conversion rates and revenue per visitor.",
      features: [
        "Conversion rate analysis",
        "User experience optimization",
        "Landing page testing",
        "Funnel optimization",
        "Heat mapping analysis",
        "Revenue optimization"
      ],
      price: "Starting at $3,000/month"
    }
  ];

  return (
    <div className="min-h-screen pt-16" data-testid="page-services">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6" data-testid="text-services-hero-title">
              Premium <span className="gradient-text">Lead Generation Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-services-hero-description">
              Comprehensive solutions designed to scale your business with proven strategies that deliver consistent results. 
              Our expert team combines cutting-edge technology with data-driven insights to maximize your ROI.
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-services-grid-title">
              Choose Your <span className="gradient-text">Growth Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-grid-description">
              Each service is designed to work independently or as part of a comprehensive growth strategy
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
                  <div className="p-8 space-y-6 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2 flex-grow">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-opacity-90 transition-all duration-200"
                        data-testid={`button-select-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Select This Service
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-services-cta-title">
              Ready to <span className="gradient-text">Transform Your Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-services-cta-description">
              Let's discuss which services are right for your business goals and create a custom strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                data-testid="button-schedule-consultation"
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                data-testid="button-view-case-studies"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
