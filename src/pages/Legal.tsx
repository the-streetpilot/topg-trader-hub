import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

const sections = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Terms of Service",
    content: `By accessing and using Tradefxbook ("the Service"), you agree to be bound by these Terms of Service.

1. Account Registration
You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials.

2. Acceptable Use
You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to transmit harmful or malicious content.

3. Subscription & Payments
Paid plans are billed in advance. You may cancel at any time, and cancellation takes effect at the end of the current billing period.

4. Data & Privacy
Your use of the Service is also governed by our Privacy Policy. We collect and process data as described therein.

5. Intellectual Property
The Service and its original content are and will remain the exclusive property of Tradefxbook and its licensors.

6. Limitation of Liability
Tradefxbook shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

7. Changes to Terms
We reserve the right to modify these Terms at any time. Continued use of the Service constitutes acceptance of modified Terms.`
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy Policy",
    content: `Tradefxbook ("we", "us", "our") is committed to protecting your privacy.

Information We Collect:
- Account information (name, email, password)
- Trading data synced from your broker connections
- Usage data and analytics
- Payment information (processed by Stripe)

How We Use Your Information:
- To provide and maintain the Service
- To analyze and improve our features
- To communicate with you about your account
- To comply with legal obligations

Data Security:
We use industry-standard 256-bit encryption to protect your data both in transit and at rest. We use read-only API connections with brokers.

Data Retention:
We retain your data for as long as your account is active. You may request deletion of your data at any time.

Your Rights:
You have the right to access, correct, or delete your personal data. Contact support@tradefxbook.com for requests.`
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "KYC/AML Policy",
    content: `Tradefxbook is committed to preventing money laundering and terrorist financing.

While Tradefxbook is a trading journal and analytics platform (not a financial institution), we may implement KYC procedures for:
- Enterprise accounts
- High-volume API users
- Reseller partnerships

We cooperate with law enforcement agencies and regulatory bodies as required by law.

If you have questions about our compliance procedures, please contact compliance@tradefxbook.com.`
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Risk Disclaimer",
    content: `IMPORTANT: Please read this disclaimer carefully.

Trading in financial markets involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.

Tradefxbook Does Not:
- Provide investment advice
- Execute trades on your behalf
- Guarantee trading profits
- Recommend specific securities or strategies

Tradefxbook Does:
- Provide journaling and analytics tools
- Help you track and analyze your own trading
- Offer educational resources
- Connect with your broker using read-only access

Your trading decisions are your own responsibility. Always consult with a qualified financial advisor before making investment decisions.

By using Tradefxbook, you acknowledge that you understand and accept the risks involved in trading.`
  },
];

const Legal = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Legal{" "}
            <span className="gradient-text-blue">Information</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Important legal documents and policies for using Tradefxbook.
          </motion.p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <AnimatedBox
              key={section.title}
              direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
              delay={index * 0.1}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                {section.content}
              </div>
            </AnimatedBox>
          ))}
        </div>

        {/* Last Updated */}
        <AnimatedBox direction="fromBottom" className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Last updated: December 2024
          </p>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default Legal;
