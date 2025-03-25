
import { Globe, Building2, FileCheck, Users } from "lucide-react";

type Scenario = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: "individual" | "business";
};

export const useScenarios = () => {
  const scenarios: Scenario[] = [
    {
      id: "1",
      title: "Starting a Business as a Foreigner",
      description: "Navigate the Foreign Business Act and learn the legal ways to establish your company in Thailand.",
      icon: Globe,
      category: "business"
    },
    {
      id: "2",
      title: "Property Purchase Process",
      description: "Understand the legal requirements and restrictions for buying property as a foreigner in Thailand.",
      icon: Building2,
      category: "individual"
    },
    {
      id: "3",
      title: "Employee Termination Rights",
      description: "Learn about severance pay requirements and legal procedures for terminating employment.",
      icon: FileCheck,
      category: "business"
    },
    {
      id: "4",
      title: "Marriage Registration for Foreigners",
      description: "Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse.",
      icon: Users,
      category: "individual"
    }
  ];

  return { scenarios };
};

// Export the Scenario type for use in other components
export type { Scenario };
