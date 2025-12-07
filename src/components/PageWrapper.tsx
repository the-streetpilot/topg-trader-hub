import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { pageTransition } from "@/lib/animations";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <Navbar />
      <main className="pt-24 pb-20">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default PageWrapper;
