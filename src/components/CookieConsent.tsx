import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const rejectNonEssential = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card neon-border-hover rounded-2xl border border-border/50 p-6 shadow-card">
              <AnimatePresence mode="wait">
                {!showPreferences ? (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Cookie className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          We value your privacy
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                          We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                          By clicking "Accept All", you consent to our use of cookies. You can manage your preferences at any time.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <Button variant="neon" onClick={acceptAll}>
                            Accept All
                          </Button>
                          <Button variant="outline" onClick={rejectNonEssential}>
                            Reject Non-Essential
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => setShowPreferences(true)}
                            className="gap-2"
                          >
                            <Settings className="h-4 w-4" />
                            Manage Preferences
                          </Button>
                        </div>
                      </div>
                      <button
                        onClick={rejectNonEssential}
                        className="hidden sm:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preferences"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        Cookie Preferences
                      </h3>
                      <button
                        onClick={() => setShowPreferences(false)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        aria-label="Back"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Necessary Cookies */}
                      <div className="flex items-center justify-between rounded-lg bg-accent/50 p-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-foreground">Necessary Cookies</h4>
                            <span className="rounded bg-primary/20 px-2 py-0.5 text-xs text-primary">
                              Required
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Essential for the website to function properly. Cannot be disabled.
                          </p>
                        </div>
                        <Switch checked={true} disabled className="opacity-50" />
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-center justify-between rounded-lg bg-accent/50 p-4">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">Analytics Cookies</h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Help us understand how visitors interact with our website.
                          </p>
                        </div>
                        <Switch
                          checked={preferences.analytics}
                          onCheckedChange={(checked) =>
                            setPreferences({ ...preferences, analytics: checked })
                          }
                        />
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-center justify-between rounded-lg bg-accent/50 p-4">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">Marketing Cookies</h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Used to deliver personalized advertisements and track campaigns.
                          </p>
                        </div>
                        <Switch
                          checked={preferences.marketing}
                          onCheckedChange={(checked) =>
                            setPreferences({ ...preferences, marketing: checked })
                          }
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="neon" onClick={saveCustomPreferences} className="gap-2">
                        <Check className="h-4 w-4" />
                        Save Preferences
                      </Button>
                      <Button variant="outline" onClick={acceptAll}>
                        Accept All
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
