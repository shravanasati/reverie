import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | "primary" | "minimal";
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}) => {
  const baseClasses = {
    primary: "bg-journal-500 text-white hover:bg-journal-600 shadow-md hover:shadow-lg transition-all duration-300",
    minimal: "bg-transparent hover:bg-journal-100 text-journal-500 border border-journal-200 hover:border-journal-300"
  };

  if (variant === "primary" || variant === "minimal") {
    return (
      <button 
        className={cn(
          "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          baseClasses[variant],
          className
        )} 
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Button 
      className={className} 
      variant={variant as ButtonProps["variant"]} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
