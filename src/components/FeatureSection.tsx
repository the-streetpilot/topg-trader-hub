import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { 
  Zap, 
  BarChart3, 
  FileText, 
  StickyNote,
  Users,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const MainFeatureCard = ({ icon, title, description, features, gradient }: MainFeatureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl p-8 lg:p-12 ${gradient}`}
      initial={{ opacity: 0, scale: 0.9, y: 60 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 60 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-4 right-4">
        <Sparkles className="h-8 w-8 text-primary/30 animate-pulse" />
      </div>
      
      <div className="relative">
        <motion.div
          className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/20 p-4"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        >
          <span className="text-primary [&>svg]:h-8 [&>svg]:w-8">{icon}</span>
        </motion.div>
        
        <motion.h3
          className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="mb-8 text-lg text-muted-foreground max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
        
        <ul className="grid gap-3 sm:grid-cols-2 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                ✓
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#contact">
            <Button variant="neon" size="lg">
              Learn More
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
  reverse?: boolean;
}

const FeatureCard = ({ icon, title, description, features, index, reverse }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-8 py-16 lg:flex-row lg:gap-16 ${reverse ? "lg:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, x: reverse ? 120 : -120 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 120 : -120 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-primary">{icon}</span>
          <span className="text-sm font-medium text-muted-foreground">Feature {String(index).padStart(2, "0")}</span>
        </motion.div>
        
        <h3 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
          {title}
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 20 : -20 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -100 : 100 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.9, 0.2, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="neon-border-hover glass-card relative aspect-video overflow-hidden rounded-2xl p-6">
          {/* Mock UI based on feature type */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full">
            {index === 4 && <NotebookMock />}
            {index === 5 && <ReportsMock />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mock UI Components
const NotebookMock = () => (
  <div className="flex h-full flex-col gap-2">
    <div className="flex gap-2 border-b border-border/30 pb-2">
      {["B", "I", "U", "📷"].map((icon, i) => (
        <button key={i} className="h-6 w-6 rounded bg-accent/30 text-xs hover:bg-accent">{icon}</button>
      ))}
    </div>
    <div className="flex-1 text-left text-xs text-muted-foreground">
      <p className="mb-2">Entry was clean, waited for confirmation...</p>
      <div className="h-12 w-full rounded bg-accent/30" />
    </div>
  </div>
);

const ReportsMock = () => (
  <div className="grid h-full grid-cols-3 gap-2">
    {["P/L by Day", "By Time", "By Symbol", "Risk", "Duration", "More..."].map((label, i) => (
      <div key={label} className="neon-border-hover flex items-center justify-center rounded-lg bg-accent/30 p-2 text-center transition-all hover:bg-accent/50">
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    ))}
  </div>
);

// Main features - Journaling, Analytics, Community
const mainFeatures = [
  {
    icon: <Zap />,
    title: "Automated Journaling",
    description: "Auto-sync with brokers, upload CSV, or manual entry. Unlimited accounts with automated statistics and daily snapshots.",
    features: [
      "Instant broker sync (50+ supported)",
      "Automatic P/L calculations",
      "Daily performance snapshots",
      "Unlimited trading accounts",
    ],
    gradient: "glass-card border-2 border-primary/20",
  },
  {
    icon: <BarChart3 />,
    title: "Advanced Trade Analytics",
    description: "R-multiple, expectancy, running P/L, MAE/MFE, trade-rating, win-rate, profit factor — all calculated automatically.",
    features: [
      "Real-time R-multiple tracking",
      "Expectancy calculations",
      "MAE/MFE analysis",
      "Trade rating system",
    ],
    gradient: "glass-card border-2 border-primary/20",
  },
  {
    icon: <Users />,
    title: "Community & Mentoring",
    description: "Join 10K+ traders in our community. Access webinars, bootcamps, and mentor mode to learn from the best.",
    features: [
      "10,000+ active members",
      "Weekly live webinars",
      "Mentor matching program",
      "Private trading groups",
    ],
    gradient: "glass-card border-2 border-primary/20",
  },
];

// Secondary features (removed Playbooks and Backtesting)
const secondaryFeatures = [
  {
    icon: <StickyNote className="h-4 w-4" />,
    title: "Notebook & Templates",
    description: "Rich-text editor with image attachments and templates. Link notes to specific trades for contextual analysis.",
    features: [
      "Rich text formatting",
      "Image & screenshot attachments",
      "Trade-linked notes",
      "Customizable templates",
    ],
  },
  {
    icon: <FileText className="h-4 w-4" />,
    title: "50+ Data-Driven Reports",
    description: "Drill down into best/worst days, price & quantity analysis, time & duration metrics, options expiry, and risk reports.",
    features: [
      "Performance by day/time/symbol",
      "Risk metrics dashboard",
      "Options-specific reports",
      "Custom date ranges",
    ],
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.span>
          <motion.h2
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Everything you need to{" "}
            <motion.span 
              className="gradient-text-blue inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              master your trading
            </motion.span>
          </motion.h2>
        </div>

        {/* Main Features - Enhanced Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20" id="journaling">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              id={index === 1 ? "analytics" : index === 2 ? "community" : undefined}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <MainFeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* Secondary Feature cards with slide animations */}
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            And much more...
          </motion.h3>
          {secondaryFeatures.map((feature, index) => (
            <div key={feature.title} id={index === 0 ? "notebook" : "reports"}>
              <FeatureCard
                {...feature}
                index={index + 4}
                reverse={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
