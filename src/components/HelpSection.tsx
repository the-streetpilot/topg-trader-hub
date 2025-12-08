import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, Book, MessageCircle } from "lucide-react";

const HelpSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="help" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Help Center</span>
          <h2 className="text-4xl font-extrabold text-foreground">How can we <span className="gradient-text-blue">help?</span></h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {[{ icon: <HelpCircle />, title: "FAQs", desc: "Find answers to common questions" }, { icon: <Book />, title: "Documentation", desc: "Learn how to use all features" }, { icon: <MessageCircle />, title: "Live Chat", desc: "Chat with our support team" }].map((item, i) => (
            <motion.div key={item.title} className="glass-card neon-border-hover rounded-2xl p-6 text-center" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">{item.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
