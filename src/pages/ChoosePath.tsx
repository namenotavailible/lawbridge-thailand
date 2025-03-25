
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Building2, ArrowRight } from "lucide-react";

const ChoosePath = () => {
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                How Can We Help You?
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 animate-slide-down animation-delay-100">
                Choose the option that best describes your needs to get tailored legal information
              </p>
            </div>
          </div>
        </section>
        
        {/* Path Selection Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Individuals Card */}
              <div className="bg-white border border-primary/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary">
                    <Users size={30} />
                  </div>
                  
                  <h2 className="text-2xl font-display font-medium mb-4">For Individuals</h2>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Navigate personal legal matters including marriage, inheritance, consumer rights, 
                    employment, and immigration in Thailand.
                  </p>
                  
                  <ul className="mb-8 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Marriage & Family Law
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Property & Housing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Immigration & Visas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Employment Rights
                    </li>
                  </ul>
                  
                  <Link 
                    to="/individuals" 
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    <span>Explore Individual Services</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              {/* Businesses Card */}
              <div className="bg-white border border-primary/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary">
                    <Building2 size={30} />
                  </div>
                  
                  <h2 className="text-2xl font-display font-medium mb-4">For Businesses</h2>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Understand the legal aspects of starting and running a business in Thailand, 
                    from company registration to labor law compliance.
                  </p>
                  
                  <ul className="mb-8 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Business Registration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Corporate Taxation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Labor & Employment Law
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Intellectual Property
                    </li>
                  </ul>
                  
                  <Link 
                    to="/businesses" 
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    <span>Explore Business Services</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default ChoosePath;
