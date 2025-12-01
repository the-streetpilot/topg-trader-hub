import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { 
  Zap, 
  BarChart3, 
  FileText, 
  BookOpen, 
  PlayCircle, 
  StickyNote,
  Users
} from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-8 py-16 lg:flex-row lg:gap-16 ${reverse ? "lg:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.9, 0.2, 1] }}
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="neon-border-hover glass-card relative aspect-video overflow-hidden rounded-2xl p-6">
          {/* Mock UI based on feature type */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full">
            {index === 1 && <JournalingMock />}
            {index === 2 && <AnalyticsMock />}
            {index === 3 && <ReportsMock />}
            {index === 4 && <PlaybooksMock />}
            {index === 5 && <BacktestingMock />}
            {index === 6 && <NotebookMock />}
            {index === 7 && <CommunityMock />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mock UI Components
const JournalingMock = () => (
  <div className="flex h-full flex-col gap-3">
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-neon-green" />
      <span className="text-xs text-muted-foreground">Auto-synced</span>
    </div>
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-4 rounded-lg bg-accent/30 p-3">
        <div className={`h-2 w-2 rounded-full ${i === 1 ? "bg-neon-green" : i === 2 ? "bg-neon-red" : "bg-neon-blue"}`} />
        <div className="flex-1">
          <div className="h-2 w-20 rounded bg-muted-foreground/20" />
        </div>
        <div className={`text-xs font-medium ${i === 1 ? "text-neon-green" : i === 2 ? "text-neon-red" : "text-neon-blue"}`}>
          {i === 1 ? "+$340" : i === 2 ? "-$120" : "+$89"}
        </div>
      </div>
    ))}
  </div>
);

const AnalyticsMock = () => (
  <div className="flex h-full flex-col gap-4">
    <div className="grid grid-cols-3 gap-2">
      {["Win Rate", "Profit Factor", "Expectancy"].map((label, i) => (
        <div key={label} className="rounded-lg bg-accent/30 p-2 text-center">
          <div className="text-lg font-bold text-foreground">{i === 0 ? "67%" : i === 1 ? "2.4" : "$45"}</div>
          <div className="text-[10px] text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 rounded-lg bg-accent/20 p-3">
      <svg viewBox="0 0 100 40" className="h-full w-full">
        <path d="M 0 35 Q 20 30 30 25 T 50 20 T 70 28 T 100 10" fill="none" stroke="hsl(var(--neon-blue))" strokeWidth="2" />
        <path d="M 0 35 Q 20 30 30 25 T 50 20 T 70 28 T 100 10 L 100 40 L 0 40 Z" fill="url(#areaFill)" opacity="0.3" />
        <defs>
          <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--neon-blue))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
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

const PlaybooksMock = () => (
  <div className="flex h-full gap-3 overflow-hidden">
    {["Break & Retest", "Market DNA", "PO3+ADR"].map((name, i) => (
      <div key={name} className="flex-shrink-0 rounded-lg border border-border/50 bg-accent/30 p-3" style={{ width: "140px" }}>
        <div className="mb-2 text-xs font-semibold text-foreground">{name}</div>
        <div className="text-[10px] text-muted-foreground">Win: 72%</div>
        <div className="text-[10px] text-neon-green">Exp: +$34</div>
      </div>
    ))}
  </div>
);

const BacktestingMock = () => (
  <div className="flex h-full flex-col gap-3">
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {["⏮", "◀", "▶", "⏭"].map((icon, i) => (
          <button key={i} className="flex h-6 w-6 items-center justify-center rounded bg-accent/50 text-xs hover:bg-accent">
            {icon}
          </button>
        ))}
      </div>
      <div className="ml-2 text-xs text-muted-foreground">1x</div>
    </div>
    <div className="flex-1 rounded-lg bg-accent/20 p-2">
      <div className="h-full w-full rounded bg-gradient-to-r from-neon-green/20 via-transparent to-neon-red/20" />
    </div>
    <div className="h-1 rounded-full bg-muted">
      <div className="h-full w-1/3 rounded-full bg-primary" />
    </div>
  </div>
);

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

const CommunityMock = () => (
  <div className="flex h-full items-center justify-around">
    {[
      { label: "Members", value: "10K+" },
      { label: "Communities", value: "150+" },
      { label: "Webinars", value: "100+" },
    ].map(({ label, value }) => (
      <div key={label} className="text-center">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    ))}
  </div>
);

const features = [
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Automated Journaling",
    description: "Auto-sync with brokers, upload CSV, or manual entry. Unlimited accounts with automated statistics and daily snapshots.",
    features: [
      "Instant broker sync (50+ supported)",
      "Automatic P/L calculations",
      "Daily performance snapshots",
      "Unlimited trading accounts",
    ],
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    title: "Advanced Trade Analytics",
    description: "R-multiple, expectancy, running P/L, MAE/MFE, trade-rating, win-rate, profit factor — all calculated automatically.",
    features: [
      "Real-time R-multiple tracking",
      "Expectancy calculations",
      "MAE/MFE analysis",
      "Trade rating system",
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
  {
    icon: <BookOpen className="h-4 w-4" />,
    title: "Trading Playbooks",
    description: "Pre-built templates like Break & Retest, Market DNA, PO3+ADR — use them, modify them, and track performance.",
    features: [
      "Library of proven strategies",
      "Strategy performance tracking",
      "Custom playbook creation",
      "Community-shared templates",
    ],
  },
  {
    icon: <PlayCircle className="h-4 w-4" />,
    title: "Backtesting & Replay",
    description: "Replay trades tick-by-tick with Level 2 data and time-of-sales. Analyze what went right and what went wrong.",
    features: [
      "Tick-by-tick trade replay",
      "Adjustable playback speed",
      "Level 2 depth visualization",
      "Time & sales integration",
    ],
  },
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
    icon: <Users className="h-4 w-4" />,
    title: "Community & Mentoring",
    description: "Join 10K+ traders in our community. Access webinars, bootcamps, and mentor mode to learn from the best.",
    features: [
      "10,000+ active members",
      "Weekly live webinars",
      "Mentor matching program",
      "Private trading groups",
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
            className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to{" "}
            <span className="gradient-text-blue">master your trading</span>
          </motion.h2>
        </div>

        {/* Feature cards */}
        {features.map((feature, index) => (
          <div key={feature.title} id={index === 0 ? "journaling" : index === 1 ? "analytics" : index === 2 ? "reports" : index === 3 ? "playbooks" : index === 4 ? "backtesting" : index === 5 ? "notebook" : "community"}>
            <FeatureCard
              {...feature}
              index={index + 1}
              reverse={index % 2 === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
