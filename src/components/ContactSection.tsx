import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Contact</span>
          <h2 className="text-4xl font-extrabold text-foreground">Get in <span className="gradient-text-blue">touch</span></h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <motion.div className="glass-card rounded-2xl p-8" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <textarea placeholder="Your Message" rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <Button variant="neon" size="lg" className="w-full"><Send className="mr-2 h-4 w-4" />Send Message</Button>
            </form>
          </motion.div>

          <motion.div className="space-y-6" initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 0.6 }}>
            {[{ icon: <Mail />, title: "Email", value: "support@tradefxbook.com" }, { icon: <Phone />, title: "Phone", value: "+1 (555) 123-4567" }, { icon: <MapPin />, title: "Address", value: "123 Trading Street, NY 10001" }].map((item, i) => (
              <motion.div key={item.title} className="glass-card neon-border-hover rounded-xl p-6 flex items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">{item.icon}</div>
                <div><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-muted-foreground">{item.value}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
