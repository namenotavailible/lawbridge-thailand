
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
  Heart, 
  Scroll, 
  ShieldAlert, 
  ShoppingBag, 
  Plane,
  Users,
  Home,
  FileText
} from "lucide-react";

const IndividualsIndex = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-legal-individual/10 to-transparent">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-legal-individual bg-legal-individual/10 rounded-full">
                For Individuals
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Make <span className="text-legal-individual">Personal Legal Matters</span> Easy to Understand
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                Navigate Thailand's legal system confidently with our straightforward guides and resources tailored for individuals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Categories Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Legal Topics for Individuals"
              subtitle="Explore key areas of Thai law that impact your personal life"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              <LegalCategoryCard
                title="Marriage & Divorce"
                description="Registration, property regimes, alimony, child custody, and other family law matters."
                icon={Heart}
                href="/individuals/marriage-divorce"
                colorClass="text-legal-individual"
              />
              
              <LegalCategoryCard
                title="Inheritance & Wills"
                description="Intestate succession, will writing, executor duties, and property inheritance rules."
                icon={Scroll}
                href="/individuals/inheritance-wills"
                colorClass="text-legal-individual"
              />
              
              <LegalCategoryCard
                title="Criminal Law Basics"
                description="Rights when arrested, bail processes, common offenses, and legal procedures."
                icon={ShieldAlert}
                href="/individuals/criminal-law"
                colorClass="text-legal-criminal"
              />
              
              <LegalCategoryCard
                title="Consumer Protection"
                description="Online shopping rights, protection against scams, product returns, and filing complaints."
                icon={ShoppingBag}
                href="/individuals/consumer-protection"
                colorClass="text-legal-individual"
              />
              
              <LegalCategoryCard
                title="Visa & Immigration"
                description="Tourist visas, work permits, overstay penalties, re-entry rules, and residency options."
                icon={Plane}
                href="/individuals/visa-immigration"
                colorClass="text-legal-individual"
              />
              
              <LegalCategoryCard
                title="Property & Housing"
                description="Renting, buying property, foreign ownership restrictions, and condominium laws."
                icon={Home}
                href="/individuals/property-housing"
                colorClass="text-legal-individual"
              />
            </div>
          </div>
        </section>
        
        {/* Common Scenarios Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Common Legal Scenarios"
              subtitle="Real-life situations explained in easy to understand legal terms"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
              <ScenarioCard
                title="Marriage Registration for Foreigners"
                description="Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse."
                icon={Users}
                href="/tools/scenario-simulator"
                category="individual"
              />
              
              <ScenarioCard
                title="Property Purchase Process"
                description="Understand the legal requirements and restrictions for buying property as a foreigner in Thailand."
                icon={Home}
                href="/tools/scenario-simulator"
                category="individual"
              />
              
              <ScenarioCard
                title="Creating a Valid Will"
                description="Learn how to create a legally binding will in Thailand and ensure your assets are distributed according to your wishes."
                icon={FileText}
                href="/tools/scenario-simulator"
                category="individual"
              />
              
              <ScenarioCard
                title="Overstaying Your Visa"
                description="Understand the consequences and legal remedies if you've stayed beyond your permitted time in Thailand."
                icon={Plane}
                href="/tools/scenario-simulator"
                category="individual"
              />
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/tools/scenario-simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-legal-individual bg-white border border-legal-individual/20 rounded-lg shadow-sm hover:bg-legal-individual/5 transition-colors"
              >
                <span>Explore All Individual Scenarios</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="rounded-2xl bg-gradient-to-br from-legal-individual/10 to-white p-8 sm:p-12 border border-legal-individual/10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-display font-medium mb-4">
                  Legal Tools for Individuals
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Access our smart tools to help you navigate personal legal matters with confidence.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/tools/scenario-simulator"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-individual/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-individual/10 text-legal-individual rounded-md">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Scenario Simulator</h3>
                      <p className="text-sm text-muted-foreground">Walk through interactive legal scenarios</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  
                  <Link
                    to="/tools/risk-checker"
                    className="flex items-center p-4 bg-white rounded-lg border border-border hover:border-legal-individual/30 transition-colors group"
                  >
                    <div className="mr-4 p-3 bg-legal-individual/10 text-legal-individual rounded-md">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Legal Risk Checker</h3>
                      <p className="text-sm text-muted-foreground">Identify potential legal issues</p>
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
                Have a Specific Legal Question?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Browse our comprehensive resources or try our interactive tools to find answers to your legal queries.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/resources/faq"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-individual rounded-lg shadow-sm hover:bg-legal-individual/90 transition-colors"
                >
                  <span>Browse FAQs</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/resources/glossary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-individual bg-white border border-legal-individual/20 rounded-lg shadow-sm hover:bg-legal-individual/5 transition-colors"
                >
                  <span>Legal Glossary</span>
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

export default IndividualsIndex;
