
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight,
  Users,
  Building2,
  Globe,
  FileCheck,
  Briefcase,
  Home,
  FileText,
  Plane,
  Receipt,
  Scale
} from "lucide-react";
import { cn } from "@/lib/utils";

const scenarios = [
  {
    id: "business-startup",
    title: "Starting a Business as a Foreigner",
    description: "Navigate the Foreign Business Act and learn the legal ways to establish your company in Thailand.",
    icon: Globe,
    category: "business",
  },
  {
    id: "property-purchase",
    title: "Property Purchase Process",
    description: "Understand the legal requirements and restrictions for buying property as a foreigner in Thailand.",
    icon: Home,
    category: "individual",
  },
  {
    id: "employee-termination",
    title: "Employee Termination Rights",
    description: "Learn about severance pay requirements and legal procedures for terminating employment.",
    icon: FileCheck,
    category: "business",
  },
  {
    id: "marriage-registration",
    title: "Marriage Registration for Foreigners",
    description: "Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse.",
    icon: Users,
    category: "individual",
  },
  {
    id: "commercial-lease",
    title: "Commercial Lease Negotiation",
    description: "Understand key legal considerations when negotiating a commercial property lease in Thailand.",
    icon: Building2,
    category: "business",
  },
  {
    id: "will-creation",
    title: "Creating a Valid Will",
    description: "Learn how to create a legally binding will in Thailand and ensure your assets are distributed according to your wishes.",
    icon: FileText,
    category: "individual",
  },
  {
    id: "visa-overstay",
    title: "Overstaying Your Visa",
    description: "Understand the consequences and legal remedies if you've stayed beyond your permitted time in Thailand.",
    icon: Plane,
    category: "individual",
  },
  {
    id: "vat-registration",
    title: "VAT Registration Requirements",
    description: "Determine when your business needs to register for VAT and learn about compliance requirements.",
    icon: Receipt,
    category: "business",
  },
];

