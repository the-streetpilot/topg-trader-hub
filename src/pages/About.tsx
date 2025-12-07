import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Heart, Sparkles } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AnimatedBox from "@/components/AnimatedBox";
import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", image: "AM" },
  { name: "Sarah Chen", role: "CTO", image: "SC" },
  { name: "Marcus Johnson", role: "Head of Product", image: "MJ" },
  { name: "Emily Rodriguez", role: "Lead Designer", image: "ER" },
];

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Precision",
    description: "We believe in data-driven decisions. Every feature is designed to give traders precise insights."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Trader-First",
    description: "Built by traders, for traders. We understand the challenges because we've faced them ourselves."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Community",
    description: "50,000+ traders worldwide trust Tradefxbook to improve their performance."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We're committed to building the best trading journal in the industry, period."
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Tradefxbook was born from a trader's frustration with existing tools." },
  { year: "2020", title: "10K Users", description: "Reached our first major milestone of 10,000 active traders." },
  { year: "2021", title: "Fortress FX", description: "Launched our flagship integration with Fortress FX." },
  { year: "2022", title: "50+ Brokers", description: "Expanded support to over 50 major brokers worldwide." },
  { year: "2023", title: "50K Users", description: "Community grew to 50,000 traders across 100+ countries." },
  { year: "2024", title: "AI Features", description: "Introduced AI-powered analytics and personalized insights." },
];

const About = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="inline-block h-4 w-4 mr-1" />
            About Us
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering traders with{" "}
            <span className="gradient-text-blue">data-driven insights</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tradefxbook was founded with a simple mission: to help traders understand their performance 
            like never before. We believe that every trader deserves access to institutional-grade analytics.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: "50K+", label: "Active Traders" },
            { value: "20.2B+", label: "Trades Analyzed" },
            { value: "100+", label: "Countries" },
            { value: "50+", label: "Broker Integrations" },
          ].map((stat, index) => (
            <AnimatedBox
              key={stat.label}
              direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
              delay={index * 0.1}
              className="glass-card neon-border-hover rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text-blue mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </AnimatedBox>
          ))}
        </div>

        {/* Our Story */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-3xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 2019, our founder Alex Morgan was a full-time day trader struggling with the same problem 
                most traders face: understanding what was actually working in their trading.
              </p>
              <p>
                Spreadsheets were tedious. Existing journaling tools were clunky and lacked depth. 
                There had to be a better way to track, analyze, and improve trading performance.
              </p>
              <p>
                That frustration became the spark for Tradefxbook — a platform built from the ground up 
                to give traders the insights they need to become consistently profitable.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Today, Tradefxbook is trusted by over 50,000 traders worldwide, from beginners taking 
                their first trades to professional fund managers running multi-million dollar portfolios.
              </p>
              <p>
                Our mission remains the same: democratize access to professional-grade trading analytics 
                and help every trader reach their full potential.
              </p>
              <p>
                With our Fortress FX integration and 50+ broker connections, we're making it easier 
                than ever to track every trade and uncover the patterns that lead to profit.
              </p>
            </div>
          </div>
        </AnimatedBox>

        {/* Values */}
        <div className="mb-20">
          <AnimatedBox direction="fromTop" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Tradefxbook.
            </p>
          </AnimatedBox>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedBox
                key={value.title}
                direction={["fromLeft", "fromTop", "fromBottom", "fromRight"][index] as any}
                delay={index * 0.1}
                className="glass-card neon-border-hover rounded-2xl p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </AnimatedBox>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <AnimatedBox direction="fromTop" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
          </AnimatedBox>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedBox
                  key={milestone.year}
                  direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
                  delay={index * 0.1}
                  className={`flex flex-col lg:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="glass-card neon-border-hover rounded-xl p-6 inline-block">
                      <div className="text-2xl font-bold gradient-text-blue mb-1">{milestone.year}</div>
                      <div className="font-semibold text-foreground mb-1">{milestone.title}</div>
                      <div className="text-sm text-muted-foreground">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary shadow-neon-blue" />
                  <div className="flex-1 hidden lg:block" />
                </AnimatedBox>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <AnimatedBox direction="fromTop" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate group of traders and technologists on a mission to transform trading.
            </p>
          </AnimatedBox>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedBox
                key={member.name}
                direction={["fromBottom", "fromTop", "fromBottom", "fromTop"][index] as any}
                delay={index * 0.1}
                className="glass-card neon-border-hover rounded-2xl p-6 text-center"
              >
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-primary to-neon-green text-2xl font-bold text-primary-foreground mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </AnimatedBox>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedBox direction="fromBottom" className="glass-card rounded-3xl p-8 lg:p-12 text-center bg-gradient-to-br from-primary/10 to-transparent">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to transform your trading?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50,000+ traders who've already discovered the power of data-driven trading with Tradefxbook.
          </p>
          <AnimatedButton delay={0.2}>
            <Link to="/contact">
              <Button variant="neon" size="xl">Start Your Free Trial</Button>
            </Link>
          </AnimatedButton>
        </AnimatedBox>
      </div>
    </PageWrapper>
  );
};

export default About;
