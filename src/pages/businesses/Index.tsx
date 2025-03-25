
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import LegalCategoryCard from "@/components/ui/LegalCategoryCard";
import ScenarioCard from "@/components/ui/ScenarioCard";
import { 
  ArrowRight, 
  Building, 
  GlobeLock, 
  Users, 
  Receipt, 
  FileContract,
  Building2,
  FileCheck,
  ShieldAlert,
  Globe
} from "lucide-react";

const BusinessesIndex = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-legal-business/10 to-transparent">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-legal-business bg-legal-business/10 rounded-full">
                For Businesses
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Navigate <span className="text-legal-business">Business Law</span> in Thailand with Clarity
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                Guide your business through the legal landscape of Thailand with our straightforward resources for entrepreneurs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Categories Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Business Legal Topics"
              subtitle="Explore key areas of Thai law that impact your business operations"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              <LegalCategoryCard
                title="Starting a Business"
                description="Step-by-step company registration process for sole proprietorships, partnerships, and limited companies."
                icon={Building}
                href="/businesses/starting-business"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Foreign Business Act"
                description="Restricted business activities, Board of Investment (BOI) incentives, and legal workarounds."
                icon={GlobeLock}
                href="/businesses/foreign-business-act"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Labor Law"
                description="Hiring, firing, employment contracts, severance pay, and social security obligations."
                icon={Users}
                href="/businesses/labor-law"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Taxes & VAT"
                description="Corporate tax rates, VAT registration, invoice requirements, and tax compliance."
                icon={Receipt}
                href="/businesses/taxes-vat"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Contracts & Agreements"
                description="Essential elements for enforceable contracts, standard terms, and dispute resolution mechanisms."
                icon={FileContract}
                href="/businesses/contracts"
                colorClass="text-legal-business"
              />
              
              <LegalCategoryCard
                title="Intellectual Property"
                description="Trademark registration, copyright protection, patents, and addressing infringement."
                icon={ShieldAlert}
                href="/businesses/intellectual-property"
                colorClass="text-legal-business"
              />
            </div>
          </div>
        </section>
        
        {/* Common Scenarios Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Business Legal Scenarios"
              subtitle="Real-world business situations explained through simple legal frameworks"
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
                title="Employee Termination Rights"
                description="Learn about severance pay requirements and legal procedures for terminating employment."
                icon={FileCheck}
                href="/tools/scenario-simulator"
                category="business"
              />
              
              <ScenarioCard
                title="Commercial Lease Negotiation"
                description="Understand key legal considerations when negotiating a commercial property lease in Thailand."
                icon={Building2}
                href="/tools/scenario-simulator"
                category="business"
              />
              
              <ScenarioCard
                title="VAT Registration Requirements"
                description="Determine when your business needs to register for VAT and learn about compliance requirements."
                icon={Receipt}
                href="/tools/scenario-simulator"
                category="business"
              />
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/tools/scenario-simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-legal-business bg-white border border-legal-business/20 rounded-lg shadow-sm hover:bg-legal-business/5 transition-colors"
              >
                <span>Explore All Business Scenarios</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="rounded-2xl bg-gradient-to-br from-legal-business/10 to-white p-8 sm:p-12 border border-legal-business/10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-display font-medium mb-4">
                  Business Legal Tools
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Use our practical tools to help your business navigate Thailand's legal landscape.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/tools/scenario-simulator"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-business/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-business/10 text-legal-business rounded-md">
                      <Building size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Scenario Simulator</h3>
                      <p className="text-sm text-muted-foreground">Test various business decisions</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  
                  <Link
                    to="/tools/risk-checker"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-business/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-business/10 text-legal-business rounded-md">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Risk Assessment</h3>
                      <p className="text-sm text-muted-foreground">Identify potential compliance gaps</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/resources/templates"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-business/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-business/10 text-legal-business rounded-md">
                      <FileContract size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Contract Templates</h3>
                      <p className="text-sm text-muted-foreground">Access standard legal templates</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  
                  <Link
                    to="/resources/faq"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-business/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-business/10 text-legal-business rounded-md">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Business FAQs</h3>
                      <p className="text-sm text-muted-foreground">Common business legal questions</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Running a Business in Thailand?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Get comprehensive guidance on navigating the legal aspects of business operations in Thailand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/businesses/starting-business"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-business rounded-lg shadow-sm hover:bg-legal-business/90 transition-colors"
                >
                  <span>Business Startup Guide</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/resources/templates"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-business bg-white border border-legal-business/20 rounded-lg shadow-sm hover:bg-legal-business/5 transition-colors"
                >
                  <span>Document Templates</span>
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

export default BusinessesIndex;
