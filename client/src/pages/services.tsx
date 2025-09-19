import { motion } from "framer-motion";
import { Target, Calendar, TrendingUp, CheckCircle, ArrowRight, Zap, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Plans() {
  const [, setLocation] = useLocation();

  const plans = [
    {
      name: "Pilot",
      subtitle: "Perfect for Testing Fit",
      description: "Ideal for businesses looking to validate our approach and see results before scaling.",
      calls: "4 qualified calls",
      period: "each month",
      savings: null,
      features: [
        "Minimum 4 qualified calls guaranteed",
        "Hyper-personalized email sequences",
        "AI-powered prospect research",
        "One-time strategic setup included",
        "No-show replacement included",
        "Month-to-month flexibility"
      ],
      badge: "Best for Testing",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      borderColor: "border-violet-200 dark:border-violet-800",
      popular: false
    },
    {
      name: "Growth",
      subtitle: "Steady Volume Growth", 
      description: "Perfect for established businesses ready to scale their pipeline with consistent monthly growth.",
      calls: "7 qualified calls",
      period: "each month",
      savings: "7% cost savings",
      features: [
        "Minimum 7 qualified calls guaranteed",
        "Advanced targeting & segmentation",
        "Multi-sequence campaign management",
        "Priority support & optimization",
        "No-show replacement included",
        "Lower per-call cost at steady volume"
      ],
      badge: "Most Popular",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      popular: true
    },
    {
      name: "Scale",
      subtitle: "Maximum Volume & Efficiency",
      description: "For high-growth companies that need maximum pipeline volume with the best unit economics.",
      calls: "10+ qualified calls",
      period: "each month", 
      savings: "14% cost savings",
      features: [
        "Minimum 10+ qualified calls guaranteed",
        "Premium targeting & optimization",
        "Multi-channel campaign orchestration",
        "Dedicated account management",
        "No-show replacement included",
        "Best cost efficiency at higher volume"
      ],
      badge: "Best Value",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      popular: false
    }
  ];

  const terms = [
    "Month-to-month commitment for maximum flexibility",
    "Qualified calls mean ICP fit, clear interest, and attended meetings",
    "C-suite uplift pricing applies for executive-level meetings",
    "All plans include comprehensive setup and onboarding"
  ];

  return (
    <div className="min-h-screen pt-16" data-testid="page-plans">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6" data-testid="text-plans-hero-title">
              Choose Your <span className="gradient-text">Growth Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-plans-hero-description">
              Flexible plans designed to scale with your business. From testing our approach to maximizing your pipeline, 
              we guarantee results with month-to-month flexibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <Card className={`h-full p-0 overflow-hidden hover:shadow-2xl transition-all duration-500 ${plan.bgColor} ${plan.borderColor} border-2 ${plan.popular ? 'scale-105' : ''}`} data-testid={`plan-${plan.name.toLowerCase()}`}>
                  <div className="p-8 space-y-6">
                    {/* Plan Header */}
                    <div className="text-center space-y-2">
                      <h3 className="text-3xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-lg text-primary font-semibold">{plan.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Calls & Savings */}
                    <div className="text-center py-6 border-y border-border">
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-foreground">{plan.calls}</div>
                        <div className="text-sm text-muted-foreground">{plan.period}</div>
                        {plan.savings && (
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${plan.gradient}`}>
                            {plan.savings} vs Pilot
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <Button
                        className={`w-full bg-gradient-to-r ${plan.gradient} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        size="lg"
                        onClick={() => setLocation('/contact')}
                        data-testid={`button-select-${plan.name.toLowerCase()}`}
                      >
                        Start {plan.name} Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Plan Terms & Details</h3>
            <ul className="space-y-3">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-muted-foreground">{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Added Value Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-added-value-title">
              Beyond Lead Generation - <span className="gradient-text">Complete Growth Infrastructure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-added-value-description">
              We're constantly adding value for our clients with cutting-edge tools and integrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Advanced CRM Integration",
                description: "We're piloting a comprehensive CRM interface that gives you complete control over your sales pipeline with advanced automation features.",
                status: "Coming Soon"
              },
              {
                icon: Zap,
                title: "Multi-Channel Communication",
                description: "Beyond email - integrated SMS campaigns, LinkedIn outreach, and omnichannel nurture sequences for maximum engagement.",
                status: "In Development"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "AI-powered forecasting that predicts your pipeline health, identifies bottlenecks, and suggests optimization strategies.",
                status: "Beta Testing"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300" data-testid={`added-value-${index}`}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-accent text-accent-foreground">
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Start Filling Your Calendar?
                </h2>
                <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Every plan comes with our guarantee: minimum qualified calls delivered monthly or we keep working until you get them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transition-colors font-semibold px-8 py-4"
                    onClick={() => setLocation('/roi-calculator')}
                    data-testid="button-see-roi"
                  >
                    Calculate Your ROI
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-semibold px-8 py-4"
                    onClick={() => setLocation('/contact')}
                    data-testid="button-book-call"
                  >
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}