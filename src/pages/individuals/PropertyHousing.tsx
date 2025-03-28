
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Home, Building, FileSignature, GlobeLock, Landmark, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyHousing = () => {
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
                <Home size={16} className="mr-2" />
                <span>Property & Housing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Property & Housing <span className="text-legal-individual">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Understanding the legal aspects of buying, selling, renting, and owning property in Thailand.
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
                Thailand's property laws are governed by the Civil and Commercial Code, Land Code, and Condominium Act, creating a framework for ownership, transfer, and leasing of real estate. Understanding these laws is essential for both Thai nationals and foreigners interested in the property market.
              </p>
              
              <p className="text-muted-foreground mb-4">
                For foreigners, special considerations apply as there are restrictions on land ownership, though alternatives like condominium ownership, long-term leases, and company structures provide viable options for property investment and residence.
              </p>
              
              <p className="text-muted-foreground">
                Whether you're buying, selling, or renting property in Thailand, knowing your rights, obligations, and the proper legal procedures can protect your interests and prevent costly disputes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about property and housing laws in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building size={20} className="mr-2 text-legal-individual" />
                    Condominium Ownership
                  </CardTitle>
                  <CardDescription>Rights and regulations for condos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Foreign ownership quota (49% of total unit area)</li>
                    <li>• Freehold vs. leasehold title options</li>
                    <li>• Condominium juristic person management</li>
                    <li>• Common area regulations and fees</li>
                    <li>• Transfer process and taxes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GlobeLock size={20} className="mr-2 text-legal-individual" />
                    Foreign Ownership Restrictions
                  </CardTitle>
                  <CardDescription>Land ownership limitations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Land Code prohibition on foreign land ownership</li>
                    <li>• Board of Investment (BOI) exceptions</li>
                    <li>• Company structures and considerations</li>
                    <li>• Long-term leasehold options (30+30+30 years)</li>
                    <li>• Usufruct and superficies rights alternatives</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileSignature size={20} className="mr-2 text-legal-individual" />
                    Rental Agreements
                  </CardTitle>
                  <CardDescription>Residential leasing essentials</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Required lease terms and conditions</li>
                    <li>• Security deposit regulations</li>
                    <li>• Tenant rights and protections</li>
                    <li>• Landlord obligations and responsibilities</li>
                    <li>• Termination procedures and notice periods</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home size={20} className="mr-2 text-legal-individual" />
                    Property Purchase Process
                  </CardTitle>
                  <CardDescription>Steps to buy real estate</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Due diligence and title verification</li>
                    <li>• Reservation agreements and deposits</li>
                    <li>• Sales and purchase contract requirements</li>
                    <li>• Land Department registration procedures</li>
                    <li>• Common pitfalls and protections</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Landmark size={20} className="mr-2 text-legal-individual" />
                    Taxes & Fees
                  </CardTitle>
                  <CardDescription>Financial aspects of property</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Transfer fees (2% of registered value)</li>
                    <li>• Specific Business Tax (3.3% if held <3 years)</li>
                    <li>• Stamp duty (0.5% if exempt from SBT)</li>
                    <li>• Withholding tax on rental income</li>
                    <li>• Annual land and building tax rates</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCheck size={20} className="mr-2 text-legal-individual" />
                    Zoning & Land Use
                  </CardTitle>
                  <CardDescription>Development regulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• City planning and zoning restrictions</li>
                    <li>• Environmental impact considerations</li>
                    <li>• Building permits and construction regulations</li>
                    <li>• Height restrictions and setback requirements</li>
                    <li>• Special area regulations (coastal, historical)</li>
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
              subtitle="Common questions about property and housing in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Can foreigners buy condominiums in Thailand?</h3>
                <p className="text-muted-foreground">
                  Yes, foreigners can purchase condominiums in Thailand freehold (outright ownership), but only in buildings where foreign ownership is less than 49% of the total floor area. Foreigners must transfer the full purchase amount from overseas in foreign currency and obtain a Foreign Exchange Transaction Form (FET) from the receiving bank as proof of funds origin. This documentation is required for registering foreign ownership at the Land Department. Alternatively, foreigners can purchase condominiums through a lease structure or a Thai company, though the latter option carries legal risks if not structured properly.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What is the process for buying property in Thailand?</h3>
                <p className="text-muted-foreground">
                  The property purchase process typically begins with due diligence to verify the title deed, check for encumbrances, and confirm boundaries. Once satisfied, buyers sign a reservation agreement with a deposit (usually 5-10% of purchase price). Next, both parties sign a sale and purchase agreement outlining terms and conditions, with additional payments made according to the agreed schedule. The final step is registration at the Land Department, where ownership is transferred, remaining payments are made, and applicable taxes and fees are paid. For foreigners, additional documents such as passport copies and, for condominiums, the Foreign Exchange Transaction Form are required.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What taxes apply when buying or selling property?</h3>
                <p className="text-muted-foreground">
                  When purchasing property in Thailand, buyers face several taxes and fees: Transfer Fee (2% of the registered value), Specific Business Tax (3.3% including local tax if the property was held less than 3-5 years, paid by seller but often negotiated), Stamp Duty (0.5% of registered value, only if exempt from SBT), and Withholding Tax (1% for individuals, progressive rates for companies, deducted from sale price). Annual property taxes include the Land and Building Tax, with rates varying by property type and value. Typically, these costs are negotiated between buyer and seller, with common practice being an equal split of the transfer fee.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What should be included in a Thai residential lease agreement?</h3>
                <p className="text-muted-foreground">
                  A comprehensive Thai residential lease should include: full details of both landlord and tenant, property description and address, lease term and renewal options, rent amount and payment terms, security deposit amount and conditions for return, utilities responsibility, maintenance obligations for both parties, rules regarding alterations or improvements, subletting restrictions, termination conditions and notice periods, and penalties for breach of contract. For leases exceeding three years, the agreement must be registered at the Land Department to be legally enforceable for the full term. Including an inventory list of furnishings and their condition is also advisable to prevent disputes upon move-out.
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
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Thai property laws are complex and subject to change. While we strive to provide accurate and up-to-date information, we strongly recommend consulting with a qualified Thai legal professional before entering into any property transaction or agreement to ensure your interests are properly protected.
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
                Navigate Thai Property Laws with Confidence
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on property transactions in Thailand.
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
                  <span>View Contract Templates</span>
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

export default PropertyHousing;
