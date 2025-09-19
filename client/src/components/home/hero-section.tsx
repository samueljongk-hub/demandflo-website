import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "$2M+", label: "Revenue Generated" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="relative pt-16 pb-24 overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight" data-testid="text-hero-title">
              Transform Your Business with{" "}
              <span className="gradient-text">Premium Lead Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-description">
              Scale your revenue with our sophisticated lead generation and appointment booking system. 
              We help businesses achieve consistent $50,000+ monthly growth through data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg px-8 py-4"
                data-testid="button-start-consultation"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-4"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
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
                <h3 className="text-xl font-semibold">Lead Generation Dashboard</h3>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-accent rounded-full"
                ></motion.div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Qualified Leads Today</span>
                  <span className="text-2xl font-bold text-accent">47</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Appointments Booked</span>
                  <span className="text-2xl font-bold text-primary">23</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-2xl font-bold text-accent">89%</span>
                </div>
              </div>
              <div className="mt-6 gradient-primary h-2 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
