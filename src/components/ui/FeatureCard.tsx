
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group p-6 rounded-xl border border-border",
        "bg-card/50 backdrop-blur-sm",
        "hover:border-primary/20 hover:bg-card/70 transition-all duration-300",
        className
      )}
    >
      <div className="mb-4 relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-secondary/50 text-primary rounded-lg p-3 w-fit">
          <Icon size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
