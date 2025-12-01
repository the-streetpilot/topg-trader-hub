import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

const brokers = [
  { name: "TD Ameritrade", autoSync: true },
  { name: "Interactive Brokers", autoSync: true },
  { name: "E*TRADE", autoSync: true },
  { name: "Charles Schwab", autoSync: true },
  { name: "Fidelity", autoSync: true },
  { name: "TradeStation", autoSync: true },
  { name: "Webull", autoSync: true },
  { name: "Robinhood", autoSync: false },
  { name: "Tastytrade", autoSync: true },
  { name: "Tradier", autoSync: true },
  { name: "Binance", autoSync: true },
  { name: "Coinbase", autoSync: true },
  { name: "MetaTrader 4", autoSync: false },
  { name: "MetaTrader 5", autoSync: false },
  { name: "NinjaTrader", autoSync: true },
  { name: "ThinkorSwim", autoSync: true },
];

const BrokersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrokers = brokers.filter((broker) =>
    broker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="brokers" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Integrations
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with <span className="gradient-text-blue">50+ brokers</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Seamlessly sync your trades from all major brokers and platforms
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          className="mx-auto mb-8 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search brokers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 rounded-xl border-border/50 bg-card/50 pl-11 backdrop-blur-sm focus:border-primary/50"
            />
          </div>
        </motion.div>

        {/* Brokers grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredBrokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              className="neon-border-hover glass-card group relative flex flex-col items-center justify-center rounded-xl p-4 text-center transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.03 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Auto sync badge */}
              {broker.autoSync && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon-green text-[8px] font-bold text-secondary-foreground">
                  <Check className="h-3 w-3" />
                </div>
              )}
              
              {/* Broker icon placeholder */}
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-muted/30 text-lg font-bold text-muted-foreground">
                {broker.name.charAt(0)}
              </div>
              
              <span className="text-xs font-medium text-foreground">{broker.name}</span>
              {broker.autoSync && (
                <span className="mt-1 text-[10px] text-neon-green">Auto Sync</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Browse all CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Browse all integrations
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrokersSection;
