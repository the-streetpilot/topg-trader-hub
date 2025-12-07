import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "10 Common Trading Mistakes and How to Avoid Them",
    excerpt: "Learn from the most frequent errors traders make and discover actionable strategies to overcome them.",
    category: "Trading Psychology",
    author: "Alex Morgan",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Mastering Risk Management: The Key to Consistent Profits",
    excerpt: "Discover why risk management is the cornerstone of successful trading and how to implement it effectively.",
    category: "Risk Management",
    author: "Sarah Chen",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    featured: true
  },
  {
    title: "How to Build a Trading Playbook That Actually Works",
    excerpt: "Step-by-step guide to creating and maintaining a trading playbook that improves your consistency.",
    category: "Strategy",
    author: "Marcus Johnson",
    date: "Dec 1, 2024",
    readTime: "10 min read",
    featured: true
  },
  {
    title: "Understanding Your Trading Statistics",
    excerpt: "A deep dive into the key metrics every trader should track and what they reveal about your performance.",
    category: "Analytics",
    author: "Emily Rodriguez",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "The Psychology Behind Winning Trades",
    excerpt: "Explore the mental frameworks that separate profitable traders from the rest.",
    category: "Trading Psychology",
    author: "Alex Morgan",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "Fortress FX Integration: Complete Setup Guide",
    excerpt: "Everything you need to know to connect your Fortress FX account with Tradefxbook.",
    category: "Tutorials",
    author: "Sarah Chen",
    date: "Nov 22, 2024",
    readTime: "4 min read",
    featured: false
  },
];

const categories = [
  "All Posts",
  "Trading Psychology",
  "Risk Management",
  "Strategy",
  "Analytics",
  "Tutorials",
  "News"
];

const Blog = () => {
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
            Blog
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trading{" "}
            <span className="gradient-text-blue">Insights & Tips</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert advice, strategies, and insights to help you become a better trader.
          </motion.p>
        </div>

        {/* Categories */}
        <AnimatedBox direction="fromTop" className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-accent/50 text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedBox>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.filter(p => p.featured).map((post, index) => (
            <AnimatedBox
              key={post.title}
              direction={["fromLeft", "fromBottom", "fromRight"][index] as any}
              delay={index * 0.1}
              className="glass-card neon-border-hover rounded-2xl overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-neon-green/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📊</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </AnimatedBox>
          ))}
        </div>

        {/* More Posts */}
        <AnimatedBox direction="fromBottom" className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">More Articles</h2>
        </AnimatedBox>
        <div className="space-y-4 mb-12">
          {blogPosts.filter(p => !p.featured).map((post, index) => (
            <AnimatedBox
              key={post.title}
              direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
              delay={index * 0.1}
              className="glass-card neon-border-hover rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-start group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-accent text-muted-foreground text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <span>{post.readTime}</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </AnimatedBox>
          ))}
        </div>

        {/* Newsletter */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-3xl p-8 lg:p-12 text-center bg-gradient-to-br from-primary/10 to-transparent">
          <h2 className="text-2xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get weekly trading insights, tips, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-accent/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <motion.button
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default Blog;
