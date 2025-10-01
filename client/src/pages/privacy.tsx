import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16" data-testid="page-privacy">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6" data-testid="text-privacy-hero-title">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-privacy-hero-description">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 id="introduction" className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Demand Flo ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.demandflo.ai or use our AI-powered lead generation and email outreach services.
                </p>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary">Our Services:</p>
                  <p className="text-muted-foreground">
                    We provide AI-driven B2B lead generation, prospect data enrichment, and hyper-personalized email outreach campaigns to help businesses connect with qualified prospects.
                  </p>
                </div>
              </div>

              <div>
                <h2 id="information-collect" className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3">Client Information</h3>
                <p className="text-muted-foreground mb-4">When you engage our services, we collect:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Business contact information (name, email, phone, company)</li>
                  <li>Billing and payment information</li>
                  <li>Service preferences and requirements</li>
                  <li>Ideal Customer Profile (ICP) specifications</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Prospect Data (On Behalf of Clients)</h3>
                <p className="text-muted-foreground mb-4">For our lead generation services, we collect and process:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Professional contact information (names, titles, emails, phone numbers)</li>
                  <li>Company information (names, websites, industry, size, location)</li>
                  <li>LinkedIn profiles and professional backgrounds</li>
                  <li>Public business information and digital presence data</li>
                  <li>Intent signals and engagement indicators</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Website Information</h3>
                <p className="text-muted-foreground mb-4">When you visit our website, we may collect:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>IP address and location data</li>
                  <li>Browser type and device information</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">AI Processing Data</h3>
                <p className="text-muted-foreground mb-4">Our AI systems process:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Prospect research and enrichment data</li>
                  <li>Email personalization and content generation</li>
                  <li>Campaign performance and engagement metrics</li>
                  <li>Lead scoring and qualification data</li>
                </ul>
              </div>

              <div>
                <h2 id="how-we-use" className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold mb-3">For Our Clients:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Provide lead generation and email outreach services</li>
                  <li>Process payments and manage accounts</li>
                  <li>Communicate about services and support</li>
                  <li>Improve our AI algorithms and service quality</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">For Prospect Data Processing:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Identify and qualify potential leads</li>
                  <li>Enrich prospect profiles with public information</li>
                  <li>Generate hyper-personalized email content</li>
                  <li>Track campaign performance and engagement</li>
                  <li>Deliver qualified meetings to clients</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">AI and Analytics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Train and improve our AI personalization algorithms</li>
                  <li>Analyze campaign effectiveness and optimization</li>
                  <li>Generate insights and reporting for clients</li>
                  <li>Develop new features and capabilities</li>
                </ul>
              </div>

              <div>
                <h2 id="sharing" className="text-3xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg mb-6">
                  <p className="font-semibold text-green-800 dark:text-green-300">We DO NOT Sell Personal Information</p>
                </div>

                <h3 className="text-xl font-semibold mb-3">We May Share Information With:</h3>
                
                <p className="font-semibold mb-2">Service Providers:</p>
                <p className="text-muted-foreground mb-2">Third-party vendors who assist with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Email delivery and infrastructure</li>
                  <li>Data enrichment and verification</li>
                  <li>Payment processing</li>
                  <li>Cloud hosting and storage</li>
                  <li>Analytics and performance tracking</li>
                </ul>

                <p className="font-semibold mb-2">Clients:</p>
                <p className="text-muted-foreground mb-6">We share prospect contact information and meeting details with our clients as part of our service delivery.</p>

                <p className="font-semibold mb-2">Legal Requirements:</p>
                <p className="text-muted-foreground mb-6">We may disclose information when required by law, regulation, legal process, or governmental request.</p>

                <p className="font-semibold mb-2">Business Transfers:</p>
                <p className="text-muted-foreground">In connection with any merger, sale, or transfer of our business assets.</p>
              </div>

              <div>
                <h2 id="retention" className="text-3xl font-bold mb-4">5. Data Retention</h2>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Client Data:</p>
                    <p className="text-muted-foreground">Retained for the duration of our business relationship plus 3 years for legal and accounting purposes.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Prospect Data:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Active campaign data retained during service period</li>
                      <li>Delivered meeting contacts shared with clients for their ongoing use</li>
                      <li>Undelivered prospect data deleted within 90 days of campaign completion</li>
                      <li>Analytics and performance data retained in anonymized form</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Website Data:</p>
                    <p className="text-muted-foreground">Analytics and usage data retained for up to 2 years.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 id="rights" className="text-3xl font-bold mb-4">6. Your Privacy Rights</h2>
                
                <h3 className="text-xl font-semibold mb-3">California Residents (CCPA Rights):</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li><strong>Right to Know:</strong> Request information about data collection and use</li>
                  <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                  <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we don't sell data)</li>
                  <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of exercising rights</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">All Users:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">For Prospects:</h3>
                <p className="text-muted-foreground mb-2">If you've been contacted through our client campaigns:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Unsubscribe:</strong> Use the unsubscribe link in emails</li>
                  <li><strong>Opt-Out:</strong> Contact us to opt out of future campaigns</li>
                  <li><strong>Deletion:</strong> Request removal from our systems</li>
                </ul>
              </div>

              <div>
                <h2 id="security" className="text-3xl font-bold mb-4">7. Data Security</h2>
                <p className="text-muted-foreground mb-4">We implement industry-standard security measures including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure cloud infrastructure and access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300">Note:</p>
                  <p className="text-yellow-700 dark:text-yellow-400">No method of transmission or storage is 100% secure. We cannot guarantee absolute security.</p>
                </div>
              </div>

              <div>
                <h2 id="contact" className="text-3xl font-bold mb-4">8. Contact Information</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2">Email: <a href="mailto:legal@demandflo.ai" className="text-primary hover:underline">legal@demandflo.ai</a></p>
                  <p className="text-muted-foreground">Website: <a href="https://www.demandflo.ai" className="text-primary hover:underline">www.demandflo.ai</a></p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. Changes will be posted on this page. Continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}