
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center", 
  className,
  children 
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      <h2 className="font-display text-3xl sm:text-4xl mb-4 tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default SectionHeading;
