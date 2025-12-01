import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose your <span className="gradient-text-blue">trading edge</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start with a 14-day free trial. No credit card required.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          className="mb-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative h-7 w-14 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle billing period"
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
        </motion.div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "neon-glow-green border-2 border-neon-green bg-gradient-to-b from-neon-green/10 to-transparent"
                  : "glass-card neon-border-hover"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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

              <Button
                variant={plan.highlighted ? "neonGreen" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
