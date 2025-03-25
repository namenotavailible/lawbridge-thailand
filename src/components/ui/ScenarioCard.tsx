
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ScenarioCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: "individual" | "business" | "criminal" | "resources";
  className?: string;
}

const getCategoryColor = (category: ScenarioCardProps["category"]) => {
  switch (category) {
    case "individual":
      return "from-legal-individual/20 to-legal-individual/5 border-legal-individual/20";
    case "business":
      return "from-legal-business/20 to-legal-business/5 border-legal-business/20";
    case "criminal":
      return "from-legal-criminal/20 to-legal-criminal/5 border-legal-criminal/20";
    case "resources":
      return "from-legal-resources/20 to-legal-resources/5 border-legal-resources/20";
    default:
      return "from-primary/20 to-primary/5 border-primary/20";
  }
};

const getCategoryTextColor = (category: ScenarioCardProps["category"]) => {
  switch (category) {
    case "individual":
      return "text-legal-individual";
    case "business":
      return "text-legal-business";
    case "criminal":
      return "text-legal-criminal";
    case "resources":
      return "text-legal-resources";
    default:
      return "text-primary";
  }
};

const ScenarioCard = ({
  title,
  description,
  icon: Icon,
  href,
  category,
  className,
}: ScenarioCardProps) => {
  const bgGradient = getCategoryColor(category);
  const textColor = getCategoryTextColor(category);
  
  return (
    <Link 
      to={href}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 border",
        "bg-gradient-to-br backdrop-blur-sm",
        bgGradient,
        "hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-start">
        <div className={cn(
          "flex-shrink-0 mr-4 p-2 rounded-lg",
          "bg-white/40 backdrop-blur-sm",
          textColor
        )}>
          <Icon size={24} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          
          <div className={cn(
            "mt-4 text-sm font-medium flex items-center transition-all",
            "opacity-0 group-hover:opacity-100",
            "transform translate-x-[-8px] group-hover:translate-x-0",
            textColor
          )}>
            Explore scenario
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScenarioCard;
