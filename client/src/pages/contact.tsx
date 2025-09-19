import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, CalendarCheck, MessageSquare, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
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
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: CalendarCheck,
      title: "Book a Consultation",
      description: "Schedule a free 30-minute strategy session",
      action: "Schedule Now",
      color: "bg-primary"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team during business hours",
      action: "Start Chat",
      color: "bg-accent"
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      color: "bg-secondary"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Business District", "San Francisco, CA 94105", "United States"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@demandflo.co", "Response within 24 hours"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen pt-16" data-testid="page-contact">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6" data-testid="text-contact-hero-title">
              Let's <span className="gradient-text">Start the Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-contact-hero-description">
              Ready to transform your lead generation? Our team is here to help you achieve your growth goals. 
              Choose the best way to connect with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-lift transition-all duration-300 h-full" data-testid={`contact-method-${method.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  <Button className="w-full" data-testid={`button-${method.action.toLowerCase().replace(/\s+/g, '-')}`}>
                    {method.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8" data-testid="contact-form-card">
                <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
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
                      <SelectValue placeholder="Current Monthly Revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k+">$500,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your business goals and how we can help..."
                    rows={6}
                    required
                    className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                    data-testid="textarea-message"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're here to help you scale your business with premium lead generation strategies. 
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                    data-testid={`contact-info-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 bg-muted">
                <h3 className="font-semibold mb-4">Visit Our Office</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted">
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
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I expect to see results?",
                answer: "Most clients see initial results within 2-4 weeks, with significant improvements typically visible within 60-90 days."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work with businesses across all industries, with particular expertise in B2B services, SaaS, healthcare, and professional services."
              },
              {
                question: "Do you offer custom pricing for larger businesses?",
                answer: "Yes, we provide custom enterprise solutions tailored to your specific needs and scale requirements."
              },
              {
                question: "What's included in the free consultation?",
                answer: "A comprehensive analysis of your current lead generation, personalized strategy recommendations, and a custom growth plan."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6" data-testid={`faq-${index}`}>
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