// Example scenario steps for business startup
const businessStartupSteps = [
  {
    id: "intro",
    content: "You're a foreigner looking to start a business in Thailand. What type of business structure are you interested in?",
    options: [
      { id: "company", text: "Limited Company (Co., Ltd.)" },
      { id: "representative", text: "Representative Office" },
      { id: "branch", text: "Branch Office" },
    ],
  },
  {
    id: "company",
    content: "You've chosen to set up a Thai Limited Company (Co., Ltd.). This is the most common business structure in Thailand. Is your business activity restricted under the Foreign Business Act (FBA)?",
    options: [
      { id: "restricted", text: "Yes, it's in List 1, 2, or 3 of restricted businesses" },
      { id: "not-restricted", text: "No, it's not a restricted business activity" },
      { id: "not-sure", text: "I'm not sure" },
    ],
    previousId: "intro",
  },
  {
    id: "restricted",
    content: "Since your business activity is restricted under the FBA, you have several options:",
    legalContent: "The Foreign Business Act (FBA) restricts foreign ownership in certain business categories. List 1 businesses are strictly prohibited for foreigners. List 2 and 3 businesses require special permission.",
    options: [
      { id: "fba-license", text: "Apply for a Foreign Business License" },
      { id: "boi", text: "Apply for BOI promotion" },
      { id: "thai-partner", text: "Partner with Thai shareholders (51% Thai ownership)" },
    ],
    previousId: "company",
  },
  {
    id: "not-restricted",
    content: "Great! Since your business isn't restricted, you can proceed with setting up a Thai Limited Company with foreign majority ownership. However, you still need to meet these requirements:",
    legalContent: "Even for non-restricted businesses, a Thai Limited Company must have a minimum of 3 shareholders and comply with the minimum capital requirements for foreign investors.",
    options: [
      { id: "setup-steps", text: "Show me the setup steps" },
      { id: "capital", text: "Tell me about the minimum capital requirements" },
      { id: "directors", text: "What about directors and shareholders?" },
    ],
    previousId: "company",
  },
  {
    id: "not-sure",
    content: "It's important to determine if your business is restricted before proceeding. The Foreign Business Act (FBA) categorizes restricted businesses into three lists:",
    legalContent: "List 1: Businesses strictly prohibited to foreigners (e.g., agriculture, land trading, newspaper business)\nList 2: Businesses related to national safety or security (requires Cabinet approval)\nList 3: Businesses in which Thais are not yet ready to compete with foreigners (requires FBL from Director-General of Commercial Registration Department)",
    options: [
      { id: "check-lists", text: "See the complete lists of restricted businesses" },
      { id: "legal-advice", text: "I should consult with a lawyer" },
      { id: "back-to-options", text: "Go back to business structure options" },
    ],
    previousId: "company",
  },
  {
    id: "setup-steps",
    content: "Here are the general steps to set up a Thai Limited Company:",
    legalContent: "The process is governed by the Civil and Commercial Code of Thailand and overseen by the Department of Business Development (DBD).",
    steps: [
      "Reserve company name with the Department of Business Development (DBD)",
      "Prepare Memorandum of Association and Articles of Association",
      "Hold statutory meeting",
      "Register the company (within 3 months of name reservation)",
      "Register for VAT (if annual revenue exceeds 1.8 million baht)",
      "Register for social security and workmen's compensation",
      "Obtain specific business licenses if required for your industry",
    ],
    options: [
      { id: "capital", text: "Tell me about the minimum capital requirements" },
      { id: "timeline", text: "How long does this process take?" },
      { id: "back-to-options", text: "Go back to previous options" },
    ],
    previousId: "not-restricted",
  },
  {
    id: "capital",
    content: "Minimum capital requirements for a Thai company with foreign shareholders:",
    legalContent: "The minimum capital requirements are established by the Foreign Business Act and the Ministry of Commerce regulations.",
    details: [
      "For each foreign work permit: 2 million baht of registered capital",
      "For companies with foreign majority ownership: minimum 25% of the yearly expenditures must be paid-up",
      "For restricted businesses: usually 3 million baht minimum",
      "The capital must be fully paid up (100%) before applying for any foreign business license or permit",
      "Capital must be brought into Thailand from abroad (foreign currency) and properly documented",
    ],
    options: [
      { id: "setup-steps", text: "Show me the setup steps" },
      { id: "directors", text: "What about directors and shareholders?" },
      { id: "back-to-options", text: "Go back to previous options" },
    ],
    previousId: "not-restricted",
  },
];

type ScenarioStep = {
  id: string;
  content: string;
  legalContent?: string;
  options: { id: string; text: string }[];
  steps?: string[];
  details?: string[];
  previousId?: string;
};

type Scenario = {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: "business" | "individual";
};

