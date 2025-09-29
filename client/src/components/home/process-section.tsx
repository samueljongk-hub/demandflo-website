import { motion } from "framer-motion";
import { Users, Mail, Calendar, Search } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Find Your Ideal Customers",
      description: "We identify and research the perfect prospects for your business.",
      icon: Search,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Send Personal Messages",
      description: "Each email is crafted specifically for that person, like your best salesperson wrote it.",
      icon: Mail,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Book Qualified Calls",
      description: "Interested prospects schedule directly on your calendar. You get a minimum of 4 calls monthly.",
      icon: Calendar,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  // Animated visual components
  const SearchRadar = () => (
    <div className="relative w-32 h-32 mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-blue-500/30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-4 border-blue-400/50"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Search className="h-8 w-8 text-blue-600" />
      </div>
      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-16 bg-blue-500 origin-bottom transform -translate-x-1/2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  const EmailAnimation = () => (
    <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
      <motion.div
        className="w-20 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-lg flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Mail className="h-8 w-8 text-white" />
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );

  const CalendarAnimation = () => (
    <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
      <motion.div
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Calendar className="h-8 w-8 text-white" />
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        4+
      </motion.div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-process-title">
            How <span className="gradient-text">DemandFlo Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-process-description">
            Three simple steps to fill your calendar with qualified sales conversations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
              data-testid={`step-${index + 1}`}
            >
              <div className="mb-8">
                {index === 0 && <SearchRadar />}
                {index === 1 && <EmailAnimation />}
                {index === 2 && <CalendarAnimation />}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2 translate-x-8"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see this in action for your business?
          </p>
          <a
            href="https://calendly.com/samueljong/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-get-started"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Get Your First Appointments
          </a>
        </motion.div>
      </div>
    </section>
  );
}
