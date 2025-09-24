import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/animated-card";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes in mind. We focus on ROI and sustainable growth."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your business goals."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We deliver enterprise-level solutions with meticulous attention to detail and professional execution."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We stay ahead of industry trends and continuously evolve our strategies for maximum effectiveness."
    }
  ];

  const stats = [
    { value: "100%", label: "Client Success Rate", description: "Every client achieves qualified appointment goals" },
    { value: "4+", label: "Appointments Monthly", description: "Guaranteed qualified calls delivered each month" },
    { value: "30", label: "Days Average", description: "Time to see consistent appointment flow" },
    { value: "24/7", label: "Campaign Monitoring", description: "Continuous optimization and performance tracking" }
  ];

  const achievements = [
    "Inc. 5000 Fastest Growing Companies",
    "Marketing Excellence Award 2024",
    "Top Lead Generation Agency",
    "Customer Success Champion",
    "Innovation in Marketing Technology"
  ];

  return (
    <div className="min-h-screen pt-16" data-testid="page-about">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6" data-testid="text-about-hero-title">
              Transforming Businesses with <span className="gradient-text">Premium Lead Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-hero-description">
              Since 2018, DemandFlo has been at the forefront of lead generation innovation, helping businesses 
              scale from startup to enterprise with data-driven strategies and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-mission-title">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-mission-description">
                To democratize premium lead generation by making enterprise-level marketing strategies accessible 
                to businesses of all sizes. We believe every company deserves the opportunity to scale and succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines decades of experience with cutting-edge technology to deliver results that 
                matter. We're not just a service provider – we're your growth partner.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <Zap className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Why Choose DemandFlo?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    Proven track record with 500+ successful clients
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    Data-driven strategies that deliver measurable ROI
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    Dedicated team of marketing experts
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    Cutting-edge technology and automation
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-values-title">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard
                  className="h-full text-center"
                  data-testid={`value-card-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-stats-title">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stats-description">
              Real numbers that demonstrate our commitment to driving measurable results
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

      {/* Achievements */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-achievements-title">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-achievements-description">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 text-center border border-border"
                data-testid={`achievement-${achievement.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold">{achievement}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-about-cta-title">
              Ready to <span className="gradient-text">Partner with Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-cta-description">
              Join the hundreds of businesses that have transformed their growth with DemandFlo. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  data-testid="button-start-partnership"
                >
                  Start Your Partnership
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  data-testid="button-explore-services"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
