import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnimatedInput = ({ 
  id, 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false,
  delay = 0 
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="relative"
      >
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-accent/30 border-border/50 focus:border-primary focus:ring-primary/30 transition-all duration-300"
        />
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/5 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const AnimatedTextarea = ({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  rows = 5,
  delay = 0 
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <motion.div className="relative">
        <Textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="bg-accent/30 border-border/50 focus:border-primary focus:ring-primary/30 transition-all duration-300"
        />
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/5 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      info: "support@topgjournal.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Get instant support from our team"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      info: "Mon - Fri: 9AM - 6PM EST",
      description: "Weekend support available via email"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Sparkles className="inline-block h-4 w-4 mr-1 animate-pulse" />
              Contact Us
            </motion.span>
            <motion.h1
              className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get in{" "}
              <motion.span 
                className="gradient-text-blue inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              >
                Touch
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have questions about TopG Journal or Fortress FX integration? 
              We're here to help you take your trading to the next level.
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              className="glass-card neon-border-hover rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: -80 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-green/10 rounded-full blur-3xl -z-10" />
              
              <motion.h2 
                className="text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Send us a Message
              </motion.h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <AnimatedInput
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    delay={0.3}
                  />
                  <AnimatedInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    delay={0.35}
                  />
                </div>
                <AnimatedInput
                  id="subject"
                  label="Subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  delay={0.4}
                />
                <AnimatedTextarea
                  id="message"
                  label="Message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  delay={0.45}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button 
                    type="submit" 
                    variant="neon" 
                    size="xl" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card neon-border-hover rounded-2xl p-6 flex items-start gap-4"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.9, 0.2, 1] }}
                  whileHover={{ scale: 1.02, x: -5 }}
                >
                  <motion.div 
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Fortress FX Integration Card */}
              <motion.div
                className="glass-card rounded-2xl p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden"
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(var(--primary), 0)",
                          "0 0 20px 5px rgba(var(--primary), 0.3)",
                          "0 0 0 0 rgba(var(--primary), 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xl font-bold text-primary">FX</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">Fortress FX Integration</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Looking for dedicated Fortress FX support? Our integration team is ready to help you 
                    connect your trading accounts seamlessly.
                  </p>
                  <Button variant="outline" size="lg" className="w-full group">
                    <span className="transition-transform group-hover:scale-105">Contact Fortress FX Support</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;