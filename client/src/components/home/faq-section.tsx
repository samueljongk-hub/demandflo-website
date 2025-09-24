import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients see initial appointments within 2-4 weeks. We guarantee a minimum of 4 qualified calls monthly from the start, with most clients scaling to much more as we optimize your campaigns."
    },
    {
      question: "What if you don't deliver the guaranteed qualified calls?",
      answer: "If we don't deliver your minimum 4 qualified calls, you get a full refund. In hundreds of campaigns, we've never failed to deliver. Not once."
    },
    {
      question: "How is this different from hiring an SDR?",
      answer: "70% cost reduction, zero management headaches, and predictable results. No training, no salary, no benefits - just guaranteed appointments delivered monthly."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No contracts required. We operate month-to-month because when you deliver results, clients don't leave. Cancel anytime with 30 days notice."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with B2B companies across all industries. Our hyper-personalization approach adapts to any business model and target audience."
    },
    {
      question: "How many emails do you actually send?",
      answer: "Thousands of hyper-personalized emails daily. Not templates, not mass blasts - each email is uniquely crafted for the individual recipient using our AI research engine."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-faq-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-description">
            Get answers to common questions about our guaranteed appointment service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                data-testid={`faq-question-${index}`}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                  data-testid={`faq-answer-${index}`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}