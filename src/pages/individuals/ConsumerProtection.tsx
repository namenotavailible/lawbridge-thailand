
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, ShoppingBag, ShieldCheck, FileText, ReceiptText, GlobeLock, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConsumerProtection = () => {
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
                <ShoppingBag size={16} className="mr-2" />
                <span>Consumer Protection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Consumer Protection <span className="text-legal-individual">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Understanding your rights as a consumer and how to address unfair business practices.
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
                Thailand has established various laws and regulations to protect consumers against unfair business practices, unsafe products, and deceptive advertising. The Consumer Protection Act forms the foundation of these protections, complemented by specific legislation for food, pharmaceuticals, cosmetics, and online transactions.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Government agencies like the Office of the Consumer Protection Board (OCPB) and specialized regulatory bodies oversee consumer protection enforcement. Understanding these protections empowers consumers to make informed decisions and seek remedies when their rights are violated.
              </p>
              
              <p className="text-muted-foreground">
                For both Thai nationals and foreigners residing in or visiting Thailand, knowing how to navigate consumer issues, file complaints, and seek redress is essential in today's complex marketplace.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about consumer rights in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck size={20} className="mr-2 text-legal-individual" />
                    Basic Consumer Rights
                  </CardTitle>
                  <CardDescription>Fundamental protections under Thai law</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Right to safety from dangerous products and services</li>
                    <li>• Right to accurate information for informed decisions</li>
                    <li>• Right to choose among products and services</li>
                    <li>• Right to be heard regarding consumer complaints</li>
                    <li>• Right to receive fair treatment and compensation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText size={20} className="mr-2 text-legal-individual" />
                    Product Liability
                  </CardTitle>
                  <CardDescription>Manufacturer and seller responsibilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strict liability for defective products</li>
                    <li>• Manufacturer, importer, and seller accountability</li>
                    <li>• Proving product defects and resulting damages</li>
                    <li>• Available damages (medical, lost income, mental anguish)</li>
                    <li>• Statute of limitations for filing claims</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ReceiptText size={20} className="mr-2 text-legal-individual" />
                    Contract Protections
                  </CardTitle>
                  <CardDescription>Unfair contract terms and conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Regulation of standard form contracts</li>
                    <li>• Prohibited unfair contract terms</li>
                    <li>• Required disclosure and language considerations</li>
                    <li>• Contract cancellation rights and cooling-off periods</li>
                    <li>• Enforcement against businesses using unfair terms</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GlobeLock size={20} className="mr-2 text-legal-individual" />
                    Online Shopping Protections
                  </CardTitle>
                  <CardDescription>E-commerce and digital marketplace rights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Direct Sales and Marketing Act provisions</li>
                    <li>• Return and refund policies for online purchases</li>
                    <li>• Electronic transactions security requirements</li>
                    <li>• Cross-border purchase considerations</li>
                    <li>• Protection against fraudulent online retailers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap size={20} className="mr-2 text-legal-individual" />
                    Filing Complaints
                  </CardTitle>
                  <CardDescription>Steps to address consumer issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Direct contact with businesses for resolution</li>
                    <li>• Complaint procedures with the OCPB</li>
                    <li>• Sector-specific regulatory body complaints</li>
                    <li>• Consumer case filing with courts</li>
                    <li>• Available mediation and dispute resolution options</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag size={20} className="mr-2 text-legal-individual" />
                    Industry-Specific Protections
                  </CardTitle>
                  <CardDescription>Specialized consumer safeguards</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Food and Drug Administration regulations</li>
                    <li>• Banking and financial services protections</li>
                    <li>• Telecommunications consumer rights</li>
                    <li>• Travel and tourism service standards</li>
                    <li>• Real estate purchase and rental protections</li>
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
              subtitle="Common questions about consumer protection in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What can I do if I purchased a defective product?</h3>
                <p className="text-muted-foreground">
                  If you've purchased a defective product, first contact the seller or manufacturer directly with proof of purchase and documentation of the defect. Request repair, replacement, or refund according to their warranty policy. If unsuccessful, file a complaint with the Office of the Consumer Protection Board (OCPB) by phone (1166), website, or in person. For significant damages, you can file a consumer case in court under the Consumer Case Procedure Act, which provides a simplified process with reduced fees.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Can I return items purchased online in Thailand?</h3>
                <p className="text-muted-foreground">
                  Yes, Thailand's Direct Sales and Marketing Act grants consumers the right to return products purchased online within 7 days of receipt without providing a reason (cooling-off period). The seller must refund your payment within 15 days of receiving the returned product. However, certain products may be exempt from this right, including perishable goods, digital content, customized items, and products with broken seals. Always check the seller's specific return policy, as many reputable retailers offer more generous return periods.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How are foreign tourists protected as consumers in Thailand?</h3>
                <p className="text-muted-foreground">
                  Foreign tourists in Thailand are entitled to the same consumer protections as Thai citizens under the Consumer Protection Act and related laws. For tourist-specific issues, the Tourist Police (dial 1155) offer assistance in multiple languages. The Tourism Authority of Thailand also operates help centers in major tourist areas. For serious matters, tourists can file complaints with the OCPB or relevant regulatory bodies. Documentation of transactions is crucial, so always keep receipts, contracts, and communications with businesses.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What should I do if I've been overcharged or misled about pricing?</h3>
                <p className="text-muted-foreground">
                  If you've been overcharged or misled about pricing, first try to resolve the issue directly with the business, referencing any advertised prices or promotions. Request management involvement if staff cannot help. Document the incident with photos of displayed prices and receipts. For unresolved issues, file a complaint with the OCPB or the relevant industry regulator. Price display regulations require clear, accurate pricing information, and businesses can face penalties for misleading pricing practices, including fines up to 100,000 baht and/or imprisonment up to one year.
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
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Consumer protection laws in Thailand are subject to change and interpretation. While we strive to provide accurate and up-to-date information, we recommend consulting with a qualified Thai legal professional for advice specific to your consumer dispute or issue.
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
                Know Your Consumer Rights
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on consumer protection in Thailand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/tools/scenario-simulator"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-individual rounded-lg shadow-sm hover:bg-legal-individual/90 transition-colors"
                >
                  <span>Try Scenario Simulator</span>
                </Link>
                
                <Link
                  to="/resources/templates"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-individual bg-white border border-legal-individual/20 rounded-lg shadow-sm hover:bg-legal-individual/5 transition-colors"
                >
                  <span>Complaint Templates</span>
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

export default ConsumerProtection;
