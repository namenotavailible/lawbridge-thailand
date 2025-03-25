
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import LegalCategoryCard from "@/components/ui/LegalCategoryCard";
import ScenarioCard from "@/components/ui/ScenarioCard";
import FeatureCard from "@/components/ui/FeatureCard";
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Gavel, 
  BookOpen,
  Sparkles,
  PencilRuler,
  ShieldCheck,
  FileCheck,
  Lightbulb,
  Globe,
  Scale,
  ScrollText
} from "lucide-react";

const Index = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Thai Law Simplified
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Understand Thai Law <br className="hidden sm:block" />
                <span className="text-primary">with Confidence</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                LawBridge Thailand helps businesses and individuals navigate Thai legal matters 
                through simplified explanations, interactive tools, and practical resources.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down animation-delay-200">
                <Link
                  to="/individuals"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/tools/scenario-simulator"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
                >
                  <span>Try Scenario Simulator</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background gradient */}
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        </section>
        
        {/* Main Categories Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Simplified Legal Guidance"
              subtitle="Explore our comprehensive resources tailored for your specific needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-animation">
              <LegalCategoryCard
                title="For Individuals"
                description="Navigate personal legal matters including marriage, inheritance, consumer rights, and immigration."
                icon={Users}
                href="/individuals"
                colorClass="text-legal-individual"
              />
              
              <LegalCategoryCard
                title="For Businesses"
                description="Understand the legal aspects of starting and running a business in Thailand, from registration to taxes."
                icon={Building2}
                href="/businesses"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Tools & Resources"
                description="Access interactive simulations, glossaries, templates, and more to enhance your legal understanding."
                icon={Gavel}
                href="/resources"
                colorClass="text-legal-resources"
              />
            </div>
          </div>
        </section>
        
        {/* Featured Scenarios Section */}
        <section className="py-20">
          <div className="container px-4">
            <SectionHeading
              title="Popular Legal Scenarios"
              subtitle="Explore common situations and understand how Thai law applies"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
              <ScenarioCard
                title="Starting a Business as a Foreigner"
                description="Navigate the Foreign Business Act and learn the legal ways to establish your company in Thailand."
                icon={Globe}
                href="/tools/scenario-simulator"
                category="business"
              />
              
              <ScenarioCard
                title="Property Purchase Process"
                description="Understand the legal requirements and restrictions for buying property as a foreigner in Thailand."
                icon={Building2}
                href="/tools/scenario-simulator"
                category="individual"
              />
              
              <ScenarioCard
                title="Employee Termination Rights"
                description="Learn about severance pay requirements and legal procedures for terminating employment."
                icon={FileCheck}
                href="/tools/scenario-simulator"
                category="business"
              />
              
              <ScenarioCard
                title="Marriage Registration for Foreigners"
                description="Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse."
                icon={Users}
                href="/tools/scenario-simulator"
                category="individual"
              />
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/tools/scenario-simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
              >
                <span>Explore All Scenarios</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Interactive Legal Tools"
              subtitle="Practical resources designed to simplify your legal journey in Thailand"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              <FeatureCard
                title="Legal Scenario Simulator"
                description="Walk through common legal situations with interactive decision paths that explain Thai law at each step."
                icon={Sparkles}
              />
              
              <FeatureCard
                title="Smart Legal Risk Checker"
                description="Answer simple questions to identify potential legal risks for your situation and receive tailored guidance."
                icon={ShieldCheck}
              />
              
              <FeatureCard
                title="Legal Glossary"
                description="Search and understand over 300 legal terms in both English and Thai with simple, clear explanations."
                icon={BookOpen}
              />
              
              <FeatureCard
                title="Document Templates"
                description="Access basic contract templates, agreements, and forms that follow Thai legal requirements."
                icon={ScrollText}
              />
              
              <FeatureCard
                title="Legal Updates Blog"
                description="Stay informed about the latest changes in Thai law with practical explanations of what they mean for you."
                icon={Lightbulb}
              />
              
              <FeatureCard
                title="Custom Document Generator"
                description="Create personalized legal documents by answering a few simple questions (coming soon)."
                icon={PencilRuler}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Scale size={28} />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
                Ready to Navigate Thai Law with Confidence?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start exploring our resources tailored to your specific needs, whether you're an individual or business owner.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/individuals"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <span>For Individuals</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/businesses"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
                >
                  <span>For Businesses</span>
                  <ArrowRight size={16} />
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

export default Index;
