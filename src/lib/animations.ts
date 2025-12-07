// Shared animation variants for consistent, smooth animations across the app

export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeOutQuart = [0.25, 1, 0.5, 1];
export const springConfig = { type: "spring", stiffness: 100, damping: 15 };

// Direction-based slide animations
export const slideVariants = {
  fromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  },
  fromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  },
  fromTop: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  },
  fromBottom: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 }
  }
};

// Button fly-in animation
export const buttonFlyIn = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 30, scale: 0.9 }
};

// Card hover effect
export const cardHover = {
  scale: 1.02,
  y: -5,
  transition: { duration: 0.3, ease: easeOutQuart }
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Fade scale animation
export const fadeScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: easeOutExpo }
};

// Get direction-based animation for alternating sections
export const getSlideDirection = (index: number) => {
  const directions = ['fromLeft', 'fromRight', 'fromTop', 'fromBottom'];
  return directions[index % 4];
};
