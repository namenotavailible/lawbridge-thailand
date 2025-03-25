
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LegalCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  colorClass?: string;
  className?: string;
}

const LegalCategoryCard = ({
  title,
  description,
  icon: Icon,
  href,
  colorClass = "text-primary",
  className,
}: LegalCategoryCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "block group legal-card bg-card p-6 hover:translate-y-[-4px]",
        className
      )}
    >
      <div className="mb-4">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-full",
          "bg-secondary/70 group-hover:scale-110 transition-transform duration-300",
          colorClass
        )}>
          <Icon size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
      
      <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-8px] group-hover:translate-x-0 flex items-center">
        Learn more
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

export default LegalCategoryCard;
