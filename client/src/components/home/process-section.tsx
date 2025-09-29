import { motion } from "framer-motion";
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, BarChart3, Mail, Zap, Settings, Clock, Rocket, CalendarCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProcessSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Setup",
      subtitle: "Strategic Preparation",
      description: "We establish the groundwork for your success by aligning strategy, configuring systems, and preparing personalized outreach sequences that resonate with your ideal prospects.",
      keyElements: [
        { icon: Target, text: "ICP alignment & messaging strategy" },
        { icon: Settings, text: "Systems configuration & optimization" },
        { icon: Users, text: "Prospect research & list building" },
        { icon: Mail, text: "Personalized sequence creation" }
      ],
      duration: "Initial weeks",
      outcome: "Ready-to-launch campaign infrastructure",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      bgColor: "bg-violet-50 dark:bg-violet-950/20"
    },
    {
      phase: "Phase 2", 
      title: "Launch & Optimization",
      subtitle: "Active Growth Engine",
      description: "Your campaigns go live with continuous monitoring, optimization, and call booking to ensure consistent pipeline growth and maximum ROI from day one.",
      keyElements: [
        { icon: Rocket, text: "Live campaign deployment" },
        { icon: CalendarCheck, text: "Qualified call booking & handoff" },
        { icon: BarChart3, text: "Performance tracking & refinement" },
        { icon: TrendingUp, text: "Continuous optimization & scaling" }
      ],
      duration: "Ongoing",
      outcome: "Predictable pipeline with a minimum of 4 monthly calls",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
    }
  ];

  // Render timeline visualization for each phase
  const renderPhaseVisualization = (phaseIndex: number, gradient: string) => {
    const baseClasses = "relative w-full h-56 rounded-2xl overflow-hidden";
    
    if (phaseIndex === 0) {
      // Foundation Phase
      return (
        <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-6 text-white`} data-testid="viz-foundation">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium opacity-90">Foundation Setup</span>
                <Clock className="h-4 w-4 animate-pulse" />
              </div>
              
              <div className="space-y-2">
                {[
                  { label: "Strategy Alignment", status: "Complete" },
                  { label: "System Configuration", status: "Complete" },
                  { label: "List Building", status: "Complete" },
                  { label: "Message Creation", status: "Ready" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/20 rounded p-2 flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-medium">{item.label}</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-300" />
                      <span className="text-xs opacity-80">{item.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center pt-3 border-t border-white/20">
              <div className="text-lg font-bold">Ready to Launch</div>
              <div className="text-xs opacity-80">Foundation Complete</div>
            </div>
          </div>
        </div>
      );
    }
    
    // Growth Phase
    return (
      <div className={`${baseClasses} bg-gradient-to-br ${gradient} p-6 text-white relative`} data-testid="viz-growth">
        <div className="absolute top-4 right-4">
          <Rocket className="h-5 w-5 animate-bounce" style={{animationDuration: '2s'}} />
        </div>
        
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium opacity-90">Live Campaign</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs opacity-80">Active</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/20 rounded p-2 text-center">
                <div className="text-lg font-bold">12</div>
                <div className="text-xs opacity-80">Calls This Month</div>
              </div>
              <div className="bg-white/20 rounded p-2 text-center">
                <div className="text-lg font-bold">8.5%</div>
                <div className="text-xs opacity-80">Response Rate</div>
              </div>
            </div>
            
            <div className="bg-white/20 rounded p-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs">Pipeline Growth</span>
                <span className="text-xs font-bold">+240%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-1.5">
                <motion.div 
                  className="bg-green-400 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-3 border-t border-white/20">
            <div className="text-lg font-bold">Scaling Success</div>
            <div className="text-xs opacity-80">Ongoing Optimization</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-process-title">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-process-description">
            A strategic 2-phase approach that transforms your outreach from generic messaging into a predictable pipeline-building system
          </p>
        </motion.div>

        {/* Timeline Connector */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-emerald-500 opacity-20"></div>
          
          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phase Timeline Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.gradient} flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-background`}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <Card className={`p-0 overflow-hidden hover:shadow-2xl transition-all duration-500 ${phase.bgColor} border-2 border-primary/10`} data-testid={`phase-${index + 1}`}>
                  <div className="grid lg:grid-cols-5 min-h-[450px]">
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${phase.gradient} text-white`}>
                            {phase.phase}
                          </span>
                          <span className="text-sm text-muted-foreground font-medium">{phase.duration}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{phase.title}</h3>
                        <p className="text-xl text-primary font-semibold">{phase.subtitle}</p>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground text-lg">Key Focus Areas:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {phase.keyElements.map((element, elementIndex) => (
                            <motion.div
                              key={elementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: (index * 0.2) + (elementIndex * 0.1) + 0.4 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3 p-4 rounded-lg bg-background/70 hover:bg-background/90 transition-colors border border-primary/10"
                              data-testid={`element-${index + 1}-${elementIndex}`}
                            >
                              <element.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-medium text-foreground">{element.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className={`flex items-start space-x-4 p-6 bg-gradient-to-r ${phase.gradient} text-white rounded-lg shadow-lg`}>
                        <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-lg mb-1">Phase Outcome:</div>
                          <div className="text-sm opacity-90">{phase.outcome}</div>
                        </div>
                      </div>
                    </div>

                    {/* Visualization Section */}
                    <div className="lg:col-span-2 p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: (index * 0.2) + 0.3 }}
                        viewport={{ once: true }}
                        className="w-full max-w-sm"
                      >
                        {renderPhaseVisualization(index, phase.gradient)}
                      </motion.div>
                    </div>
                  </div>
                </Card>

                {/* Process Flow Arrow */}
                {index < phases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.8, delay: (index * 0.2) + 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center my-12"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-16 bg-gradient-to-b from-violet-500 to-emerald-500 opacity-40"></div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-5 w-5 text-white rotate-90" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
