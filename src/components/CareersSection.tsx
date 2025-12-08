import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const jobs = [
    { title: "Senior React Developer", location: "Remote", type: "Full-time" },
    { title: "Product Designer", location: "Remote", type: "Full-time" },
    { title: "Customer Success Manager", location: "Remote", type: "Full-time" },
  ];

  return (
    <section id="careers" className="relative py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Careers</span>
          <h2 className="text-4xl font-extrabold text-foreground">Join our <span className="gradient-text-blue">team</span></h2>
        </motion.div>
        <div className="grid gap-4 max-w-2xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div key={job.title} className="glass-card neon-border-hover rounded-xl p-4 flex items-center justify-between" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="flex items-center gap-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <div><h3 className="font-semibold text-foreground">{job.title}</h3><p className="text-xs text-muted-foreground">{job.location} • {job.type}</p></div>
              </div>
              <Button variant="outline" size="sm">Apply</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