const ScenarioSimulator = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [currentStep, setCurrentStep] = useState<ScenarioStep | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    // For this demo, we're only implementing the business startup scenario
    if (scenario.id === "business-startup") {
      setCurrentStep(businessStartupSteps[0]);
      setHistory([]);
    } else {
      // For other scenarios, we'll just show a placeholder step
      setCurrentStep({
        id: "placeholder",
        content: `This is a placeholder for the "${scenario.title}" scenario. In a complete implementation, this would contain interactive steps similar to the business startup scenario.`,
        options: [
          { id: "back", text: "Go back to scenario selection" },
        ],
      });
      setHistory([]);
    }
  };

  const selectOption = (optionId: string) => {
    if (optionId === "back" || optionId === "back-to-scenarios") {
      setSelectedScenario(null);
      setCurrentStep(null);
      setHistory([]);
      return;
    }

    if (optionId === "back-to-options" && currentStep?.previousId) {
      const previousStep = businessStartupSteps.find(step => step.id === currentStep.previousId);
      if (previousStep) {
        setCurrentStep(previousStep);
        setHistory(prev => prev.slice(0, -1));
        return;
      }
    }

    // For the business startup scenario
    if (selectedScenario?.id === "business-startup") {
      const nextStep = businessStartupSteps.find(step => step.id === optionId);
      if (nextStep) {
        setHistory(prev => [...prev, currentStep!.id]);
        setCurrentStep(nextStep);
      }
    }
  };

  const goBack = () => {
    if (history.length === 0) {
      setSelectedScenario(null);
      setCurrentStep(null);
    } else {
      const previousStepId = history[history.length - 1];
      const previousStep = businessStartupSteps.find(step => step.id === previousStepId);
      if (previousStep) {
        setCurrentStep(previousStep);
        setHistory(prev => prev.slice(0, -1));
      }
    }
  };

  const getCategoryColor = (category: "business" | "individual") => {
    return category === "business" ? "text-legal-business" : "text-legal-individual";
  };

  const getCategoryBgColor = (category: "business" | "individual") => {
    return category === "business" ? "bg-legal-business/10" : "bg-legal-individual/10";
  };

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Interactive Tool
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Legal <span className="text-primary">Scenario Simulator</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                Explore common legal situations in Thailand with our interactive decision paths that explain Thai law at each step.
              </p>
            </div>
          </div>
        </section>
        
        {/* Simulator Section */}
        <section className="py-12 min-h-[600px]">
          <div className="container px-4">
            {!selectedScenario ? (
              <>
                <SectionHeading
                  title="Choose a Scenario"
                  subtitle="Select a legal scenario to explore"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-animation">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => startScenario(scenario)}
                      className="text-left bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className={cn(
                        "inline-flex items-center justify-center w-12 h-12 rounded-full mb-4",
                        getCategoryBgColor(scenario.category),
                        getCategoryColor(scenario.category),
                      )}>
                        <scenario.icon size={24} />
                      </div>
                      
                      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                        {scenario.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {scenario.description}
                      </p>
                      
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                        Start scenario
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                  <button
                    onClick={goBack}
                    className="mr-4 p-2 rounded-full bg-secondary/70 hover:bg-secondary transition-colors"
                    aria-label="Go back"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  
                  <div>
                    <div className={cn(
                      "inline-block px-3 py-1 mb-1 text-xs font-medium rounded-full",
                      getCategoryBgColor(selectedScenario.category),
                      getCategoryColor(selectedScenario.category),
                    )}>
                      {selectedScenario.category === "business" ? "Business" : "Individual"}
                    </div>
                    <h2 className="text-2xl font-medium">{selectedScenario.title}</h2>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-border p-6 md:p-8 mb-8 animate-scale-in">
                  <div className="prose max-w-none">
                    <p className="text-xl font-medium mb-6">{currentStep?.content}</p>
                    
                    {currentStep?.legalContent && (
                      <div className="bg-secondary/30 border-l-4 border-primary p-4 rounded my-6">
                        <div className="flex items-center mb-2">
                          <Scale size={18} className="text-primary mr-2" />
                          <h4 className="font-medium text-primary">Legal Context</h4>
                        </div>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {currentStep.legalContent}
                        </p>
                      </div>
                    )}
                    
                    {currentStep?.steps && (
                      <div className="my-6">
                        <h4 className="font-medium text-lg mb-4">Required Steps:</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                          {currentStep.steps.map((step, index) => (
                            <li key={index} className="pl-2">{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    
                    {currentStep?.details && (
                      <div className="my-6">
                        <h4 className="font-medium text-lg mb-4">Important Details:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {currentStep.details.map((detail, index) => (
                            <li key={index} className="pl-2">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <h4 className="font-medium text-lg">What would you like to do?</h4>
                    {currentStep?.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => selectOption(option.id)}
                        className="w-full text-left px-4 py-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors flex items-center group"
                      >
                        <span className="mr-3 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-primary text-sm opacity-80 group-hover:opacity-100">
                          <ChevronRight size={16} />
                        </span>
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={goBack}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    {history.length === 0 ? "Back to scenarios" : "Back to previous step"}
                  </button>
                  
                  <Link
                    to={selectedScenario.category === "business" ? "/businesses" : "/individuals"}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Browse related topics
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Need More Legal Guidance?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our comprehensive resources and tools to better understand Thai law.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/tools/risk-checker"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <span>Try Legal Risk Checker</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/resources"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
                >
                  <span>Browse Resources</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default ScenarioSimulator;
