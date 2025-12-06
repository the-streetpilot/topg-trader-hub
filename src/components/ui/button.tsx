import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-accent hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "relative bg-gradient-to-r from-neon-blue to-[hsl(220,100%,60%)] text-primary-foreground shadow-[0_0_8px_rgba(31,182,255,0.15)] hover:shadow-[0_0_30px_rgba(31,182,255,0.5),0_0_60px_rgba(31,182,255,0.25)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-neon-blue before:to-[hsl(220,100%,60%)] before:opacity-0 before:blur-xl before:transition-opacity hover:before:opacity-50",
        neonGreen: "relative bg-gradient-to-r from-neon-green to-[hsl(140,70%,45%)] text-secondary-foreground shadow-[0_0_8px_rgba(44,232,154,0.15)] hover:shadow-[0_0_30px_rgba(44,232,154,0.5),0_0_60px_rgba(44,232,154,0.25)] hover:scale-[1.02] active:scale-[0.98]",
        glass: "glass-card border border-border/50 text-foreground hover:border-primary/30 hover:shadow-neon-blue",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-10 rounded-md px-5",
        lg: "h-13 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
