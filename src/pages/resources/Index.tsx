
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import LegalCategoryCard from "@/components/ui/LegalCategoryCard";
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Newspaper, 
  MessageSquareText,
  BarChart,
  Globe,
  Search
} from "lucide-react";

const ResourcesIndex = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-legal-resources/10 to-transparent">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-legal-resources bg-legal-resources/10 rounded-full">
                Tools & Resources
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                <span className="text-legal-resources">Practical Resources</span> for Thai Legal Matters
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-slide-down animation-delay-100">
                Access our collection of helpful tools, guides, and resources to enhance your understanding of Thai law.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex relative">
                <input
                  type="text"
                  placeholder="Search for legal topics, terms, or templates..."
                  className="w-full py-3 px-4 pr-12 rounded-lg border border-border bg-white focus:border-legal-resources focus:ring-1 focus:ring-legal-resources outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-legal-resources transition-colors">
                  <Search size={20} />
                </button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm">Popular Searches:</span>
                <Link to="/individuals/marriage-divorce" className="text-sm text-legal-resources hover:underline">Marriage Registration</Link>
                <Link to="/businesses/taxes-vat" className="text-sm text-legal-resources hover:underline">VAT Registration</Link>
                <Link to="/individuals/visa-immigration" className="text-sm text-legal-resources hover:underline">Work Permit</Link>
                <Link to="/businesses/starting-business" className="text-sm text-legal-resources hover:underline">Company Formation</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Resources Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Legal Resources"
              subtitle="Comprehensive tools and references to support your legal needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              <LegalCategoryCard
                title="Legal Glossary"
                description="Simple definitions for over 300 common legal terms in both English and Thai."
                icon={BookOpen}
                href="/resources/glossary"
                colorClass="text-legal-resources"
              />
              
              <LegalCategoryCard
                title="Template Library"
                description="Basic contracts, leases, NDAs, and other document templates that follow Thai legal requirements."
                icon={FileText}
                href="/resources/templates"
                colorClass="text-legal-resources"
              />
              
              <LegalCategoryCard
                title="Frequently Asked Questions"
                description="Categorized Q&A covering common queries about business setup, tax, and personal law."
                icon={HelpCircle}
                href="/resources/faq"
                colorClass="text-legal-resources"
              />
              
              <LegalCategoryCard
                title="Legal Updates Blog"
                description="Stay informed about the latest changes in Thai law with practical explanations."
                icon={Newspaper}
                href="/resources/blog"
                colorClass="text-legal-resources"
              />
              
              <LegalCategoryCard
                title="Ask a Lawyer"
                description="Submit questions for verified Thai lawyers to answer (coming soon)."
                icon={MessageSquareText}
                href="/resources/ask-lawyer"
                colorClass="text-legal-resources"
              />
              
              <LegalCategoryCard
                title="Legal Statistics"
                description="Data and insights on various legal matters in Thailand (coming soon)."
                icon={BarChart}
                href="/resources/statistics"
                colorClass="text-legal-resources"
              />
            </div>
          </div>
        </section>
        
        {/* Interactive Tools Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Interactive Legal Tools"
              subtitle="Practical tools to help you understand and navigate Thai law"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-primary/20 to-legal-resources/20 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-white/50 backdrop-blur-sm">
                    <Globe size={40} className="text-legal-resources" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-2">Legal Scenario Simulator</h3>
                  <p className="text-muted-foreground mb-4">
                    Walk through common legal situations with interactive decision paths that explain Thai law at each step.
                  </p>
                  <Link
                    to="/tools/scenario-simulator"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 text-white bg-legal-resources rounded-lg shadow-sm hover:bg-legal-resources/90 transition-colors"
                  >
                    <span>Try Simulator</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-accent/20 to-legal-resources/20 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-white/50 backdrop-blur-sm">
                    <BarChart size={40} className="text-legal-resources" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-2">Smart Legal Risk Checker</h3>
                  <p className="text-muted-foreground mb-4">
                    Answer simple questions to identify potential legal risks and receive tailored guidance for your situation.
                  </p>
                  <Link
                    to="/tools/risk-checker"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 text-white bg-legal-resources rounded-lg shadow-sm hover:bg-legal-resources/90 transition-colors"
                  >
                    <span>Check Legal Risks</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Updates Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Latest Legal Updates"
              subtitle="Stay informed about recent changes in Thai law"
              align="left"
            >
              <Link
                to="/resources/blog"
                className="inline-flex items-center text-legal-resources hover:text-legal-resources/80 transition-colors mt-2"
              >
                <span>View all updates</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-animation">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-r from-secondary to-secondary/30" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-muted-foreground">June 15, 2023</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs font-medium text-legal-resources">Business Law</span>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2">Changes to Foreign Business Requirements</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      New regulations affecting foreign-owned businesses in Thailand have been announced by the Department of Business Development...
                    </p>
                    
                    <Link
                      to="/resources/blog/changes-to-foreign-business-requirements"
                      className="text-sm text-legal-resources hover:text-legal-resources/80 transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-legal-resources/10 to-white p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Can't Find What You're Looking For?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Try our interactive tools or browse our comprehensive resources to find answers to your legal questions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/tools/scenario-simulator"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-resources rounded-lg shadow-sm hover:bg-legal-resources/90 transition-colors"
                >
                  <span>Try Scenario Simulator</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/resources/faq"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-resources bg-white border border-legal-resources/20 rounded-lg shadow-sm hover:bg-legal-resources/5 transition-colors"
                >
                  <span>Browse FAQs</span>
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

export default ResourcesIndex;
