
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Plane, Passport, Briefcase, UserCheck, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VisaImmigration = () => {
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
                <Plane size={16} className="mr-2" />
                <span>Visa & Immigration</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Visa & Immigration <span className="text-legal-individual">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Navigate Thailand's visa requirements, immigration procedures, and long-term stay options.
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
                Thailand offers various visa options for visitors, workers, retirees, and those with Thai family connections. The Immigration Act and related regulations establish entry requirements, lengths of stay, and conditions for different visa categories.
              </p>
              
              <p className="text-muted-foreground mb-4">
                The Thai Immigration Bureau oversees the enforcement of immigration laws and processes, including visa extensions, re-entry permits, and 90-day reporting for long-term residents. Understanding these requirements is essential for legal compliance and avoiding penalties.
              </p>
              
              <p className="text-muted-foreground">
                For those seeking longer-term stays, options include work permits, retirement visas, marriage visas, and various investment programs. Each category has specific financial, documentation, and qualification requirements that must be met.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about visas and immigration in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Passport size={20} className="mr-2 text-legal-individual" />
                    Tourist Visas
                  </CardTitle>
                  <CardDescription>Options for visitors and travelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Visa Exemption (30-45 days depending on nationality)</li>
                    <li>• Tourist Visa (Single/Multiple entry, 60 days + extensions)</li>
                    <li>• Special Tourist Visa (Long-stay option, up to 270 days)</li>
                    <li>• Visa on Arrival for eligible nationalities</li>
                    <li>• Extension procedures and requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase size={20} className="mr-2 text-legal-individual" />
                    Work Permits & Business Visas
                  </CardTitle>
                  <CardDescription>Employment and business activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Non-Immigrant B Visa requirements</li>
                    <li>• Work permit application process</li>
                    <li>• Restricted occupations for foreigners</li>
                    <li>• Board of Investment (BOI) privileges</li>
                    <li>• Digital nomad and remote work considerations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock size={20} className="mr-2 text-legal-individual" />
                    Long-Term Residence
                  </CardTitle>
                  <CardDescription>Options for extended stays</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Retirement Visa (Non-Immigrant O-A) requirements</li>
                    <li>• Marriage Visa for spouses of Thai nationals</li>
                    <li>• Long-Term Resident Visa program</li>
                    <li>• Elite Visa investment options</li>
                    <li>• Permanent Residency application process</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck size={20} className="mr-2 text-legal-individual" />
                    Compliance Requirements
                  </CardTitle>
                  <CardDescription>Maintaining legal status</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 90-day reporting obligations</li>
                    <li>• Re-entry permits before travel abroad</li>
                    <li>• TM.30 accommodation reporting</li>
                    <li>• Visa extension procedures and timing</li>
                    <li>• Address change notifications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle size={20} className="mr-2 text-legal-individual" />
                    Overstay Penalties
                  </CardTitle>
                  <CardDescription>Consequences of visa violations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Daily fine structure (500 baht per day)</li>
                    <li>• Immigration detention procedures</li>
                    <li>• Re-entry bans for serious overstays</li>
                    <li>• Voluntary departure vs. arrest consequences</li>
                    <li>• Emergency extension options</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plane size={20} className="mr-2 text-legal-individual" />
                    Entry Requirements
                  </CardTitle>
                  <CardDescription>Documentation for arrival</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Passport validity requirements (typically 6 months)</li>
                    <li>• Proof of onward travel documentation</li>
                    <li>• Financial evidence requirements (20,000 baht per person)</li>
                    <li>• Health insurance requirements</li>
                    <li>• Arrival and departure card completion</li>
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
              subtitle="Common questions about visas and immigration in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How can I extend my tourist visa or visa exemption stay?</h3>
                <p className="text-muted-foreground">
                  Tourist visa holders can extend their stay once for up to 30 additional days at any Immigration office in Thailand. The fee is 1,900 baht, and you'll need your passport, TM.7 application form, a recent 4x6cm photo, and proof of accommodation. Visa exemption entrants can also receive a 30-day extension under the same process. Extensions should be applied for before your current permission expires. In some cases, additional extensions may be possible under special circumstances or emergencies with supporting documentation.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What are the requirements for a retirement visa in Thailand?</h3>
                <p className="text-muted-foreground">
                  To qualify for a retirement visa (Non-Immigrant O-A), you must be at least 50 years old and meet financial requirements: either a Thai bank deposit of 800,000 baht maintained for at least 2 months prior to application and throughout your stay, or monthly income of at least 65,000 baht, or a combination of both totaling 800,000 baht annually. You'll also need health insurance with minimum coverage of 40,000 baht for outpatient care and 400,000 baht for inpatient care. The visa is initially granted for one year and is renewable annually as long as you maintain the requirements.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What happens if I overstay my visa in Thailand?</h3>
                <p className="text-muted-foreground">
                  Overstaying your visa in Thailand results in a fine of 500 baht per day, up to a maximum of 20,000 baht. If you voluntarily depart and pay the fine at the airport, there are additional penalties: overstays exceeding 90 days result in a 1-year re-entry ban; more than 1 year results in a 3-year ban; more than 3 years results in a 5-year ban; and more than 5 years results in a 10-year ban. If you're caught by immigration authorities during an overstay rather than departing voluntarily, you may face detention, deportation, and potentially longer re-entry bans.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How do I obtain a work permit in Thailand?</h3>
                <p className="text-muted-foreground">
                  To obtain a work permit, you must first secure a Non-Immigrant B visa from a Thai embassy/consulate abroad. Once in Thailand, your employer must sponsor your work permit application to the Ministry of Labor, providing documents including: company registration, financial statements, tax documentation, employment contract, educational credentials, and passport copies. The company must meet capitalization requirements of 2 million baht per foreign employee (with some exceptions). Processing typically takes 7-10 business days. Work permits are specific to your employer, job description, and work location, requiring amendments if any of these change.
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
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Thai immigration laws and regulations are subject to change, often with little notice. While we strive to provide accurate and up-to-date information, we recommend confirming current requirements with Thai embassies, consulates, or the Immigration Bureau. Visa applications should be prepared carefully to ensure compliance with all current regulations.
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
                Planning Your Stay in Thailand?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on visa options and immigration requirements.
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

export default VisaImmigration;
