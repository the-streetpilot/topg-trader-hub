import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Features",
    items: [
      { label: "Automated Journaling", href: "#journaling" },
      { label: "Advanced Analytics", href: "#analytics" },
      { label: "50+ Reports", href: "#reports" },
      { label: "Playbooks", href: "#playbooks" },
      { label: "Backtesting & Replay", href: "#backtesting" },
      { label: "Notebook", href: "#notebook" },
    ],
  },
  {
    label: "Supported Brokers",
    href: "#brokers",
  },
  {
    label: "Community",
    items: [
      { label: "Discord", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Mentorship", href: "#community" },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Resources",
    items: [
      { label: "Help Center", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider text-foreground">
            TOP<span className="gradient-text-blue">G</span>{" "}
            <span className="font-medium text-muted-foreground">JOURNAL</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.items && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.items ? (
                <button
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {item.items && openDropdown === item.label && (
                  <motion.div
                    className="absolute left-0 top-full mt-2 min-w-[200px] overflow-hidden rounded-xl border border-border/50 bg-popover/95 p-2 shadow-card backdrop-blur-xl"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:shadow-neon-blue"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log In
          </a>
          <Button variant="neon" size="default">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[60px] z-30 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed right-0 top-[60px] z-40 h-[calc(100vh-60px)] w-3/4 max-w-[300px] border-l border-border/30 bg-background/80 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <nav className="flex h-full flex-col gap-2 overflow-y-auto p-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <div className="py-2">
                      <p className="mb-2 text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 text-lg font-medium text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button variant="outline" size="lg" className="w-full">
                  Log In
                </Button>
                <Button variant="neon" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
