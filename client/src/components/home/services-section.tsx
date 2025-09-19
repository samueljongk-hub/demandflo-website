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

  // Component to render different visualizations based on step type
  const renderVisualization = (type: string, gradient: string) => {
    const baseClasses = "relative w-full h-64 rounded-2xl overflow-hidden";
    
    if (type === "research") {
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-6 text-white`} data-testid="viz-research">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium opacity-80">Analyzing Prospect</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-medium">LinkedIn Activity</div>
                  <div className="text-xs opacity-80">Recent posts about scaling challenges</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-medium">Company News</div>
                  <div className="text-xs opacity-80">Series B funding announcement</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-medium">Pain Points</div>
                  <div className="text-xs opacity-80">Lead generation bottlenecks</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm opacity-80">Data Points Analyzed</div>
            </div>
          </div>
        </div>
      );
    }
    
    if (type === "personalization") {
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-6 text-white relative`} data-testid="viz-personalization">
          <div className="absolute top-4 right-4">
            <Zap className="h-6 w-6 animate-pulse" />
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Email Being Crafted:</div>
              <div className="text-xs opacity-90 leading-relaxed">
                "Hi Sarah, I noticed your recent LinkedIn post about the challenges of scaling your sales team at TechCorp. 
                Given your Series B announcement..."
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-xs font-medium">Tone</div>
                <div className="text-xs opacity-80">Professional</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-xs font-medium">Context</div>
                <div className="text-xs opacity-80">Scaling pain</div>
              </div>
            </div>
            
            <div className="text-center pt-2">
              <div className="text-lg font-bold">100%</div>
              <div className="text-xs opacity-80">Personalized</div>
            </div>
          </div>
        </div>
      );
    }
    
    // results visualization
    return (
      <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-6 text-white`} data-testid="viz-results">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm font-medium opacity-80 mb-4">Monthly Results</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Qualified Calls</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/30 rounded-full">
                    <div className="w-12 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold">12</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Response Rate</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/30 rounded-full">
                    <div className="w-10 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold">8.5%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Cost vs SDR</span>
                <span className="text-sm font-bold">-70%</span>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-white/20">
            <div className="text-2xl font-bold">4+</div>
            <div className="text-xs opacity-80">Guaranteed Monthly</div>
          </div>
        </div>
      </div>
    );
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
