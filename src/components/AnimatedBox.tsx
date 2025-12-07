import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { slideVariants, easeOutExpo, cardHover } from "@/lib/animations";

interface AnimatedBoxProps {
  children: ReactNode;
  direction?: "fromLeft" | "fromRight" | "fromTop" | "fromBottom";
  delay?: number;
  className?: string;
  hover?: boolean;
}

const AnimatedBox = ({
  children,
  direction = "fromLeft",
  delay = 0,
  className = "",
  hover = true
}: AnimatedBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: "-50px" });

  const variant = slideVariants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.exit}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
      whileHover={hover ? cardHover : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
