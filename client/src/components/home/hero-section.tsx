import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "1000s", label: "Hyper-Personalized Emails Daily" },
    { value: "70%", label: "Cost Reduction vs SDR" },
    { value: "4+ Min", label: "Qualified Calls Monthly" },
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden animated-bg" data-testid="hero-section">
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animated-bg-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight" data-testid="text-hero-title">
              Fill Your Calendar With{" "}
              <span className="gradient-text">Guaranteed Sales Conversations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-description">
              Start with a minimum of 4 qualified calls monthly and scale as you grow. 
              Thousands of hyper-personalized emails daily at 70% cost reduction vs hiring an SDR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg px-8 py-4"
                data-testid="button-start-consultation"
              >
                <a href="https://calendly.com/samueljong/30min" target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Your First Appointments
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-4"
                data-testid="button-see-roi"
                onClick={() => window.location.href = '/roi-calculator'}
              >
                <Play className="mr-2 h-5 w-5" />
                See Your ROI
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            data-testid="hero-dashboard"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-2xl p-8 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Your Calendar Pipeline</h3>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                ></motion.div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">This Month's Appointments</span>
                    <span className="text-lg font-bold text-green-600">12 Booked</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    4 minimum guaranteed • 8 bonus appointments
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Pipeline Value</span>
                    <span className="text-lg font-bold text-primary">$240K</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    12 calls × $20K avg contract value
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Next Appointment</span>
                    <span className="text-sm font-bold text-accent">Tomorrow 2PM</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    CEO of TechCorp • Series B scaling challenges
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Monthly Goal Progress</span>
                  <span>12/10 calls (120%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="gradient-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
