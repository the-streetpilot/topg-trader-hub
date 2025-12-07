import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronRight, Heart, Zap, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Build and scale our trading analytics platform using React, Node.js, and PostgreSQL."
  },
  {
    title: "Product Designer (UX/UI)",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Design beautiful, intuitive interfaces that traders love to use every day."
  },
  {
    title: "Data Scientist",
    department: "Analytics",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Develop ML models to provide personalized trading insights and recommendations."
  },
  {
    title: "Customer Success Manager",
    department: "Support",
    location: "Remote (US)",
    type: "Full-time",
    description: "Help our growing community of traders succeed with Tradefxbook."
  },
];

const perks = [
  { icon: <Globe />, title: "Remote First", desc: "Work from anywhere in the world" },
  { icon: <Heart />, title: "Health Benefits", desc: "Comprehensive health, dental, vision" },
  { icon: <Zap />, title: "Learning Budget", desc: "$1,000/year for courses & books" },
  { icon: <Users />, title: "Team Retreats", desc: "Annual company offsite events" },
];

const Careers = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Careers
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join the{" "}
            <span className="gradient-text-blue">Tradefxbook team</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help us empower traders worldwide with the tools they need to succeed.
          </motion.p>
        </div>

        {/* Why Join Us */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-3xl p-8 lg:p-12 mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Why work at Tradefxbook?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedBox>

        {/* Open Positions */}
        <div className="mb-16">
          <AnimatedBox direction="fromTop" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Open Positions</h2>
          </AnimatedBox>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <AnimatedBox
                key={job.title}
                direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
                delay={index * 0.1}
                className="glass-card neon-border-hover rounded-xl p-6 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-primary shrink-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>

        {/* No Position Fit */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-3xl p-8 lg:p-12 text-center bg-gradient-to-br from-primary/10 to-transparent">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't see the right role?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <AnimatedButton delay={0.2}>
            <Link to="/contact">
              <Button variant="neon" size="xl">Get in Touch</Button>
            </Link>
          </AnimatedButton>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default Careers;
