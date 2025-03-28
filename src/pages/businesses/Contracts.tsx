
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, File, Gavel, FileText, CheckCircle, HelpCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contracts = () => {
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
                Contracts & Agreements in Thailand
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Essential legal knowledge for creating enforceable contracts, standard terms, and resolving disputes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Contract Law in Thailand</h2>
                  <p>
                    Thai contract law is primarily governed by the Civil and Commercial Code (CCC), particularly in Books I and II. The principles of contract law in Thailand are largely based on civil law systems, with influences from Western legal traditions.
                  </p>
                  
                  <h3>Essential Elements of Valid Contracts</h3>
                  <p>
                    For a contract to be legally binding in Thailand, it must include the following elements:
                  </p>
                  <ul>
                    <li><strong>Legal Capacity:</strong> All parties must have the legal capacity to enter into the contract</li>
                    <li><strong>Mutual Consent:</strong> There must be a genuine offer and acceptance between the parties</li>
                    <li><strong>Legal Object:</strong> The purpose of the contract must not be illegal, impossible, or contrary to public order or good morals</li>
                    <li><strong>Formalities:</strong> Certain contracts require specific formalities (e.g., written form, registration) to be valid</li>
                  </ul>
                  
                  <h3>Contract Formation</h3>
                  <p>
                    A contract is formed when an offer is accepted. An offer must be sufficiently definite and indicate the offeror's intention to be bound upon acceptance. The acceptance must be unconditional and match the terms of the offer exactly. Any modification to the terms constitutes a counter-offer, not an acceptance.
                  </p>
                  
                  <h3>Written vs. Verbal Contracts</h3>
                  <p>
                    Most contracts in Thailand can be made verbally or in writing. However, certain contracts must be in writing to be enforceable, including:
                  </p>
                  <ul>
                    <li>Contracts for the sale of immovable property or any of its interests</li>
                    <li>Contracts for the sale of movable property where the agreed value is THB 20,000 or more</li>
                    <li>Hire purchase agreements</li>
                    <li>Loan agreements exceeding THB 2,000</li>
                    <li>Guarantees</li>
                    <li>Insurance contracts</li>
                  </ul>
                  <p>
                    Even for contracts that don't legally require a written form, documentation is strongly recommended for evidentiary purposes.
                  </p>
                  
                  <h3>Language Requirements</h3>
                  <p>
                    There is no legal requirement for contracts to be in Thai language. Contracts can be executed in any language agreed upon by the parties. However, if a contract needs to be presented in court or to government authorities, an official Thai translation may be required.
                  </p>
                  <p>
                    For contracts with international elements, it's common practice to prepare bilingual versions (Thai and English) and specify which language prevails in case of inconsistencies.
                  </p>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <ShieldCheck size={20} className="mr-2 text-legal-business" />
                        Contract Enforcement & Remedies
                      </CardTitle>
                      <CardDescription>Legal options when contracts are breached</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        When a contract is breached in Thailand, the non-breaching party may seek various remedies:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Specific Performance:</strong> Court order compelling the breaching party to fulfill their contractual obligations</li>
                        <li><strong>Damages:</strong> Monetary compensation for losses caused by the breach</li>
                        <li><strong>Termination:</strong> Ending the contract and returning parties to their pre-contractual positions</li>
                        <li><strong>Liquidated Damages:</strong> Pre-agreed compensation specified in the contract</li>
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        Thai courts generally follow the principle that damages should only compensate for actual losses directly resulting from the breach. Punitive damages are not typically awarded in contract cases.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle size={20} className="mr-2 text-amber-500" />
                        Common Pitfalls in Thai Contracts
                      </CardTitle>
                      <CardDescription>Issues to watch for when drafting agreements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        When drafting or reviewing contracts in Thailand, be aware of these common issues:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Unfair Contract Terms:</strong> The Unfair Contract Terms Act provides protection against overly one-sided contract provisions</li>
                        <li><strong>Vague Language:</strong> Imprecise terms can lead to interpretation disputes and enforcement challenges</li>
                        <li><strong>Missing Essential Terms:</strong> Failing to address key elements like payment terms, delivery, or termination procedures</li>
                        <li><strong>Improper Form:</strong> Not meeting formal requirements for specific contract types</li>
                        <li><strong>Conflicting Clauses:</strong> Inconsistent provisions within the same agreement</li>
                        <li><strong>Unenforceable Penalty Clauses:</strong> Excessive liquidated damages may be reduced by courts</li>
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
                      <a href="#contract-law" className="text-legal-business hover:underline">Contract Law Basics</a>
                    </li>
                    <li>
                      <a href="#essential-elements" className="text-legal-business hover:underline">Essential Elements</a>
                    </li>
                    <li>
                      <a href="#contract-types" className="text-legal-business hover:underline">Contract Types</a>
                    </li>
                    <li>
                      <a href="#enforcement" className="text-legal-business hover:underline">Enforcement & Remedies</a>
                    </li>
                    <li>
                      <a href="#dispute-resolution" className="text-legal-business hover:underline">Dispute Resolution</a>
                    </li>
                    <li>
                      <a href="#faq" className="text-legal-business hover:underline">FAQs</a>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-4">Useful Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          to="/resources/templates"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Contract Templates
                        </Link>
                      </li>
                      <li>
                        <a 
                          href="https://www.thailandlawonline.com/civil-and-commercial-code" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Civil and Commercial Code
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://thac.or.th/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Thailand Arbitration Center
                        </a>
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
                    Try Contract Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our network of qualified legal professionals can assist with contract drafting, review, and dispute resolution.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/resources/professionals">
                      Find a Legal Professional
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
              subtitle="Common questions about contracts and agreements in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Does Thai law recognize electronic contracts or signatures?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, the Electronic Transactions Act B.E. 2544 (2001) and its amendments recognize the legal validity of electronic contracts and signatures in Thailand. Under this law:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Information shall not be denied legal effect solely because it is in electronic form</li>
                      <li>Electronic signatures are considered legally equivalent to handwritten signatures if they meet certain reliability requirements</li>
                      <li>Certain transactions still require traditional documentation (e.g., family law matters, creation of wills, transactions involving immovable property)</li>
                    </ul>
                    For important business contracts, it's advisable to use secure electronic signature platforms that provide proper authentication and verification.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How are choice of law and jurisdiction clauses treated in Thai contracts?
                  </AccordionTrigger>
                  <AccordionContent>
                    Thai law generally recognizes the parties' freedom to choose the governing law and forum for their contracts, with some limitations:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>The chosen law must not violate Thai public policy or morality</li>
                      <li>Certain matters are exclusively governed by Thai law regardless of choice of law clauses (e.g., property rights for assets in Thailand)</li>
                      <li>Consumer contracts, employment contracts, and insurance contracts may have restrictions on choice of law and jurisdiction</li>
                      <li>Thai courts may still assert jurisdiction despite a foreign jurisdiction clause if there are sufficient connecting factors to Thailand</li>
                    </ul>
                    For international business contracts, it's common practice to include both governing law and dispute resolution clauses that specify arbitration or a particular jurisdiction.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What dispute resolution options are available for contract disputes in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Contract disputes in Thailand can be resolved through several mechanisms:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>Litigation:</strong> Through the Thai court system, which includes specialized courts like the Central Intellectual Property and International Trade Court</li>
                      <li><strong>Arbitration:</strong> Thailand is a signatory to the New York Convention, and arbitral awards are generally enforceable. Key arbitration institutions include the Thailand Arbitration Center (THAC) and the Thai Arbitration Institute (TAI)</li>
                      <li><strong>Mediation:</strong> A non-binding process facilitated by a neutral third party to help parties reach a mutually acceptable resolution</li>
                      <li><strong>Negotiation:</strong> Direct discussions between parties to resolve disputes without third-party intervention</li>
                    </ul>
                    Arbitration is often preferred for international business contracts due to greater procedural flexibility, confidentiality, and ease of enforcement across borders.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Are limitation of liability clauses enforceable in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Limitation of liability clauses are generally recognized in Thailand, but their enforceability is subject to certain restrictions:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Under the Unfair Contract Terms Act, clauses that excessively benefit one party may be deemed unfair and unenforceable or subject to judicial modification</li>
                      <li>Clauses attempting to exclude liability for fraud, gross negligence, or intentional wrongdoing are not enforceable</li>
                      <li>In consumer contracts, limitations on a business's liability for defective products or services may be scrutinized more strictly</li>
                      <li>The burden of proving that a limitation clause is fair and reasonable typically falls on the party seeking to enforce it</li>
                    </ul>
                    To maximize enforceability, limitation clauses should be clearly written, prominently displayed, specifically negotiated, and reasonable in scope.
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
                Create Legally Sound Contracts
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Access our contract templates or connect with legal professionals to develop agreements for your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/resources/templates">
                    <File className="mr-2 h-4 w-4" />
                    Contract Templates
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to="/tools/scenario-simulator">
                    Contract Scenario Simulator
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

export default Contracts;
