import { motion } from "framer-motion";
import { Search, Brain, Calendar, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ServicesSection() {
  const processSteps = [
    {
      step: "01",
      icon: Search,
      title: "AI Research Engine",
      subtitle: "Deep Prospect Intelligence",
      description: "Our AI analyzes your prospect's LinkedIn activity, company news, industry trends, and recent posts to understand their specific challenges and priorities.",
      details: [
        "30+ data points per prospect analyzed",
        "LinkedIn posts & company news research", 
        "Industry context & pain point identification",
        "Recent activity & behavioral insights"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      step: "02", 
      icon: Brain,
      title: "Hyper-Personalization",
      subtitle: "SDR-Level Message Crafting",
      description: "Each email is uniquely written as if your best SDR spent 30+ minutes researching. No templates, no mass blasts - just genuine, thoughtful outreach.",
      details: [
        "Thousands of unique emails daily",
        "Context-aware message crafting",
        "Industry-specific pain points addressed",
        "Conversation starters based on real insights"
      ],
      color: "from-blue-500 to-blue-600", 
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      step: "03",
      icon: Calendar,
      title: "Guaranteed Results",
      subtitle: "Predictable Pipeline Growth",
      description: "Minimum 4 qualified calls monthly guaranteed. Most clients scale significantly higher as our AI learns and optimizes for their specific market.",
      details: [
        "Minimum of 4 qualified calls monthly",
        "Most clients see 2-3x scaling potential",
        "No contracts - month-to-month flexibility", 
        "70% cost reduction vs hiring SDR"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    }
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden" data-testid="services-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-services-title">
            How <span className="gradient-text">Demand Flo Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-services-description">
            From prospect research to booked appointments - here's exactly how we fill your calendar with qualified sales conversations using AI-powered personalization
          </p>
        </motion.div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number & Connection Line */}
              <div className="flex items-center justify-center mb-8">
                <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: (index * 0.2) + 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 origin-top"
                  ></motion.div>
                )}
              </div>

              {/* Content Card */}
              <Card className="p-8 lg:p-12 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary" data-testid={`process-step-${step.step}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center`}>
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-lg text-primary font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (detailIndex * 0.1) + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-full h-48 rounded-2xl ${step.bgColor} border-2 border-primary/20 flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <step.icon className="h-16 w-16 text-primary/80" />
                      
                      {/* Animated dots */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                        className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"
                      ></motion.div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: 1
                        }}
                        className="absolute bottom-6 left-6 w-4 h-4 bg-accent rounded-full"
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </Card>

              {/* Arrow connector for larger screens */}
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: (index * 0.2) + 0.7 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex justify-center items-center mt-8"
                >
                  <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary to-accent text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to See This in Action?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Every prospect gets this level of personalized attention. No shortcuts, no templates - just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                  onClick={() => window.location.href = '/roi-calculator'}
                  data-testid="button-see-roi"
                  aria-label="See Your ROI Impact"
                >
                  See Your ROI Impact
                  <TrendingUp className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center"
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-book-call"
                  aria-label="Book Strategy Call"
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
