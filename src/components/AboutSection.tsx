import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About Us
          </span>
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Built by traders, <span className="gradient-text-blue">for traders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We understand the challenges of trading because we've lived them. Tradefxbook was born from our own frustration with spreadsheets and lack of actionable insights.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Target />, title: "Our Mission", desc: "Empower traders with data-driven insights to make better decisions." },
            { icon: <Users />, title: "50K+ Traders", desc: "A growing community of traders improving every day." },
            { icon: <TrendingUp />, title: "20B+ Trades", desc: "Analyzed and journaled to help traders find their edge." },
            { icon: <Award />, title: "Award Winning", desc: "Recognized as the #1 trading journal by industry experts." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card neon-border-hover rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
