import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "./HeroScene";
import CountUp from "./CountUp";
import heroBg from "@/assets/hero-bg.png";
import { useState } from "react";
import InteractiveDemo from "./InteractiveDemo";

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 -z-20 opacity-30 dark:opacity-40"
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
            className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:mb-8 sm:gap-4 sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1 backdrop-blur-sm sm:px-4 sm:py-1.5">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
              <span className="font-medium text-foreground">4.8</span>
              <span className="text-muted-foreground">• 600+ Reviews</span>
            </div>
            <div className="rounded-full border border-border/50 bg-card/50 px-3 py-1 text-muted-foreground backdrop-blur-sm sm:px-4 sm:py-1.5">
              <span className="font-medium text-foreground">50K+</span> traders
            </div>
            <div className="hidden rounded-full border border-border/50 bg-card/50 px-3 py-1 text-muted-foreground backdrop-blur-sm sm:block sm:px-4 sm:py-1.5">
              <span className="font-medium text-foreground">20.2B+</span> trades journaled
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Everything you ever wanted to know about your trading...{" "}
            <span className="gradient-text-blue">but your spreadsheets never told you.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:mb-10 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Tradefxbook shows you the metrics that matter — and the behaviors that lead to profit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <a href="#contact">
              <Button variant="neon" size="lg">
                Get Started Now
              </Button>
            </a>
            <Button 
              variant="ghost" 
              size="lg" 
              className="group text-muted-foreground hover:text-foreground"
              onClick={() => setIsDemoOpen(true)}
            >
              <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              View Demo
            </Button>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:mt-24 sm:gap-6 lg:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
        >
          {[
            { value: 20.2, suffix: "B+", label: "Trades Journaled" },
            { value: 205, suffix: "K+", label: "Backtested Sessions" },
            { value: 1, suffix: "M+", label: "Trades Shared" },
            { value: 50, suffix: "K+", label: "Traders Onboard" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="neon-border-hover glass-card group rounded-lg p-4 text-center sm:rounded-xl sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: [0.2, 0.9, 0.2, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                <CountUp end={stat.value} duration={2} delay={1 + i * 0.2} />
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Interactive Demo Modal */}
      <InteractiveDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default Hero;
