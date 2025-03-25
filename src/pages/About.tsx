
import { useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Scale, Lightbulb, PencilRuler, Target, Building2 } from "lucide-react";

const About = () => {
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-6 tracking-tight">
                About <span className="text-primary">LawBridge Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Law shouldn't be confusing. That's why we built LawBridge — to make Thai laws easy to understand, for everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Who We Are Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Who We Are"
                align="left"
                className="mb-8"
              />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  We're a dedicated team of entrepreneurs, legal professionals, and creatives who noticed a significant gap: the lack of simple, 
                  English-language resources explaining Thai laws and legal processes.
                </p>
                
                <p>
                  Our content is developed in collaboration with experienced Thai lawyers and legal researchers to ensure accuracy, 
                  while our digital team transforms complex legal concepts into accessible, interactive learning experiences.
                </p>
                
                <p>
                  Together, we're building a bridge between complicated legal texts and practical, everyday understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Our Mission"
                align="left"
                className="mb-8"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Empower People</h3>
                  <p className="text-muted-foreground">
                    Help individuals and businesses understand their legal rights and responsibilities in Thailand.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Scale size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Bridge the Gap</h3>
                  <p className="text-muted-foreground">
                    Connect complex Thai legal frameworks with practical, real-world applications and explanations.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Promote Clarity</h3>
                  <p className="text-muted-foreground">
                    Foster legal literacy and self-protection through accessible content and interactive tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Us Different Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="What Makes Us Different"
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0 flex items-center justify-center">
                    <PencilRuler size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Interactive Experiences</h3>
                    <p className="text-muted-foreground">
                      Our scenario simulators and tools teach you about Thai law through practical, real-world situations.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0 flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Clear Language</h3>
                    <p className="text-muted-foreground">
                      We translate complex legal jargon into straightforward English that anyone can understand.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0 flex items-center justify-center">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Built for Everyone</h3>
                    <p className="text-muted-foreground">
                      Our platform serves expats, entrepreneurs, students, and Thai citizens alike with tailored resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Vision Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Our Vision"
                align="left"
                className="mb-8"
              />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  We aim to become Thailand's most trusted legal knowledge platform in English, reducing legal mistakes 
                  and misunderstandings for both foreigners and Thai citizens.
                </p>
                
                <p>
                  Looking ahead, we envision expanding our approach across Southeast Asia, providing reliable, 
                  practical legal education that empowers individuals and businesses throughout the region.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                Ready to Navigate Thai Law with Confidence?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're here to make law less scary — and more useful. Explore our tools, read our guides, 
                or drop us a message if you've got legal questions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/tools/scenario-simulator">
                    Try Our Simulator
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                
                <Button asChild variant="outline">
                  <Link to="/resources">
                    Explore Resources
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
