import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          blue: "hsl(var(--neon-blue))",
          green: "hsl(var(--neon-green))",
          red: "hsl(var(--neon-red))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(31, 182, 255, 0.3), 0 0 40px rgba(31, 182, 255, 0.15)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(31, 182, 255, 0.5), 0 0 60px rgba(31, 182, 255, 0.25)" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "counter": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "chart-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "page-flip": {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(-180deg)" },
          "100%": { transform: "rotateY(-180deg)" },
        },
        "wave": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float-smooth": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-8px) translateX(4px)" },
          "50%": { transform: "translateY(-4px) translateX(-4px)" },
          "75%": { transform: "translateY(-12px) translateX(2px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "chart-draw": "chart-draw 2s ease-out forwards",
        "page-flip": "page-flip 1.5s ease-in-out",
        "wave": "wave 8s linear infinite",
        "float-smooth": "float-smooth 4s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, hsl(220 20% 8%) 0%, hsl(240 10% 2%) 100%)',
        'gradient-card': 'linear-gradient(145deg, hsl(240 10% 6%) 0%, hsl(240 10% 3%) 100%)',
        'gradient-neon': 'linear-gradient(135deg, hsl(197 100% 56%) 0%, hsl(220 100% 60%) 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(31, 182, 255, 0.3), 0 0 40px rgba(31, 182, 255, 0.15)',
        'neon-green': '0 0 20px rgba(44, 232, 154, 0.3), 0 0 40px rgba(44, 232, 154, 0.15)',
        'neon-red': '0 0 20px rgba(255, 77, 109, 0.3), 0 0 40px rgba(255, 77, 109, 0.15)',
        'card': '0 8px 40px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 16px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(31, 182, 255, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
