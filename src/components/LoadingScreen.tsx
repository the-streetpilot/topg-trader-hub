import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds
    const intervalTime = 50;
    const steps = totalDuration / intervalTime;
    const increment = 100 / steps;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return Math.min(prev + increment + (Math.random() * 0.5), 100);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
      >
        {/* Animated Chart Lines */}
        <div className="relative mb-12 h-32 w-64">
          <svg viewBox="0 0 200 80" className="h-full w-full">
            {/* Grid lines */}
            {[0, 20, 40, 60, 80].map((y, i) => (
              <motion.line
                key={y}
                x1="0"
                y1={y}
                x2="200"
                y2={y}
                stroke="hsl(var(--muted))"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
            
            {/* Chart line */}
            <motion.path
              d="M 0 60 Q 20 55 40 45 T 80 35 T 120 50 T 160 25 T 200 20"
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Area fill */}
            <motion.path
              d="M 0 60 Q 20 55 40 45 T 80 35 T 120 50 T 160 25 T 200 20 L 200 80 L 0 80 Z"
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Candles */}
            {[20, 50, 80, 110, 140, 170].map((x, i) => (
              <motion.g key={x}>
                <motion.rect
                  x={x - 2}
                  y={30 + Math.random() * 20}
                  width="4"
                  height={15 + Math.random() * 10}
                  fill={i % 2 === 0 ? "hsl(var(--neon-green))" : "hsl(var(--neon-red))"}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
                />
              </motion.g>
            ))}
            
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--neon-blue))" />
                <stop offset="100%" stopColor="hsl(var(--neon-green))" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--neon-blue))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold tracking-wider text-foreground">
            TOP<span className="gradient-text-blue">G</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Preparing your insights...</p>
        </motion.div>

        {/* Progress bar */}
        <div className="relative h-1 w-64 overflow-hidden rounded-full bg-muted/30">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-green"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 loading-bar opacity-50" />
        </div>

        {/* Percentage */}
        <motion.p
          className="mt-4 text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
