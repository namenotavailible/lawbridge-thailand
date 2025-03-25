import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  Building2, 
  FileCheck, 
  Users,
  CheckCircle2
} from "lucide-react";

type Scenario = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: "individual" | "business";
};

type Step = {
  id: string;
  title: string;
  description: string;
  options: Option[];
};

type Option = {
  id: string;
  text: string;
  nextStepId: string;
};

const ScenarioSimulator = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample scenarios
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

  // Sample steps for the "Starting a Business as a Foreigner" scenario
  const steps: Step[] = [
    {
      id: "start",
      title: "Starting a Business in Thailand as a Foreigner",
      description: "As a foreigner, you have several options for starting a business in Thailand. Each has different requirements and restrictions under the Foreign Business Act.",
      options: [
        { id: "1", text: "I want to own 100% of the business", nextStepId: "fba-restricted" },
        { id: "2", text: "I'm willing to have Thai partners/shareholders", nextStepId: "thai-partnership" },
        { id: "3", text: "I want to explore special investment promotions", nextStepId: "boi-promotion" }
      ]
    },
    {
      id: "fba-restricted",
      title: "Foreign Business Act Restrictions",
      description: "The Foreign Business Act (FBA) restricts foreigners from fully owning businesses in certain industries. Your options depend on your business type.",
      options: [
        { id: "1", text: "My business is in a restricted category", nextStepId: "fba-options" },
        { id: "2", text: "My business is NOT in a restricted category", nextStepId: "non-restricted" },
        { id: "3", text: "I'm not sure if my business is restricted", nextStepId: "check-fba" }
      ]
    },
    {
      id: "thai-partnership",
      title: "Thai Partnership Structure",
      description: "You can form a Limited Company with Thai partners, but foreigners cannot own more than 49% of shares in businesses under FBA restrictions.",
      options: [
        { id: "1", text: "I want to set up a Thai Limited Company", nextStepId: "limited-company" },
        { id: "2", text: "I want to know about protecting my interests as a minority shareholder", nextStepId: "minority-protection" },
        { id: "3", text: "Go back to explore other options", nextStepId: "start" }
      ]
    },
    {
      id: "boi-promotion",
      title: "Board of Investment (BOI) Promotion",
      description: "The BOI offers incentives for foreign investment in targeted industries, including possible exemption from foreign ownership restrictions.",
      options: [
        { id: "1", text: "Learn about BOI application process", nextStepId: "boi-process" },
        { id: "2", text: "Check if my business qualifies for BOI promotion", nextStepId: "boi-eligibility" },
        { id: "3", text: "Go back to explore other options", nextStepId: "start" }
      ]
    },
    {
      id: "fba-options",
      title: "Options for Restricted Businesses",
      description: "For businesses restricted under the FBA, you have several legal pathways to consider:",
      options: [
        { id: "1", text: "Apply for a Foreign Business License", nextStepId: "fbl-process" },
        { id: "2", text: "Seek BOI promotion to bypass restrictions", nextStepId: "boi-promotion" },
        { id: "3", text: "Use a Thai nominee (understanding legal risks)", nextStepId: "nominee-risks" }
      ]
    },
    {
      id: "non-restricted",
      title: "Non-Restricted Business Setup",
      description: "If your business is not restricted by the FBA, you can own 100% of the company. You'll need to follow standard company registration procedures.",
      options: [
        { id: "1", text: "Learn about company registration steps", nextStepId: "registration-steps" },
        { id: "2", text: "Understand minimum capital requirements", nextStepId: "capital-requirements" },
        { id: "3", text: "Go back to explore other options", nextStepId: "start" }
      ]
    }
  ];

  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [currentStep, setCurrentStep] = useState<Step | null>(null);
  const [stepHistory, setStepHistory] = useState<Step[]>([]);

  // Start a scenario
  const startScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    const firstStep = steps.find(step => step.id === "start");
    if (firstStep) {
      setCurrentStep(firstStep);
      setStepHistory([firstStep]);
    }
  };

  // Handle option selection
  const handleOptionSelect = (option: Option) => {
    const nextStep = steps.find(step => step.id === option.nextStepId);
    if (nextStep) {
      setCurrentStep(nextStep);
      setStepHistory(prev => [...prev, nextStep]);
      // Scroll to top of step container
      document.getElementById("step-container")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Go back to previous step
  const goBack = () => {
    if (stepHistory.length > 1) {
      const newHistory = [...stepHistory];
      newHistory.pop(); // Remove current step
      const previousStep = newHistory[newHistory.length - 1];
      setCurrentStep(previousStep);
      setStepHistory(newHistory);
    }
  };

  // Reset the simulator
  const resetSimulator = () => {
    setSelectedScenario(null);
    setCurrentStep(null);
    setStepHistory([]);
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
                Legal Scenario <span className="text-primary">Simulator</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                Explore common legal situations in Thailand and understand how the law applies at each step.
              </p>
            </div>
          </div>
        </section>
        
        {/* Simulator Section */}
        <section className="py-16">
          <div className="container px-4">
            {!selectedScenario ? (
              <>
                <SectionHeading
                  title="Choose a Scenario"
                  subtitle="Select a common legal situation to explore the applicable laws and procedures"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {scenarios.map((scenario) => (
                    <div 
                      key={scenario.id}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => startScenario(scenario)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                          {scenario.icon && <scenario.icon size={24} />}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-medium mb-2">{scenario.title}</h3>
                          <p className="text-muted-foreground mb-4">{scenario.description}</p>
                          
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              scenario.category === "individual" 
                                ? "bg-legal-individual/10 text-legal-individual" 
                                : "bg-legal-business/10 text-legal-business"
                            }`}>
                              {scenario.category === "individual" ? "Individual" : "Business"}
                            </span>
                            
                            <span className="text-sm text-primary flex items-center gap-1">
                              Start Scenario <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-muted-foreground mb-4">Don't see the scenario you're looking for?</p>
                  <Link
                    to="/resources/faq"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
                  >
                    <span>Browse Legal FAQs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </>
            ) : (
              <div id="step-container" className="max-w-3xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                  <button
                    onClick={resetSimulator}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Choose Different Scenario</span>
                  </button>
                  
                  <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedScenario.category === "individual" 
                      ? "bg-legal-individual/10 text-legal-individual" 
                      : "bg-legal-business/10 text-legal-business"
                  }`}>
                    {selectedScenario.category === "individual" ? "Individual" : "Business"}
                  </div>
                </div>
                
                {currentStep && (
                  <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-display font-medium mb-4">{currentStep.title}</h2>
                    
                    <p className="text-muted-foreground mb-8">{currentStep.description}</p>
                    
                    <div className="space-y-4">
                      {currentStep.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option)}
                          className="w-full flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
                        >
                          <span>{option.text}</span>
                          <ArrowRight size={16} className="text-primary" />
                        </button>
                      ))}
                    </div>
                    
                    {stepHistory.length > 1 && (
                      <button
                        onClick={goBack}
                        className="mt-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowLeft size={16} />
                        <span>Go Back to Previous Step</span>
                      </button>
                    )}
                  </div>
                )}
                
                {/* Progress Tracker */}
                <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
                  <h3 className="text-sm font-medium mb-3">Your Progress</h3>
                  
                  <div className="space-y-2">
                    {stepHistory.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5" />
                        <span className={index === stepHistory.length - 1 ? "font-medium" : "text-muted-foreground"}>
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Related Resources Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Related Legal Resources"
              subtitle="Explore these additional resources to deepen your understanding"
              align="left"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-secondary to-secondary/30" />
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Thai Legal System Overview</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Understand the structure of Thailand's legal system and how laws are created and enforced.
                  </p>
                  
                  <Link
                    to="/resources/legal-system"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-secondary to-secondary/30" />
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Legal Document Templates</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Access standard templates for common legal documents that comply with Thai law requirements.
                  </p>
                  
                  <Link
                    to="/resources/templates"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View templates
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-secondary to-secondary/30" />
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Legal FAQ Database</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Find answers to frequently asked questions about various aspects of Thai law.
                  </p>
                  
                  <Link
                    to="/resources/faq"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Browse FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-white p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Need More Specific Guidance?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our resources provide general information, but complex legal matters may require professional advice.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/resources/faq"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <span>Browse Legal FAQs</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/resources"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
                >
                  <span>Explore All Resources</span>
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
