import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does TopG trade for me?",
    answer: "No, TopG is a journaling and analytics platform. We help you track, analyze, and improve your trading — but all trading decisions are yours. We provide the insights, you make the trades.",
  },
  {
    question: "How secure is my data?",
    answer: "Your data is encrypted at rest and in transit using industry-standard AES-256 encryption. We use read-only API connections with brokers, meaning we can only view your trade data — never execute trades or access your funds. You own your data and can export or delete it anytime.",
  },
  {
    question: "Which brokers do you support?",
    answer: "We support 50+ brokers including TD Ameritrade, Interactive Brokers, E*TRADE, Charles Schwab, TradeStation, Webull, Tastytrade, Binance, Coinbase, MetaTrader 4/5, NinjaTrader, and many more. If your broker isn't listed, you can import trades via CSV.",
  },
  {
    question: "Can I try TopG before subscribing?",
    answer: "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start. You can also use our demo mode to explore the platform with sample trade data.",
  },
  {
    question: "How does the playbook feature work?",
    answer: "Playbooks are trading strategy templates. You can use our pre-built templates (like Break & Retest, Market DNA) or create your own. Each trade you log can be tagged with a playbook, and TopG will track performance metrics for each strategy separately — helping you identify your most profitable setups.",
  },
  {
    question: "What's included in the backtesting feature?",
    answer: "Our backtesting lets you replay trades tick-by-tick with adjustable playback speed (0.5x to 10x). You can view Level 2 depth, time & sales, and overlay your actual entries/exits to analyze execution quality. MAE (Maximum Adverse Excursion) and MFE (Maximum Favorable Excursion) are highlighted automatically.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all plans. If TopG isn't right for you, email support@topgjournal.com within 30 days of purchase for a full refund.",
  },
  {
    question: "Can I use TopG for crypto and forex?",
    answer: "Absolutely! TopG supports stocks, options, futures, forex, and cryptocurrency. Our analytics and reports work across all asset classes, and you can track multiple accounts and asset types in a single dashboard.",
  },
];

const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently asked <span className="gradient-text-blue">questions</span>
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card neon-border-hover rounded-xl border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
