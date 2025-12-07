import { motion } from "framer-motion";
import { Search, Book, Video, MessageCircle, FileText, HelpCircle, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: <Book className="h-6 w-6" />,
    title: "Getting Started",
    description: "New to Tradefxbook? Start here with our beginner guides.",
    articles: ["Quick Start Guide", "Setting Up Your Account", "Connecting Your First Broker", "Understanding the Dashboard"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Tutorials",
    description: "Visual guides to help you master every feature.",
    articles: ["Platform Overview", "Trade Analysis Walkthrough", "Creating Playbooks", "Using Reports"],
    color: "from-neon-green/20 to-neon-green/5"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Broker Integrations",
    description: "Connect and sync with 50+ supported brokers.",
    articles: ["Supported Brokers List", "Auto-Sync Setup", "CSV Import Guide", "Fortress FX Integration"],
    color: "from-primary/20 to-neon-green/10"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Features & Tools",
    description: "Deep dive into our analytics and journaling tools.",
    articles: ["Trade Journal", "Analytics Dashboard", "Playbook Builder", "Backtesting & Replay"],
    color: "from-neon-blue/20 to-neon-blue/5"
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Troubleshooting",
    description: "Solutions to common issues and questions.",
    articles: ["Sync Issues", "Login Problems", "Data Accuracy", "Performance Tips"],
    color: "from-neon-red/20 to-neon-red/5"
  },
];

const popularArticles = [
  "How to connect Interactive Brokers",
  "Understanding your Win Rate",
  "Setting up automated journaling",
  "Interpreting the P/L curve",
  "Creating custom playbooks",
  "Exporting your trade data"
];

const HelpCenter = () => {
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
            Help Center
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How can we{" "}
            <span className="gradient-text-blue">help you?</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers, tutorials, and guides to get the most out of Tradefxbook.
          </motion.p>

          {/* Search */}
          <motion.div
            className="max-w-xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-12 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary shadow-lg"
            />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <AnimatedBox
              key={category.title}
              direction={["fromLeft", "fromTop", "fromRight", "fromBottom", "fromLeft"][index] as any}
              delay={index * 0.1}
              className={`glass-card neon-border-hover rounded-2xl p-6 bg-gradient-to-br ${category.color}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card/50 text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article) => (
                  <li key={article}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedBox>
          ))}
        </div>

        {/* Popular Articles */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, i) => (
              <motion.a
                key={article}
                href="#"
                className="flex items-center gap-3 p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {article}
                </span>
              </motion.a>
            ))}
          </div>
        </AnimatedBox>

        {/* Contact CTA */}
        <AnimatedBox direction="fromBottom" className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support
              </motion.button>
            </Link>
            <motion.button
              className="px-8 py-3 rounded-xl bg-accent/50 text-foreground font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Discord Community
            </motion.button>
          </div>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default HelpCenter;
