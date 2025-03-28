
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, ShieldAlert, FileText, CheckCircle, HelpCircle, Lightbulb, BookText, Copyright, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const IntellectualProperty = () => {
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
                Intellectual Property in Thailand
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Protecting your business innovations and creative assets through trademark registration, copyright, patents, and addressing infringement.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Thailand's Intellectual Property Framework</h2>
                  <p>
                    Thailand has established a comprehensive legal framework for intellectual property protection, generally aligned with international standards. The country is a member of key international IP conventions, including the World Intellectual Property Organization (WIPO), the Paris Convention, the Berne Convention, and the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS).
                  </p>
                  <p>
                    The Department of Intellectual Property (DIP) under the Ministry of Commerce is the primary government agency responsible for intellectual property administration and protection in Thailand.
                  </p>
                  
                  <h3>Trademark Protection</h3>
                  <p>
                    Trademarks in Thailand are governed by the Trademark Act B.E. 2534 (1991) as amended. Key aspects include:
                  </p>
                  <ul>
                    <li>Protection is granted on a first-to-file basis (rather than first-to-use)</li>
                    <li>Registration is valid for 10 years from the filing date and can be renewed indefinitely</li>
                    <li>Multi-class applications are permitted</li>
                    <li>Non-use of a registered trademark for three consecutive years may result in cancellation</li>
                    <li>Well-known marks may receive protection even without registration</li>
                  </ul>
                  <p>
                    The trademark registration process typically takes 12-18 months if there are no objections or oppositions.
                  </p>
                  
                  <h3>Copyright Protection</h3>
                  <p>
                    Copyright in Thailand is automatically protected under the Copyright Act B.E. 2537 (1994) as amended. Copyright protection covers:
                  </p>
                  <ul>
                    <li>Literary works (including computer programs)</li>
                    <li>Dramatic, artistic, and musical works</li>
                    <li>Audiovisual works, cinematographic works, and sound recordings</li>
                    <li>Broadcasts and performances</li>
                    <li>Other works in the literary, scientific, or artistic domain</li>
                  </ul>
                  <p>
                    Copyright protection generally lasts for the lifetime of the author plus 50 years. For corporate works, protection lasts for 50 years from creation or first publication.
                  </p>
                  <p>
                    While registration is not required for copyright protection, the Copyright Office offers a recordation system that provides evidence of ownership.
                  </p>
                  
                  <h3>Patent Protection</h3>
                  <p>
                    Patents in Thailand are governed by the Patent Act B.E. 2522 (1979) as amended. Thailand offers three types of patent protection:
                  </p>
                  <ul>
                    <li><strong>Invention Patents:</strong> For new inventions that involve an inventive step and are capable of industrial application. Protection lasts for 20 years from the filing date.</li>
                    <li><strong>Design Patents:</strong> For new ornamental designs of an object. Protection lasts for 10 years from the filing date.</li>
                    <li><strong>Petty Patents:</strong> For inventions that don't meet the inventive step requirement but are new and capable of industrial application. Protection lasts for 6 years, extendable to 10 years.</li>
                  </ul>
                  <p>
                    The patent registration process can be lengthy, often taking 3-5 years for invention patents, though design patents and petty patents typically require less time.
                  </p>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Copyright size={20} className="mr-2 text-legal-business" />
                        Trademark Registration Process
                      </CardTitle>
                      <CardDescription>Step-by-step guide to registering a trademark in Thailand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The trademark registration process in Thailand involves several steps:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mt-4">
                        <li><strong>Preliminary Search:</strong> Conduct a search to check for similar existing marks</li>
                        <li><strong>Preparation and Filing:</strong> Prepare and file the application with the Department of Intellectual Property, including:
                          <ul className="list-disc pl-5 mt-1">
                            <li>Trademark application form</li>
                            <li>Clear reproduction of the mark</li>
                            <li>List of goods/services</li>
                            <li>Power of attorney (if filed through an agent)</li>
                            <li>Filing fee (1,000 THB per application per class)</li>
                          </ul>
                        </li>
                        <li><strong>Formal Examination:</strong> The DIP checks for compliance with formal requirements</li>
                        <li><strong>Substantive Examination:</strong> The examiner determines if the mark is distinctive and not prohibited</li>
                        <li><strong>Publication:</strong> If approved, the application is published in the Trademark Journal for 60 days</li>
                        <li><strong>Opposition Period:</strong> Third parties may file oppositions during the 60-day publication period</li>
                        <li><strong>Registration:</strong> If no opposition is filed or if opposition is unsuccessful, the trademark is registered</li>
                        <li><strong>Certificate Issuance:</strong> A registration certificate is issued upon payment of the registration fee</li>
                      </ol>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle size={20} className="mr-2 text-amber-500" />
                        Intellectual Property Enforcement
                      </CardTitle>
                      <CardDescription>Options for addressing IP infringement in Thailand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Several enforcement options are available for IP rights holders in Thailand:
                      </p>
                      <Table className="mt-4">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Enforcement Method</TableHead>
                            <TableHead>Details</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Warning Letter</TableCell>
                            <TableCell>Often used as a first step to notify infringers and request cessation</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Civil Action</TableCell>
                            <TableCell>Lawsuits can seek damages, injunctions, and destruction of infringing goods</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Criminal Prosecution</TableCell>
                            <TableCell>IP infringement is a criminal offense in Thailand, with potential imprisonment and fines</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Administrative Action</TableCell>
                            <TableCell>Raids and seizures conducted by specialized authorities like the DIP Police, Economic Crime Division, or Customs</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Border Measures</TableCell>
                            <TableCell>Thai Customs can detain suspected infringing goods at borders</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <p className="mt-4 text-muted-foreground">
                        The Central Intellectual Property and International Trade Court (IP&IT Court) specializes in intellectual property cases, providing a more streamlined litigation process with specialized judges.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-secondary/30 rounded-xl p-6 mb-8 lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
                  <h3 className="text-xl font-medium mb-4">Quick Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#ip-framework" className="text-legal-business hover:underline">IP Framework</a>
                    </li>
                    <li>
                      <a href="#trademarks" className="text-legal-business hover:underline">Trademark Protection</a>
                    </li>
                    <li>
                      <a href="#copyright" className="text-legal-business hover:underline">Copyright Protection</a>
                    </li>
                    <li>
                      <a href="#patents" className="text-legal-business hover:underline">Patent Protection</a>
                    </li>
                    <li>
                      <a href="#enforcement" className="text-legal-business hover:underline">Enforcement Options</a>
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
                          href="https://www.ipthailand.go.th/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Department of Intellectual Property
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.wipo.int/portal/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          World Intellectual Property Organization
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/resources/templates"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          IP Agreement Templates
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
                    Try IP Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our network of intellectual property attorneys can assist with IP registration, enforcement, and protection strategies.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/resources/professionals">
                      Find an IP Attorney
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
              subtitle="Common questions about intellectual property in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How long does it take to register a trademark in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    The trademark registration process in Thailand typically takes 12-18 months from filing to registration if there are no objections or oppositions. This timeline includes:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Formal examination: 1-2 months</li>
                      <li>Substantive examination: 6-9 months</li>
                      <li>Publication period: 60 days</li>
                      <li>Registration and certificate issuance: 2-3 months</li>
                    </ul>
                    Expedited examination is not officially available, but applications claiming priority under the Paris Convention may receive earlier examination. To avoid delays, it's important to ensure applications are correctly prepared with proper classification of goods/services and that distinctive marks are selected.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Is it necessary to register my copyright in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Copyright protection in Thailand is automatic and does not require registration. Once an original work is created and fixed in a tangible medium, it is automatically protected under the Copyright Act.
                    
                    However, recordation of copyright with the Department of Intellectual Property is recommended for several reasons:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>It provides prima facie evidence of copyright ownership</li>
                      <li>It establishes a clear date of creation or publication</li>
                      <li>It facilitates enforcement actions, as authorities often look for proof of ownership</li>
                      <li>It can be valuable evidence in case of litigation</li>
                    </ul>
                    The recordation process is relatively simple, requiring submission of a copyright notification form, samples of the work, and supporting documents. The process typically takes 2-3 months to complete.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What is the difference between a patent and a petty patent in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Thailand offers both patents and petty patents (sometimes called utility models), which differ in several key aspects:</p>
                    
                    <p className="font-medium mt-2">Invention Patents:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Require novelty, inventive step, and industrial applicability</li>
                      <li>Undergo rigorous substantive examination</li>
                      <li>Protection period: 20 years from filing date (non-renewable)</li>
                      <li>Longer registration process (3-5 years or more)</li>
                      <li>Higher level of innovation required</li>
                    </ul>
                    
                    <p className="font-medium mt-2">Petty Patents:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Require novelty and industrial applicability, but no inventive step</li>
                      <li>Only formal examination (no substantive examination unless requested)</li>
                      <li>Protection period: 6 years from filing date (renewable twice for 2 years each, up to 10 years total)</li>
                      <li>Faster registration process (often 1-2 years)</li>
                      <li>Suitable for minor improvements or adaptations</li>
                    </ul>
                    
                    <p className="mt-2">Petty patents are ideal for simpler inventions with shorter commercial lifecycles, while invention patents are better for significant innovations requiring longer-term protection.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How can I protect trade secrets in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Trade secrets in Thailand are protected under the Trade Secrets Act B.E. 2545 (2002). To qualify for protection, information must:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Be secret (not generally known or accessible)</li>
                      <li>Have commercial value because of its secrecy</li>
                      <li>Have been subject to reasonable measures to keep it secret</li>
                    </ul>
                    
                    <p className="mt-2">Recommended protective measures include:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Implementing confidentiality agreements (NDAs) with employees, contractors, and business partners</li>
                      <li>Marking documents as "confidential" or "trade secret"</li>
                      <li>Restricting access to sensitive information on a need-to-know basis</li>
                      <li>Using physical security measures (locked cabinets, restricted areas)</li>
                      <li>Implementing IT security protocols (passwords, encryption, access logs)</li>
                      <li>Including non-compete clauses in employment contracts where permissible</li>
                      <li>Conducting regular training on confidentiality obligations</li>
                    </ul>
                    
                    <p className="mt-2">Trade secret protection has no time limit as long as the information remains secret. However, unlike registered IP rights, there is no formal registration system, so maintaining proper documentation of ownership and security measures is crucial for enforcement.</p>
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
                Protect Your Intellectual Property
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step in securing your valuable business assets through proper IP protection strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/tools/scenario-simulator">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    IP Protection Simulator
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to="/resources/templates">
                    IP Agreement Templates
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

export default IntellectualProperty;
