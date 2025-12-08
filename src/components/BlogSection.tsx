import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlogSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const posts = [
    { title: "5 Common Trading Mistakes", date: "Dec 5, 2024", category: "Strategy" },
    { title: "How to Use R-Multiples", date: "Dec 3, 2024", category: "Analytics" },
    { title: "Building a Trading Plan", date: "Dec 1, 2024", category: "Education" },
  ];

  return (
    <section id="blog" className="relative py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Blog</span>
          <h2 className="text-4xl font-extrabold text-foreground">Latest <span className="gradient-text-blue">insights</span></h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div key={post.title} className="glass-card neon-border-hover rounded-2xl p-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <span className="text-xs text-primary">{post.category}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
