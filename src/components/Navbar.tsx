import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    items: [
      { label: "Help Center", href: "#help" },
      { label: "About Us", href: "#about" },
    ],
  },
  { label: "Contact", href: "#contact" },
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2">
          <motion.span 
            className="text-xl font-bold tracking-wider text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            TRADE<span className="gradient-text-blue">FX</span>BOOK
          </motion.span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.items && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.items ? (
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection(item.href!)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              )}

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
                      <button
                        key={subItem.label}
                        onClick={() => scrollToSection(subItem.href)}
                        className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:shadow-neon-blue"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button onClick={() => scrollToSection("#contact")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Log In
          </button>
          <Button variant="neon" size="default" onClick={() => scrollToSection("#contact")}>
            Get Started
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-[60px] z-30 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-[60px] z-40 h-[calc(100vh-60px)] w-3/4 max-w-[300px] border-l border-border/30 bg-background/95 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex h-full flex-col gap-2 overflow-y-auto p-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.items ? (
                      <div className="py-2">
                        <p className="mb-2 text-sm font-semibold text-foreground">{item.label}</p>
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => scrollToSection(subItem.href)}
                            className="block w-full text-left py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href!)}
                        className="block w-full text-left py-3 text-lg font-medium text-foreground"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" size="lg" className="w-full" onClick={() => scrollToSection("#contact")}>
                    Log In
                  </Button>
                  <Button variant="neon" size="lg" className="w-full" onClick={() => scrollToSection("#contact")}>
                    Get Started
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
