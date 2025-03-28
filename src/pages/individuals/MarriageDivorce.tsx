
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Heart, Book, FileCheck, Users, Scale, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MarriageDivorce = () => {
  // Reset scroll position when page loads
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
            <div className="flex items-center mb-6">
              <Link to="/individuals" className="flex items-center text-muted-foreground hover:text-legal-individual transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to Individual Legal Topics</span>
              </Link>
            </div>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-legal-individual bg-legal-individual/10 rounded-full">
                <Heart size={16} className="mr-2" />
                <span>Marriage & Divorce</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Marriage & Divorce <span className="text-legal-individual">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Navigate the legal aspects of marriage, divorce, and family matters under Thai law with our comprehensive guide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-16 border-b">
          <div className="container px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-display font-medium mb-6">Overview</h2>
              
              <p className="text-muted-foreground mb-4">
                Thai marriage and divorce laws are governed by the Civil and Commercial Code. Whether you're a Thai citizen or a foreigner, understanding these laws is essential for protecting your rights and ensuring valid legal proceedings.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Marriage in Thailand involves both legal registration and, for many, traditional ceremonies. While only the registration creates a legally binding marriage, many couples choose to observe cultural practices alongside the legal requirements.
              </p>
              
              <p className="text-muted-foreground">
                Divorce can be pursued through mutual consent or contested proceedings. Each path has different requirements, processes, and implications for property division, child custody, and other related matters.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about marriage and divorce in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book size={20} className="mr-2 text-legal-individual" />
                    Marriage Registration
                  </CardTitle>
                  <CardDescription>Legal requirements for valid marriage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Both parties must be at least 17 years old</li>
                    <li>• Neither party can be currently married</li>
                    <li>• Registration at local district office (Amphur)</li>
                    <li>• Special requirements for foreigners (visa, affirmation)</li>
                    <li>• Two witnesses required</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCheck size={20} className="mr-2 text-legal-individual" />
                    Prenuptial Agreements
                  </CardTitle>
                  <CardDescription>Protecting assets and defining rights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Must be registered at the same time as marriage</li>
                    <li>• Cannot include provisions contrary to public order</li>
                    <li>• Can define property rights separate from legal defaults</li>
                    <li>• Not retroactive after marriage</li>
                    <li>• Should be in both Thai and your native language</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users size={20} className="mr-2 text-legal-individual" />
                    Marital Property Regimes
                  </CardTitle>
                  <CardDescription>How property is divided by law</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sin Somros (Community Property): Assets acquired during marriage</li>
                    <li>• Sin Suan Tua (Personal Property): Pre-marriage assets, personal gifts/inheritance</li>
                    <li>• Properties governed by prenuptial agreements</li>
                    <li>• Legal presumption of joint ownership</li>
                    <li>• Management rights over different property types</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale size={20} className="mr-2 text-legal-individual" />
                    Divorce Procedures
                  </CardTitle>
                  <CardDescription>Options and legal processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Administrative divorce (mutual consent at district office)</li>
                    <li>• Judicial divorce (contested, requires court proceedings)</li>
                    <li>• Legal grounds for contested divorce</li>
                    <li>• Property division and settlement agreements</li>
                    <li>• Recognition of foreign divorces in Thailand</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User size={20} className="mr-2 text-legal-individual" />
                    Child Custody
                  </CardTitle>
                  <CardDescription>Parental rights and responsibilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Best interests of the child standard</li>
                    <li>• Sole vs. joint custody arrangements</li>
                    <li>• International custody considerations</li>
                    <li>• Child support obligations and calculations</li>
                    <li>• Modification of custody arrangements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart size={20} className="mr-2 text-legal-individual" />
                    Alimony & Support
                  </CardTitle>
                  <CardDescription>Financial obligations after divorce</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Eligibility and determining factors</li>
                    <li>• Lump sum vs. ongoing payments</li>
                    <li>• Enforcement of support orders</li>
                    <li>• Modification due to changed circumstances</li>
                    <li>• Tax implications of support payments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Common Questions Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions about marriage and divorce in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Can foreigners legally marry in Thailand?</h3>
                <p className="text-muted-foreground">
                  Yes, foreigners can legally marry in Thailand. However, they must provide certain documentation including their passport, an affirmation of freedom to marry from their embassy, and potentially other documents depending on their nationality. All foreign documents typically need to be translated into Thai and legalized.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What is the fastest way to get divorced in Thailand?</h3>
                <p className="text-muted-foreground">
                  The fastest way is through administrative divorce (uncontested divorce by mutual consent). Both parties must agree on all terms, including property division and child custody. This can be completed in a single day at the district office where the marriage was registered. Without mutual consent, a judicial divorce through court proceedings is necessary, which can take several months to over a year.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How is property divided in a Thai divorce?</h3>
                <p className="text-muted-foreground">
                  In the absence of a prenuptial agreement, property is divided according to Thai law as follows: Sin Somros (community property acquired during marriage) is generally divided equally between spouses. Sin Suan Tua (personal property owned before marriage or acquired through inheritance/personal gifts) remains with the original owner. If there's a prenuptial agreement, property division follows its terms.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Who gets child custody after divorce in Thailand?</h3>
                <p className="text-muted-foreground">
                  Thai courts determine custody based on the best interests of the child. While there is no automatic preference for either parent, the court considers factors such as the child's relationship with each parent, financial stability, living conditions, moral character, and the child's preference (if old enough). Joint custody arrangements are possible but less common than sole custody with visitation rights for the non-custodial parent.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legal Disclaimer Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
              <h2 className="text-xl font-medium mb-4">Legal Disclaimer</h2>
              <p className="text-sm text-muted-foreground mb-6">
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Thai marriage and divorce laws are complex and subject to change. While we strive to provide accurate and up-to-date information, we recommend consulting with a qualified Thai legal professional for advice specific to your situation.
              </p>
              <Link to="/legal-disclaimer" className="text-primary font-medium hover:underline">
                Read Full Legal Disclaimer
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Need Personalized Guidance?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on marriage and divorce in Thailand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/tools/scenario-simulator"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-individual rounded-lg shadow-sm hover:bg-legal-individual/90 transition-colors"
                >
                  <span>Try Scenario Simulator</span>
                </Link>
                
                <Link
                  to="/resources/faq"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-individual bg-white border border-legal-individual/20 rounded-lg shadow-sm hover:bg-legal-individual/5 transition-colors"
                >
                  <span>Browse Related FAQs</span>
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

export default MarriageDivorce;
