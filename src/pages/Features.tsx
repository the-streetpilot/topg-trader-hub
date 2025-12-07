import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  BookOpen, 
  PlayCircle, 
  StickyNote, 
  FileText, 
  Users, 
  Shield,
  TrendingUp,
  Target,
  Clock,
  Layers
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Automated Journaling",
    description: "Auto-sync trades from 50+ brokers or upload CSV. Zero manual entry required.",
    benefits: ["50+ broker integrations", "Automatic P/L calculations", "Daily performance snapshots", "Unlimited accounts"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "R-multiple, expectancy, MAE/MFE, and 30+ metrics calculated automatically.",
    benefits: ["Real-time R-multiple", "Win rate analysis", "Trade rating system", "Custom metrics"],
    color: "from-neon-green/20 to-neon-green/5"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "50+ Reports",
    description: "Drill down into performance by day, time, symbol, duration, and more.",
    benefits: ["P/L by timeframe", "Symbol analysis", "Risk reports", "Custom date ranges"],
    color: "from-primary/20 to-neon-green/10"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Trading Playbooks",
    description: "Pre-built strategy templates. Track performance by setup, not just by trade.",
    benefits: ["Strategy templates", "Performance tracking", "Custom playbooks", "Community sharing"],
    color: "from-neon-blue/20 to-neon-blue/5"
  },
  {
    icon: <PlayCircle className="h-8 w-8" />,
    title: "Backtesting & Replay",
    description: "Replay trades tick-by-tick. Analyze execution with Level 2 and time & sales.",
    benefits: ["Tick-by-tick replay", "Adjustable speed", "Level 2 depth", "Execution analysis"],
    color: "from-primary/20 to-neon-green/10"
  },
  {
    icon: <StickyNote className="h-8 w-8" />,
    title: "Notebook & Templates",
    description: "Rich-text notes linked to trades. Capture insights with images and templates.",
    benefits: ["Rich text editor", "Image attachments", "Trade linking", "Custom templates"],
    color: "from-neon-green/20 to-primary/10"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community & Mentoring",
    description: "Join 50K+ traders. Access webinars, mentorship, and private trading groups.",
    benefits: ["50K+ members", "Weekly webinars", "Mentor matching", "Private groups"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security & Privacy",
    description: "Bank-grade encryption. Read-only broker connections. Your data, your control.",
    benefits: ["256-bit encryption", "Read-only access", "Data export", "GDPR compliant"],
    color: "from-neon-red/20 to-neon-red/5"
  },
];

const additionalFeatures = [
  { icon: <TrendingUp />, title: "Real-time Sync", desc: "Trades sync automatically" },
  { icon: <Target />, title: "Goal Tracking", desc: "Set and track trading goals" },
  { icon: <Clock />, title: "Session Analysis", desc: "Analyze by trading session" },
  { icon: <Layers />, title: "Multi-Account", desc: "Track unlimited accounts" },
];

const Features = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to{" "}
            <span className="gradient-text-blue">master trading</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From automated journaling to advanced analytics, Tradefxbook gives you the tools 
            to understand your trading like never before.
          </motion.p>
        </div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <AnimatedBox
              key={feature.title}
              direction={["fromLeft", "fromRight", "fromBottom", "fromTop"][index % 4] as any}
              delay={index * 0.1}
              className={`glass-card neon-border-hover rounded-2xl p-8 bg-gradient-to-br ${feature.color}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card/50 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </AnimatedBox>
          ))}
        </div>

        {/* Additional Features */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Plus much more...</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedBox>

        {/* CTA */}
        <AnimatedBox direction="fromBottom" className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to transform your trading?</h2>
          <p className="text-muted-foreground mb-8">Start your free 14-day trial today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton delay={0.1}>
              <Link to="/contact">
                <Button variant="neon" size="xl">Start Free Trial</Button>
              </Link>
            </AnimatedButton>
            <AnimatedButton delay={0.2}>
              <Link to="/pricing">
                <Button variant="outline" size="xl">View Pricing</Button>
              </Link>
            </AnimatedButton>
          </div>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default Features;
