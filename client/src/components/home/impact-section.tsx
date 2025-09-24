import { motion } from "framer-motion";

export default function ImpactSection() {
  const stats = [
    { value: "100%", label: "Client Success Rate", description: "Every client achieves qualified appointment goals" },
    { value: "4+", label: "Appointments Monthly", description: "Guaranteed qualified calls delivered each month" },
    { value: "30", label: "Days Average", description: "Time to see consistent appointment flow" },
    { value: "24/7", label: "Campaign Monitoring", description: "Continuous optimization and performance tracking" }
  ];

  return (
    <section className="py-24 bg-muted" data-testid="impact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-impact-title">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-impact-description">
            Real numbers that demonstrate our commitment to driving measurable results for every client
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}