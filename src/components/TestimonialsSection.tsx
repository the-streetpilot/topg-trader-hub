import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Day Trader",
    avatar: "MC",
    profit: "+$47,230",
    content: "TopG transformed my trading. The analytics showed me I was overtrading Fridays - fixing that alone boosted my monthly P/L by 40%.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Options Trader",
    avatar: "SW",
    profit: "+$23,890",
    content: "The playbook feature is incredible. I can finally see which setups actually work and which ones I should stop trading.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Swing Trader",
    avatar: "JR",
    profit: "+$89,450",
    content: "Been trading 8 years and never had this level of insight into my performance. The replay feature helped me spot execution mistakes I never knew I was making.",
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Crypto Trader",
    avatar: "EZ",
    profit: "+$156,200",
    content: "The auto-sync with Binance and Coinbase saves me hours every week. Reports are beautiful and actually actionable.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Futures Trader",
    avatar: "DK",
    profit: "+$312,000",
    content: "TopG's community is what sets it apart. The webinars and mentor matching helped me go full-time in 6 months.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Wall of Love
          </motion.span>
          <motion.h2
            className="mb-4 text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Trusted by{" "}
            <motion.span 
              className="gradient-text-blue inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              50,000+ traders
            </motion.span>
          </motion.h2>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="neon-border-hover glass-card min-w-[320px] max-w-[400px] flex-shrink-0 snap-center rounded-2xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-neon-green text-sm font-bold text-primary-foreground">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-neon-green/20 px-3 py-1 text-sm font-bold text-neon-green">
                    {testimonial.profit}
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
