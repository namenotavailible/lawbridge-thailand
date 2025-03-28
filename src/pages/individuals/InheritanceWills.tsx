
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Scroll, FileText, User, Home, Scale, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InheritanceWills = () => {
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
                <Scroll size={16} className="mr-2" />
                <span>Inheritance & Wills</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Inheritance & Wills <span className="text-legal-individual">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Understanding the legal framework for inheritance, wills, and estate planning under Thai law.
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
                Thai inheritance laws are governed by the Civil and Commercial Code and determine how assets are distributed upon death. Understanding these laws is crucial for both Thai citizens and foreigners with assets in Thailand.
              </p>
              
              <p className="text-muted-foreground mb-4">
                When a person dies without a will (intestate), Thai law prescribes specific rules for succession. However, with proper estate planning and a legally valid will, individuals can exercise greater control over the distribution of their assets and provide for their loved ones according to their wishes.
              </p>
              
              <p className="text-muted-foreground">
                For foreigners, special considerations apply, particularly regarding property ownership, as Thai law restricts foreign ownership of land but allows for certain arrangements to ensure assets are properly transferred to heirs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about inheritance and wills in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText size={20} className="mr-2 text-legal-individual" />
                    Thai Will Requirements
                  </CardTitle>
                  <CardDescription>Creating a legally valid will</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Must be in writing (typed or handwritten)</li>
                    <li>• Testator must be at least 15 years old and of sound mind</li>
                    <li>• Must be dated and signed by the testator</li>
                    <li>• Requires at least two witnesses who also sign the will</li>
                    <li>• Special forms (e.g., holographic wills) have specific requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User size={20} className="mr-2 text-legal-individual" />
                    Intestate Succession
                  </CardTitle>
                  <CardDescription>Rules when no will exists</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Legal heirs in order of priority (spouse, children, parents, siblings)</li>
                    <li>• Statutory division of estate among statutory heirs</li>
                    <li>• Spouse entitled to half of community property plus inheritance share</li>
                    <li>• Adopted children have same rights as biological children</li>
                    <li>• Step-children have no inheritance rights unless adopted</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home size={20} className="mr-2 text-legal-individual" />
                    Foreign Ownership Restrictions
                  </CardTitle>
                  <CardDescription>Property inheritance considerations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Foreigners cannot own land in Thailand</li>
                    <li>• Condominium ownership limited to 49% of building units</li>
                    <li>• Foreign heirs must sell inherited land within 1 year</li>
                    <li>• Alternative ownership structures (e.g., companies, leases)</li>
                    <li>• Special considerations for mixed Thai-foreign families</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale size={20} className="mr-2 text-legal-individual" />
                    Executor Duties
                  </CardTitle>
                  <CardDescription>Managing the estate administration</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Appointment by will or court order</li>
                    <li>• Inventory of estate assets and liabilities</li>
                    <li>• Payment of debts and taxes</li>
                    <li>• Distribution of assets to beneficiaries</li>
                    <li>• Legal responsibilities and potential liabilities</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Landmark size={20} className="mr-2 text-legal-individual" />
                    Estate Taxes
                  </CardTitle>
                  <CardDescription>Tax implications for inheritances</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Thailand's Inheritance Tax applies to estates over 100 million baht</li>
                    <li>• Rates vary by relationship (5% for descendants/ascendants, 10% for others)</li>
                    <li>• Gift Tax on transfers exceeding annual limits</li>
                    <li>• Exemptions for certain property types and recipients</li>
                    <li>• International tax treaty considerations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll size={20} className="mr-2 text-legal-individual" />
                    Will Contests
                  </CardTitle>
                  <CardDescription>Challenges to will validity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Grounds for contesting (incapacity, undue influence, fraud)</li>
                    <li>• Time limitations for filing contests</li>
                    <li>• Burden of proof requirements</li>
                    <li>• Court procedures for inheritance disputes</li>
                    <li>• Settlement options and mediation</li>
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
              subtitle="Common questions about inheritance and wills in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Can foreigners inherit property in Thailand?</h3>
                <p className="text-muted-foreground">
                  Yes, foreigners can inherit property in Thailand, but with restrictions. While foreigners can legally inherit condominiums, Thai law prohibits foreign ownership of land. If a foreigner inherits land, they must either sell it within one year and keep the proceeds, or make appropriate arrangements through a Thai company or long-term lease structure. For mixed Thai-foreign families, careful estate planning is essential to protect inheritance rights.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Is a foreign will valid in Thailand?</h3>
                <p className="text-muted-foreground">
                  A foreign will can be recognized in Thailand if it was validly executed according to the law of the country where it was made, the law of the testator's nationality, or Thai law. However, for practical purposes, having a separate Thai will for Thai assets is often recommended to avoid complications with language translation, legal interpretations, and probate delays. If you have both a foreign and Thai will, ensure they don't contradict each other.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How is inheritance tax calculated in Thailand?</h3>
                <p className="text-muted-foreground">
                  Thailand's inheritance tax applies only to estates valued over 100 million baht (approximately USD 3.2 million). The tax rate is 5% for ascendants or descendants and 10% for other heirs. Certain assets are exempt, including assets inherited by a spouse. Additionally, Thailand has a gift tax on transfers exceeding annual limits (20 million baht for parents to children, 10 million baht for others), intended to prevent inheritance tax avoidance through lifetime gifts.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Can a spouse be disinherited under Thai law?</h3>
                <p className="text-muted-foreground">
                  Thai law protects spouses with the concept of "Sin Somros" (community property), where a spouse automatically owns half of all marital assets regardless of what a will states. For the remaining assets (the deceased's half of Sin Somros plus personal property), a spouse is entitled to an inheritance share as a statutory heir if there is no will. While a testator can leave their disposable portion to others in a will, they cannot completely disinherit their spouse from the statutory entitlements.
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
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Thai inheritance laws are complex and subject to change. While we strive to provide accurate and up-to-date information, we recommend consulting with a qualified Thai legal professional for advice specific to your situation and estate planning needs.
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
                Plan Your Estate with Confidence
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on inheritance and estate planning in Thailand.
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
                  <span>View Will Templates</span>
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

export default InheritanceWills;
