import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, Star } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    monthlyPrice: 29,
    yearlyPrice: 19,
    features: [
      "1 Trading Account",
      "Auto-sync with brokers",
      "Basic analytics",
      "10 Reports",
      "1GB Storage",
      "Community access",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For serious traders",
    monthlyPrice: 79,
    yearlyPrice: 59,
    features: [
      "Unlimited Accounts",
      "Auto-sync with brokers",
      "Advanced analytics",
      "50+ Reports",
      "Playbook access",
      "Backtesting & Replay",
      "5GB Storage",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For teams & institutions",
    monthlyPrice: 199,
    yearlyPrice: 149,
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "White-label options",
      "On-premise deployment",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can I try before I buy?",
    a: "Yes! We offer a 14-day free trial with full access to Pro features. No credit card required."
  },
  {
    q: "Can I change plans anytime?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time."
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 30-day money-back guarantee on all plans."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose your{" "}
            <span className="gradient-text-blue">trading edge</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start with a 14-day free trial. No credit card required.
          </motion.p>
        </div>

        {/* Toggle */}
        <AnimatedBox direction="fromTop" className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative h-7 w-14 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-foreground transition-transform ${
                isYearly ? "left-8" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="rounded-full bg-neon-green/20 px-3 py-1 text-xs font-semibold text-neon-green">
              Save 25%
            </span>
          )}
        </AnimatedBox>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <AnimatedBox
              key={plan.name}
              direction={["fromLeft", "fromBottom", "fromRight"][index] as any}
              delay={index * 0.15}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "neon-glow-green border-2 border-neon-green bg-gradient-to-b from-neon-green/10 to-transparent"
                  : "glass-card neon-border-hover"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neon-green px-4 py-1 text-xs font-bold text-secondary-foreground">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/month</span>
                {isYearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed annually (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className={`h-4 w-4 ${plan.highlighted ? "text-neon-green" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <AnimatedButton delay={0.3 + index * 0.1}>
                <Link to="/contact" className="w-full">
                  <Button
                    variant={plan.highlighted ? "neonGreen" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </Link>
              </AnimatedButton>
            </AnimatedBox>
          ))}
        </div>

        {/* Features Grid */}
        <AnimatedBox direction="fromBottom" className="mb-20">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">All plans include</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Zap className="h-5 w-5" />, title: "Real-time Sync", desc: "Auto-sync with 50+ brokers" },
              { icon: <Shield className="h-5 w-5" />, title: "Bank-grade Security", desc: "256-bit encryption" },
              { icon: <Users className="h-5 w-5" />, title: "Community Access", desc: "Join 50K+ traders" },
              { icon: <Star className="h-5 w-5" />, title: "Regular Updates", desc: "New features monthly" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedBox>

        {/* FAQs */}
        <AnimatedBox direction="fromBottom" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default Pricing;
