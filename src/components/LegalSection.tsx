import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";

const LegalSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="legal" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Legal</span>
          <h2 className="text-4xl font-extrabold text-foreground">Legal <span className="gradient-text-blue">Information</span></h2>
        </motion.div>
        <div className="grid gap-4 max-w-2xl mx-auto">
          {["Privacy Policy", "Terms of Service", "Risk Disclaimer", "KYC/AML Policy"].map((item, i) => (
            <motion.div key={item} className="glass-card neon-border-hover rounded-xl p-4 flex items-center gap-4 cursor-pointer" initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
