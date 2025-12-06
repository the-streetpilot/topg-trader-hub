import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, BarChart3, Globe, Link2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Seamless Integration",
    description: "One-click connection with your Fortress FX trading account"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-Time Sync",
    description: "Instant trade data synchronization with zero delays"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Deep insights into your Fortress FX performance"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Connection",
    description: "Bank-grade encryption for all your trading data"
  }
];

const FortressFXSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="fortress-fx" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-50" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <motion.span
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Globe className="h-4 w-4" />
              Main Integration
            </motion.span>

            <motion.h2
              className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Powered by{" "}
              <span className="gradient-text-blue">Fortress FX</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience the ultimate trading journal integration with Fortress FX. 
              Automatically sync all your trades, analyze your performance, and unlock 
              insights that were previously impossible to discover.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="neon" size="xl">
                Connect Fortress FX
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card neon-border-hover rounded-2xl p-6"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.2, 0.9, 0.2, 1] }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 glass-card rounded-2xl p-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "100K+", label: "Trades Synced" },
            { value: "99.9%", label: "Uptime" },
            { value: "<1s", label: "Sync Speed" },
            { value: "256-bit", label: "Encryption" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text-blue">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FortressFXSection;