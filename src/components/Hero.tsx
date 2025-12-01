import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "./HeroScene";
import CountUp from "./CountUp";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 -z-20 opacity-40"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <HeroScene />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust badges */}
          <motion.div
            className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">4.8</span>
              <span className="text-muted-foreground">• 600+ Reviews</span>
            </div>
            <div className="rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-muted-foreground backdrop-blur-sm">
              <span className="font-medium text-foreground">50K+</span> traders on board
            </div>
            <div className="rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-muted-foreground backdrop-blur-sm">
              <span className="font-medium text-foreground">20.2B+</span> trades journaled
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything you ever wanted to know about your trading...{" "}
            <span className="gradient-text-blue">but your spreadsheets never told you.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            TopG shows you the metrics that matter — and the behaviors that lead to profit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button variant="neon" size="lg" className="min-w-[200px] text-base">
              Get Started Now
            </Button>
            <Button variant="ghost" size="lg" className="group min-w-[200px] text-base text-muted-foreground hover:text-foreground">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View Demo
            </Button>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { value: 20.2, suffix: "B+", label: "Trades Journaled" },
            { value: 205, suffix: "K+", label: "Backtested Sessions" },
            { value: 1, suffix: "M+", label: "Trades Shared" },
            { value: 50, suffix: "K+", label: "Traders Onboard" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="neon-border-hover glass-card group rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                <CountUp end={stat.value} duration={2} delay={1 + i * 0.2} />
                {stat.suffix}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
