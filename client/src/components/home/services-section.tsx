import { motion } from "framer-motion";
import { Database, MessageSquare, Target, TrendingUp, ArrowRight, ArrowDown, Check, Zap, Users, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function ServicesSection() {
  const [, setLocation] = useLocation();
  
  const processSteps = [
    {
      step: "01",
      title: "AI Research Engine",
      subtitle: "Deep Prospect Intelligence",
      description: "Our AI scans 30+ data points per prospect, analyzing LinkedIn activity, company news, and industry trends to understand their specific challenges before we ever send a message.",
      features: [
        { icon: Database, text: "30+ data points analyzed per prospect" },
        { icon: MessageSquare, text: "LinkedIn posts & company activity research" }, 
        { icon: Target, text: "Pain point & priority identification" },
        { icon: BarChart3, text: "Behavioral pattern recognition" }
      ],
      visualization: "research",
      gradient: "from-violet-600 via-purple-600 to-indigo-600"
    },
    {
      step: "02", 
      title: "Hyper-Personalization Engine",
      subtitle: "Human-Level Message Crafting",
      description: "Every email is uniquely crafted using AI that writes like your best SDR after 30 minutes of research. No templates, no mass messaging - just authentic, relevant conversations.",
      features: [
        { icon: Zap, text: "Thousands of unique emails daily" },
        { icon: MessageSquare, text: "Context-aware conversation starters" },
        { icon: Target, text: "Industry-specific pain points addressed" },
        { icon: Users, text: "Tone matching for each prospect" }
      ],
      visualization: "personalization",
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      step: "03",
      title: "Guaranteed Pipeline Growth",
      subtitle: "Predictable Revenue Results",
      description: "We guarantee a minimum of 4 qualified sales conversations monthly. Most clients scale 2-5x higher as our AI learns your market and optimizes messaging over time.",
      features: [
        { icon: Target, text: "Minimum 4 qualified calls guaranteed" },
        { icon: TrendingUp, text: "Most clients scale 2-5x monthly" },
        { icon: Users, text: "Month-to-month flexibility" },
        { icon: BarChart3, text: "70% cost reduction vs SDR" }
      ],
      visualization: "results",
      gradient: "from-emerald-600 via-green-600 to-teal-600"
    }
  ];

  // AI Data Scanning Radar - shows actual data point discovery
  const SearchRadar = () => {
    const dataPoints = [
      { label: "LinkedIn", angle: 0, delay: 0 },
      { label: "Company News", angle: 45, delay: 0.3 },
      { label: "Industry Trends", angle: 90, delay: 0.6 },
      { label: "Pain Points", angle: 135, delay: 0.9 },
      { label: "Recent Activity", angle: 180, delay: 1.2 },
      { label: "Role Insights", angle: 225, delay: 1.5 },
      { label: "Behavior Patterns", angle: 270, delay: 1.8 },
      { label: "Context Signals", angle: 315, delay: 2.1 }
    ];

    return (
      <div className="relative w-80 h-80 mx-auto">
        {/* Outer scanning rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-violet-400/30 to-purple-400/30"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-violet-400/50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-purple-500/70"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />

        {/* Central AI brain icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl shadow-lg flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Database className="h-8 w-8 text-white" />
          </motion.div>
        </div>

        {/* Rotating radar sweep */}
        <motion.div
          className="absolute top-0 left-1/2 w-1 h-40 bg-gradient-to-t from-violet-500 via-purple-400 to-transparent origin-bottom transform -translate-x-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ 
            background: "linear-gradient(to top, rgba(139, 92, 246, 0.8), rgba(147, 51, 234, 0.4), transparent)",
            filter: "blur(1px)"
          }}
        />

        {/* Data points that light up as radar sweeps */}
        {dataPoints.map((point, index) => {
          const radius = 120;
          const x = Math.cos((point.angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((point.angle - 90) * Math.PI / 180) * radius;
          
          return (
            <motion.div
              key={point.label}
              className="absolute w-3 h-3 bg-violet-500 rounded-full shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 6px)`,
                top: `calc(50% + ${y}px - 6px)`,
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (index * 0.5) % 4,
              }}
            />
          );
        })}

        {/* Data discovery indicators */}
        <motion.div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            <span className="text-xs opacity-90">Analyzing</span>
            <span className="block text-lg">30+ Data Points</span>
          </div>
        </motion.div>

        {/* Scanning status indicator */}
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/50 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-700 dark:text-green-400">AI ACTIVE</span>
          </div>
        </motion.div>
      </div>
    );
  };

  const EmailAnimation = () => (
    <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
      <motion.div
        className="w-24 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageSquare className="h-10 w-10 text-white" />
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        ✓
      </motion.div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        100% Personal
      </div>
    </div>
  );

  const ResultsAnimation = () => (
    <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
      <motion.div
        className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <TrendingUp className="h-10 w-10 text-white" />
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        4+
      </motion.div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        Guaranteed
      </div>
    </div>
  );

  // Component to render different visualizations based on step type
  const renderVisualization = (type: string, gradient: string) => {
    if (type === "research") {
      return <SearchRadar />;
    }
    
    if (type === "personalization") {
      return <EmailAnimation />;
    }
    
    // results visualization
    return <ResultsAnimation />;
  };

  return (
    <section className="py-24 bg-muted relative overflow-hidden" data-testid="services-section">      
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
            From deep prospect research to guaranteed qualified calls - here's exactly how our AI-powered system fills your calendar with the right conversations
          </p>
        </motion.div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >              
              <Card className="p-0 overflow-hidden hover:shadow-2xl transition-all duration-500" data-testid={`process-step-${step.step}`}>
                <div className={`grid lg:grid-cols-2 min-h-[350px] ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Side */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.step}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-lg text-primary font-semibold mb-4">{step.subtitle}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50"
                          data-testid={`feature-${step.step}-${featureIndex}`}
                        >
                          <feature.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visualization Side */}
                  <div className={`p-8 lg:p-12 flex items-center justify-center bg-muted/30 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.1) + 0.2 }}
                      viewport={{ once: true }}
                      className="w-full max-w-md"
                    >
                      {renderVisualization(step.visualization, step.gradient)}
                    </motion.div>
                  </div>
                </div>
              </Card>

              {/* Process Flow Connector */}
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.8, delay: (index * 0.1) + 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center my-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50"></div>
                    <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Pipeline?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Every prospect gets this level of personalized attention. See exactly how much revenue this could generate for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-lg"
                    onClick={() => setLocation('/roi-calculator')}
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
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center justify-center text-lg"
                    onClick={() => setLocation('/contact')}
                    data-testid="button-book-call"
                    aria-label="Book Strategy Call"
                  >
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
