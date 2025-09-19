import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Lock, Clock, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      revenueRange: formData.get("revenueRange") as string,
      message: formData.get("message") as string,
    };

    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Lock, text: "Secure & Private" },
    { icon: Clock, text: "30-Min Session" },
    { icon: Gift, text: "100% Free" },
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
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-cta-description">
            Start with 4 guaranteed appointments monthly. No contracts. No excuses. Just results.
            No appointments delivered = Full refund. Month to month. Cancel any time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-2xl border border-border max-w-2xl mx-auto"
          data-testid="contact-form-container"
        >
          <h3 className="text-2xl font-semibold mb-6">Book Your Free Strategy Session</h3>
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                required
                className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                data-testid="input-first-name"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                required
                className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                data-testid="input-last-name"
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="Business Email"
              required
              className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
              data-testid="input-email"
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
              data-testid="input-phone"
            />
            <Select name="revenueRange">
              <SelectTrigger className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200" data-testid="select-revenue-range">
                <SelectValue placeholder="Monthly Revenue Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k+">$100,000+</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              placeholder="Tell us about your business goals..."
              rows={4}
              required
              className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
              data-testid="textarea-message"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-white py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              data-testid="button-submit-consultation"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Book Free Consultation"}
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center" data-testid={`benefit-${benefit.text.toLowerCase().replace(/\s+/g, '-')}`}>
                <benefit.icon className="h-4 w-4 text-accent mr-2" />
                {benefit.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
