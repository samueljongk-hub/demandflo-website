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

  // AI Data Scanning Radar - rebuilt from scratch with proper geometry
  const SearchRadar = () => {
    // Shared geometry constants for perfect alignment
    const CONTAINER_SIZE = 400; // 25rem equivalent 
    const CENTER = CONTAINER_SIZE / 2;
    const RING_RADII = [60, 80, 100]; // Concentric ring radii
    const DOT_RADIUS = 100; // Position for pulse dots
    const LABEL_RADIUS = 160; // Position for text labels (outside container)
    
    const dataPoints = [
      { label: "LinkedIn Activity", detail: "Posts & engagement", angle: 0, delay: 0 },
      { label: "Company News", detail: "Growth & funding", angle: 45, delay: 0.5 },
      { label: "Industry Trends", detail: "Market shifts", angle: 90, delay: 1.0 },
      { label: "Pain Points", detail: "Current challenges", angle: 135, delay: 1.5 },
      { label: "Behavioral Data", detail: "Decision patterns", angle: 180, delay: 2.0 },
      { label: "Role Insights", detail: "Job responsibilities", angle: 225, delay: 2.5 },
      { label: "Intent Signals", detail: "Ready to buy", angle: 270, delay: 3.0 },
      { label: "Contact History", detail: "Past interactions", angle: 315, delay: 3.5 }
    ];

    // Convert angle to position using polar coordinates
    const getPosition = (angle: number, radius: number) => {
      const radians = (angle * Math.PI) / 180;
      return {
        x: CENTER + Math.cos(radians) * radius,
        y: CENTER + Math.sin(radians) * radius
      };
    };

    return (
      <div className="flex items-center justify-center py-12">
        <div 
          className="relative"
          style={{ 
            width: `${CONTAINER_SIZE + LABEL_RADIUS * 2}px`, 
            height: `${CONTAINER_SIZE + LABEL_RADIUS * 2}px` 
          }}
        >
          {/* Radar container centered within larger container */}
          <div 
            className="absolute rounded-full"
            style={{
              width: `${CONTAINER_SIZE}px`,
              height: `${CONTAINER_SIZE}px`,
              left: `${LABEL_RADIUS}px`,
              top: `${LABEL_RADIUS}px`
            }}
          >
            {/* Concentric radar rings */}
            {RING_RADII.map((radius, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full border-2"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  left: `${CENTER - radius}px`,
                  top: `${CENTER - radius}px`,
                  borderColor: `rgba(139, 92, 246, ${0.3 + index * 0.2})`
                }}
                animate={{ scale: [1, 1.05 + index * 0.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            ))}

            {/* Central AI brain */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                width: "80px",
                height: "80px", 
                left: `${CENTER - 40}px`,
                top: `${CENTER - 40}px`
              }}
            >
              <motion.div
                className="w-full h-full rounded-full shadow-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(147, 51, 234, 1), rgba(168, 85, 247, 1))"
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Database className="h-8 w-8 text-white" />
              </motion.div>
            </div>

            {/* Rotating radar sweep */}
            <motion.div
              className="absolute w-0.5 origin-bottom"
              style={{
                height: `${DOT_RADIUS}px`,
                left: `${CENTER}px`,
                top: `${CENTER - DOT_RADIUS}px`,
                background: "linear-gradient(to top, rgba(139, 92, 246, 0.9), transparent)"
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Data points on radar edge */}
            {dataPoints.map((point, index) => {
              const dotPos = getPosition(point.angle, DOT_RADIUS);
              return (
                <motion.div
                  key={`dot-${index}`}
                  className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${dotPos.x}px`,
                    top: `${dotPos.y}px`,
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(147, 51, 234, 1))"
                  }}
                  animate={{
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: point.delay,
                  }}
                />
              );
            })}
          </div>

          {/* Text labels positioned outside radar */}
          {dataPoints.map((point, index) => {
            const labelPos = getPosition(point.angle, LABEL_RADIUS);
            const absoluteX = LABEL_RADIUS + labelPos.x;
            const absoluteY = LABEL_RADIUS + labelPos.y;
            
            return (
              <motion.div
                key={`label-${index}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${absoluteX}px`,
                  top: `${absoluteY}px`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: point.delay + 0.5,
                  times: [0, 0.1, 0.8, 1]
                }}
              >
                <div 
                  className="backdrop-blur-sm border rounded-lg p-3 shadow-lg w-32 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))",
                    borderColor: "rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <div 
                    className="text-sm font-bold mb-1"
                    style={{ color: "rgba(139, 92, 246, 1)" }}
                  >
                    {point.label}
                  </div>
                  <div className="text-xs text-gray-600">{point.detail}</div>
                </div>
              </motion.div>
            );
          })}

          {/* Status indicators */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div 
              className="flex items-center space-x-2 border rounded-full px-4 py-2"
              style={{
                background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))",
                borderColor: "rgba(34, 197, 94, 0.3)"
              }}
            >
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "rgba(34, 197, 94, 1)" }}
              ></div>
              <span 
                className="text-xs font-medium"
                style={{ color: "rgba(34, 197, 94, 1)" }}
              >
                AI ACTIVE
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div 
              className="px-6 py-3 rounded-full text-white text-sm font-semibold shadow-lg text-center"
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(147, 51, 234, 1), rgba(168, 85, 247, 1))"
              }}
            >
              Live Intelligence Gathering
              <div className="text-xl font-bold">30+ Data Points</div>
              <div className="text-xs opacity-90">Per Prospect Analysis</div>
            </div>
          </motion.div>
        </div>
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
