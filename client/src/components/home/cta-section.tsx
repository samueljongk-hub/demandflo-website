import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Lock, Clock, Shield, CheckCircle } from "lucide-react";

export default function CtaSection() {
  const guarantees = [
    { icon: CheckCircle, text: "4+ Appointments Guaranteed" },
    { icon: Shield, text: "Full Refund if No Results" },
    { icon: Clock, text: "Month-to-Month Flexibility" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6" data-testid="text-cta-title">
            Ready to <span className="gradient-text">Fill Your Calendar?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-cta-description">
            Start getting qualified appointments delivered to your calendar every month. No contracts. No excuses. 
            Just results with our proven system.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm">
            {guarantees.map((guarantee) => (
              <div key={guarantee.text} className="flex items-center" data-testid={`guarantee-${guarantee.text.toLowerCase().replace(/\s+/g, '-')}`}>
                <guarantee.icon className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{guarantee.text}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white px-12 py-6 text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              data-testid="button-get-first-appointments"
            >
              <a href="https://calendly.com/samueljong/discovery" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="mr-3 h-6 w-6" />
                Get Your First Appointments
              </a>
            </Button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-6"
          >
            30-minute strategy session • 100% free • No obligations
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}