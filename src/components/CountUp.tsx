import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
}

const CountUp = ({ end, duration = 2, delay = 0, decimals = 1 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = Date.now() + delay * 1000;
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / (duration * 1000);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(end * easeOut);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, delay]);

  const displayValue = end >= 1 
    ? count.toFixed(end < 10 ? decimals : 0)
    : count.toFixed(decimals);

  return <span ref={ref}>{displayValue}</span>;
};

export default CountUp;
