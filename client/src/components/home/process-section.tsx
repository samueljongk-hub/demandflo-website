import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Strategy & Analysis",
      description: "Deep dive into your business goals, target audience, and current performance to create a customized strategy.",
      bgClass: "bg-primary"
    },
    {
      number: 2,
      title: "Campaign Setup",
      description: "Launch multi-channel campaigns with advanced targeting, compelling creatives, and optimized landing pages.",
      bgClass: "bg-accent"
    },
    {
      number: 3,
      title: "Lead Nurturing",
      description: "Automated sequences to nurture leads, build trust, and guide prospects through your sales funnel.",
      bgClass: "bg-secondary"
    },
    {
      number: 4,
      title: "Scale & Optimize",
      description: "Continuous optimization and scaling of successful campaigns to maximize ROI and drive consistent growth.",
      bgClass: "gradient-primary"
    }
  ];

  return (
    <section className="py-24" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-process-title">
            How We <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-description">
            Our proven 4-step process to transform your lead generation and scale your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              data-testid={`process-step-${step.number}`}
            >
              <div className={`w-16 h-16 ${step.bgClass} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
