import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Help Center", href: "#help" },
  ],
  legal: [
    { label: "Risk Disclaimer", href: "#legal" },
    { label: "Privacy Policy", href: "#legal" },
    { label: "Terms & Conditions", href: "#legal" },
    { label: "KYC/AML Policy", href: "#legal" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Help Center", href: "#help" },
    { label: "Careers", href: "#careers" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button onClick={() => scrollToSection("#home")} className="inline-block">
                <span className="text-2xl font-bold tracking-wider text-foreground">
                  TRADE<span className="gradient-text-blue">FX</span>BOOK
                </span>
              </button>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                The trading journal that shows you what matters. Track, analyze, and improve your trading performance.
              </p>
              
              {/* Social links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="neon-border-hover flex h-10 w-10 items-center justify-center rounded-lg bg-card/50 text-muted-foreground transition-all hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-12 border-t border-border/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tradefxbook. All rights reserved.
            </p>
            <p className="max-w-2xl text-center text-[10px] text-muted-foreground/70 md:text-right">
              Trading futures, options, and currencies involves substantial risk of loss and is not suitable for all investors. Only risk capital should be used. Past performance is not indicative of future results. Tradefxbook does not provide investment advice.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
