import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  DollarSign,
  Target,
  Activity,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import AnimatedBox from "./AnimatedBox";

const sampleTrades = [
  { symbol: "AAPL", type: "Long", pnl: +340, date: "2024-01-15", status: "win" },
  { symbol: "TSLA", type: "Short", pnl: -120, date: "2024-01-14", status: "loss" },
  { symbol: "SPY", type: "Long", pnl: +89, date: "2024-01-13", status: "win" },
  { symbol: "NVDA", type: "Long", pnl: +567, date: "2024-01-12", status: "win" },
  { symbol: "AMZN", type: "Short", pnl: -45, date: "2024-01-11", status: "loss" },
];

const stats = [
  { label: "Win Rate", value: "67%", icon: <Target className="h-5 w-5" />, color: "text-neon-green" },
  { label: "Profit Factor", value: "2.4", icon: <TrendingUp className="h-5 w-5" />, color: "text-primary" },
  { label: "Total P/L", value: "+$831", icon: <DollarSign className="h-5 w-5" />, color: "text-neon-green" },
  { label: "Total Trades", value: "5", icon: <Activity className="h-5 w-5" />, color: "text-muted-foreground" },
];

interface InteractiveDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const InteractiveDemo = ({ isOpen, onClose }: InteractiveDemoProps) => {
  const [activeTab, setActiveTab] = useState<"journal" | "analytics" | "reports">("journal");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-6xl max-h-[90vh] overflow-auto rounded-3xl border border-border/50 bg-card shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/95 backdrop-blur-sm p-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Interactive Demo</h2>
              <p className="text-muted-foreground">Explore Tradefxbook's powerful features</p>
            </div>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/50 text-foreground hover:bg-accent transition-colors"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-4 border-b border-border/30">
            {["journal", "analytics", "reports"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-neon-blue"
                    : "bg-accent/30 text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "journal" && (
                <motion.div
                  key="journal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Stats Cards */}
                    <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className="glass-card rounded-xl p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Trade List */}
                    <div className="lg:col-span-3 glass-card rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Trades</h3>
                      <div className="space-y-3">
                        {sampleTrades.map((trade, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center justify-between p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`h-2 w-2 rounded-full ${trade.status === "win" ? "bg-neon-green" : "bg-neon-red"}`} />
                              <div>
                                <div className="font-semibold text-foreground">{trade.symbol}</div>
                                <div className="text-xs text-muted-foreground">{trade.type} • {trade.date}</div>
                              </div>
                            </div>
                            <div className={`font-bold ${trade.pnl > 0 ? "text-neon-green" : "text-neon-red"}`}>
                              {trade.pnl > 0 ? "+" : ""}${trade.pnl}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 lg:grid-cols-2"
                >
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Performance Chart</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                      {[65, 40, 80, 55, 90, 45, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.1 * i, duration: 0.5 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Win/Loss Distribution</h3>
                    <div className="flex items-center justify-center h-64">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="hsl(var(--muted))"
                            strokeWidth="20"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="hsl(var(--neon-green))"
                            strokeWidth="20"
                            strokeDasharray={`${67 * 2.51} ${100 * 2.51}`}
                            initial={{ strokeDashoffset: 251 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-foreground">67%</span>
                          <span className="text-sm text-muted-foreground">Win Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "reports" && (
                <motion.div
                  key="reports"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      "P/L by Day", "By Time", "By Symbol", "Risk Analysis",
                      "Duration", "Setup Quality", "Expectancy", "Drawdown",
                      "Win Streak", "Monthly", "Quarterly", "Custom..."
                    ].map((report, i) => (
                      <motion.div
                        key={report}
                        className="glass-card neon-border-hover rounded-xl p-4 text-center cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <span className="text-sm text-muted-foreground">{report}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveDemo;
