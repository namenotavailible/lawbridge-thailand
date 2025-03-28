
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Building, FileText, FileCheck, CheckCircle, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StartingBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-legal-business/10 to-transparent">
          <div className="container px-4">
            <div className="flex flex-col max-w-3xl mx-auto">
              <Link 
                to="/businesses" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Business Topics
              </Link>
              
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-legal-business bg-legal-business/10 rounded-full self-start">
                Business Legal Topic
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Starting a Business in Thailand
              </h1>
              
              <p className="text-xl text-muted-foreground">
                A comprehensive guide to registering and establishing your business in Thailand, including legal requirements, documentation, and procedures.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Business Structures in Thailand</h2>
                  <p>
                    When establishing a business in Thailand, entrepreneurs can choose from several different business structures, each with its own legal requirements, liability protection, and tax implications.
                  </p>
                  
                  <h3>Sole Proprietorship</h3>
                  <p>
                    A sole proprietorship is the simplest form of business structure in Thailand, where a single individual owns and operates the business. While easy to establish, the owner has unlimited liability for business debts.
                  </p>
                  
                  <h3>Partnership</h3>
                  <p>
                    Thailand recognizes three types of partnerships:
                  </p>
                  <ul>
                    <li><strong>Unregistered Ordinary Partnership</strong>: All partners have unlimited liability.</li>
                    <li><strong>Registered Ordinary Partnership</strong>: Similarly has unlimited liability but is registered as a legal entity.</li>
                    <li><strong>Limited Partnership</strong>: Includes both partners with unlimited liability and limited partners whose liability is restricted to their capital contribution.</li>
                  </ul>
                  
                  <h3>Private Limited Company</h3>
                  <p>
                    The most popular business structure for foreign investors in Thailand is the Private Limited Company. This structure requires:
                  </p>
                  <ul>
                    <li>A minimum of three shareholders</li>
                    <li>Registration with the Department of Business Development</li>
                    <li>Compliance with the Foreign Business Act if foreign ownership exceeds 49%</li>
                  </ul>
                  
                  <h2>Registration Process</h2>
                  <p>
                    Registering a business in Thailand involves several steps:
                  </p>
                  <ol>
                    <li>Reserve a company name with the Department of Business Development (DBD)</li>
                    <li>File a Memorandum of Association</li>
                    <li>Hold a statutory meeting</li>
                    <li>Register the company formation</li>
                    <li>Register for tax identification</li>
                    <li>Register for VAT (if applicable)</li>
                    <li>Register for social security</li>
                  </ol>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building size={20} className="mr-2 text-legal-business" />
                        Capital Requirements
                      </CardTitle>
                      <CardDescription>Financial considerations for new businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        For a Private Limited Company, the minimum registered capital requirement depends on foreign ownership:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>For Thai majority-owned companies: THB 100,000</li>
                        <li>For foreign majority-owned companies: THB 2 million (or THB 3 million for businesses requiring a Foreign Business License)</li>
                        <li>At least 25% of the registered capital must be paid up upon company formation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText size={20} className="mr-2 text-legal-business" />
                        Required Documentation
                      </CardTitle>
                      <CardDescription>Essential paperwork for business registration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        When registering a company in Thailand, you'll need to prepare:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Company name reservation approval</li>
                        <li>Memorandum of Association</li>
                        <li>Articles of Association</li>
                        <li>Statutory meeting documentation</li>
                        <li>Director registration forms</li>
                        <li>Shareholder information and proof of identity</li>
                        <li>Office location documentation (rental agreement or title deed)</li>
                        <li>Bank confirmation of capital deposit</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-secondary/30 rounded-xl p-6 mb-8 sticky top-24">
                  <h3 className="text-xl font-medium mb-4">Quick Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#business-structures" className="text-legal-business hover:underline">Business Structures</a>
                    </li>
                    <li>
                      <a href="#registration-process" className="text-legal-business hover:underline">Registration Process</a>
                    </li>
                    <li>
                      <a href="#capital-requirements" className="text-legal-business hover:underline">Capital Requirements</a>
                    </li>
                    <li>
                      <a href="#required-documentation" className="text-legal-business hover:underline">Required Documentation</a>
                    </li>
                    <li>
                      <a href="#foreign-business-act" className="text-legal-business hover:underline">Foreign Business Act</a>
                    </li>
                    <li>
                      <a href="#faq" className="text-legal-business hover:underline">FAQs</a>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-4">Useful Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="https://www.dbd.go.th/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileCheck size={16} className="mr-2" />
                          Department of Business Development
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.rd.go.th/english/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileCheck size={16} className="mr-2" />
                          Revenue Department
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/resources/templates"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileCheck size={16} className="mr-2" />
                          Business Templates
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button
                  className="w-full mb-4"
                  variant="default"
                  asChild
                >
                  <Link to="/tools/scenario-simulator">
                    Try Business Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our network of qualified business consultants and legal professionals can assist with your business registration needs.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/resources/professionals">
                      Find a Consultant
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="faq" className="py-16 bg-secondary/30">
          <div className="container px-4">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions about starting a business in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can a foreigner own 100% of a company in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    In most business sectors, foreign ownership is limited to 49% under the Foreign Business Act. However, 100% foreign ownership is possible in certain circumstances:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Board of Investment (BOI) promotion</li>
                      <li>US citizens under the Treaty of Amity</li>
                      <li>Businesses not restricted under the Foreign Business Act</li>
                      <li>With a Foreign Business License for specific activities</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How long does it take to register a company in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    The typical timeframe for registering a limited company in Thailand is 3-4 weeks. This includes name reservation (3-5 days), filing the Memorandum of Association (1-2 days), holding the statutory meeting, and company registration (2-3 days). Additional time may be needed for foreign business licenses or BOI applications.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What are the ongoing compliance requirements?
                  </AccordionTrigger>
                  <AccordionContent>
                    Thai companies must maintain:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Annual financial statements filed with the Department of Business Development</li>
                      <li>Corporate income tax returns</li>
                      <li>Monthly VAT filings (if applicable)</li>
                      <li>Social security contributions</li>
                      <li>Withholding tax compliance</li>
                      <li>Annual shareholders' meetings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Do I need a work permit to run my business in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, foreign nationals who wish to work in their Thai company require a valid Non-Immigrant Business Visa and a Work Permit. Being a shareholder alone does not automatically grant the right to work in Thailand. The company must meet certain requirements regarding paid-up capital and the ratio of Thai to foreign employees to sponsor work permits.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="bg-white rounded-xl border p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-medium mb-4">
                Ready to Start Your Business?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our business tools or browse our document templates to get started on your entrepreneurial journey in Thailand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/tools/scenario-simulator">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Business Scenario Simulator
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to="/resources/templates">
                    Business Templates
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

export default StartingBusiness;
