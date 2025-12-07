import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { buttonFlyIn, easeOutExpo } from "@/lib/animations";

interface AnimatedButtonProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedButton = ({ children, delay = 0, className = "" }: AnimatedButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={buttonFlyIn.initial}
      animate={isInView ? buttonFlyIn.animate : buttonFlyIn.initial}
      transition={{ duration: 0.5, delay, ease: easeOutExpo }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;
