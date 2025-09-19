import { motion } from "framer-motion";
import { Search, Target, Users, TrendingUp, CheckCircle, ArrowRight, BarChart3, Mail, Zap, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Strategy & Discovery",
      subtitle: "Deep Market Intelligence",
      description: "We start by analyzing your business landscape, ideal customer profiles, and competitive positioning to build a data-driven strategy that aligns with your revenue goals.",
      keyActivities: [
        { icon: Search, text: "Business & market analysis" },
        { icon: Target, text: "Ideal customer profiling" },
        { icon: BarChart3, text: "Competitive landscape review" },
        { icon: CheckCircle, text: "Revenue goal alignment" }
      ],
      timeframe: "Week 1",
      deliverable: "Strategic Foundation Document",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      bgPattern: "strategy"
    },
    {
      number: "02",
      title: "Campaign Architecture",
      subtitle: "Precision-Targeted Outreach",
      description: "We design and deploy multi-channel campaigns with laser-focused targeting, compelling messaging, and optimized touchpoints that resonate with your prospects.",
      keyActivities: [
        { icon: Target, text: "Advanced audience segmentation" },
        { icon: Mail, text: "Message sequence development" },
        { icon: Settings, text: "Multi-channel campaign setup" },
        { icon: CheckCircle, text: "Landing page optimization" }
      ],
      timeframe: "Week 2",
      deliverable: "Live Campaign Infrastructure",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      bgPattern: "campaign"
    },
    {
      number: "03",
      title: "Lead Nurturing System",
      subtitle: "Relationship-Building Automation",
      description: "Our intelligent nurture sequences build trust and guide prospects through your sales funnel with personalized touchpoints and value-driven content.",
      keyActivities: [
        { icon: Users, text: "Automated nurture sequences" },
        { icon: Mail, text: "Personalized follow-up cadence" },
        { icon: Target, text: "Behavioral trigger responses" },
        { icon: CheckCircle, text: "Trust-building content delivery" }
      ],
      timeframe: "Week 3-4",
      deliverable: "Active Nurture System",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgPattern: "nurture"
    },
    {
      number: "04",
      title: "Scale & Optimization",
      subtitle: "Continuous Growth Engine",
      description: "We continuously monitor, test, and optimize every element of your campaigns to maximize ROI and scale successful strategies across new markets and audiences.",
      keyActivities: [
        { icon: TrendingUp, text: "Performance optimization" },
        { icon: BarChart3, text: "A/B testing implementation" },
        { icon: Zap, text: "Scaling successful campaigns" },
        { icon: CheckCircle, text: "ROI maximization" }
      ],
      timeframe: "Ongoing",
      deliverable: "Scalable Growth System",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgPattern: "scale"
    }
  ];

  // Render visual patterns for each step
  const renderStepVisualization = (pattern: string, gradient: string) => {
    const baseClasses = "relative w-full h-48 rounded-2xl overflow-hidden";
    
    if (pattern === "strategy") {
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-4 text-white`} data-testid="viz-strategy">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium opacity-90">Market Analysis</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/20 rounded p-2">
                  <div className="text-xs font-medium">Target Audience</div>
                  <div className="text-xs opacity-80">Defined</div>
                </div>
                <div className="bg-white/20 rounded p-2">
                  <div className="text-xs font-medium">Competitors</div>
                  <div className="text-xs opacity-80">Analyzed</div>
                </div>
                <div className="bg-white/20 rounded p-2">
                  <div className="text-xs font-medium">Market Size</div>
                  <div className="text-xs opacity-80">$2.4M</div>
                </div>
                <div className="bg-white/20 rounded p-2">
                  <div className="text-xs font-medium">Opportunity</div>
                  <div className="text-xs opacity-80">High</div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-2 border-t border-white/20">
              <div className="text-lg font-bold">Strategy Ready</div>
            </div>
          </div>
        </div>
      );
    }
    
    if (pattern === "campaign") {
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-4 text-white relative`} data-testid="viz-campaign">
          <div className="absolute top-2 right-2">
            <Settings className="h-4 w-4 animate-spin" style={{animationDuration: '3s'}} />
          </div>
          
          <div className="space-y-3">
            <div className="bg-white/20 rounded p-3">
              <div className="text-xs font-medium mb-1">Campaign Status</div>
              <div className="text-sm font-bold">Live & Targeting</div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/15 rounded p-2">
                <div className="text-lg font-bold">3</div>
                <div className="text-xs">Channels</div>
              </div>
              <div className="bg-white/15 rounded p-2">
                <div className="text-lg font-bold">85%</div>
                <div className="text-xs">Match Rate</div>
              </div>
              <div className="bg-white/15 rounded p-2">
                <div className="text-lg font-bold">24h</div>
                <div className="text-xs">Active</div>
              </div>
            </div>
            
            <div className="bg-white/20 rounded p-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Campaign Progress</span>
                <span className="text-xs font-bold">76%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-1.5 mt-1">
                <motion.div 
                  className="bg-white h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "76%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    if (pattern === "nurture") {
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-4 text-white`} data-testid="viz-nurture">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Nurture Sequence</span>
              <Users className="h-4 w-4 animate-pulse" />
            </div>
            
            <div className="space-y-2">
              {[1, 2, 3, 4].map((step, idx) => (
                <motion.div
                  key={step}
                  className="bg-white/20 rounded p-2 flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs font-bold">
                    {step}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium">
                      {step === 1 && "Welcome Email"}
                      {step === 2 && "Value Content"}
                      {step === 3 && "Case Study"}
                      {step === 4 && "Booking CTA"}
                    </div>
                    <div className="text-xs opacity-70">
                      {step === 1 && "Day 1"}
                      {step === 2 && "Day 3"}
                      {step === 3 && "Day 7"}
                      {step === 4 && "Day 14"}
                    </div>
                  </div>
                  <CheckCircle className="h-3 w-3 text-green-300" />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center pt-2 border-t border-white/20">
              <div className="text-sm font-bold">87% Open Rate</div>
            </div>
          </div>
        </div>
      );
    }
    
    // scale visualization
    return (
      <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-4 text-white`} data-testid="viz-scale">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Growth Metrics</span>
              <TrendingUp className="h-4 w-4" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Leads Generated</span>
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-1 bg-white/30 rounded">
                    <motion.div 
                      className="h-1 bg-white rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className="text-xs font-bold">+240%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">Conversion Rate</span>
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-1 bg-white/30 rounded">
                    <motion.div 
                      className="h-1 bg-white rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className="text-xs font-bold">+180%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">ROI</span>
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-1 bg-white/30 rounded">
                    <motion.div 
                      className="h-1 bg-white rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className="text-xs font-bold">+320%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-2 border-t border-white/20">
            <div className="text-lg font-bold">Scaling Success</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-process-title">
            How We <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-process-description">
            Our proven 4-phase methodology transforms your lead generation from scattered efforts into a predictable revenue engine with measurable results at every step
          </p>
        </motion.div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary" data-testid={`process-step-${step.number}`}>
                <div className={`grid lg:grid-cols-3 gap-0 min-h-[400px] ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Section */}
                  <div className={`lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-lg text-primary font-semibold">{step.subtitle}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-semibold text-muted-foreground">{step.timeframe}</div>
                        <div className="text-xs text-muted-foreground/70">Timeline</div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.keyActivities.map((activity, activityIndex) => (
                          <motion.div
                            key={activityIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (activityIndex * 0.1) + 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                            data-testid={`activity-${step.number}-${activityIndex}`}
                          >
                            <activity.icon className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{activity.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Deliverable: {step.deliverable}</div>
                        <div className="text-sm text-muted-foreground">Completed by end of {step.timeframe.toLowerCase()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Visualization Section */}
                  <div className={`bg-muted/30 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.1) + 0.2 }}
                      viewport={{ once: true }}
                      className="w-full max-w-sm"
                    >
                      {renderStepVisualization(step.bgPattern, step.gradient)}
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
                  className="flex justify-center my-12"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Success Metrics CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Growth Journey?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                This proven methodology has generated millions in revenue for our clients. Let's see what it can do for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-lg"
                  data-testid="button-start-process"
                >
                  Start Your Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
