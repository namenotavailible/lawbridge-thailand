
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Receipt, Calculator, FileText, CheckCircle, HelpCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TaxesVat = () => {
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
                Taxes & VAT in Thailand
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Understanding Thailand's corporate tax system, VAT requirements, and tax compliance for businesses.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Corporate Income Tax</h2>
                  <p>
                    Corporate Income Tax (CIT) in Thailand is imposed on companies and juristic partnerships established under Thai or foreign law, doing business in Thailand or deriving certain types of income from Thailand.
                  </p>
                  
                  <h3>Tax Rates</h3>
                  <p>
                    The standard corporate income tax rate is 20% on net profits. However, different rates apply in the following cases:
                  </p>
                  <ul>
                    <li><strong>Small and Medium Enterprises (SMEs):</strong> Graduated rates from 0% to 20% depending on net profit amount</li>
                    <li><strong>Companies listed on the Stock Exchange of Thailand (SET):</strong> 20%</li>
                    <li><strong>Companies listed on the Market for Alternative Investment (MAI):</strong> 20%</li>
                    <li><strong>Companies granted promotional privileges from the Board of Investment (BOI):</strong> May receive tax exemptions or reductions</li>
                    <li><strong>Regional Operating Headquarters (ROH):</strong> Can receive special tax rates on qualified services and royalty income</li>
                    <li><strong>International Business Center (IBC):</strong> Reduced tax rates for qualifying business activities</li>
                  </ul>
                  
                  <h3>Tax Filing and Payment</h3>
                  <p>
                    Companies must file corporate income tax returns twice a year:
                  </p>
                  <ul>
                    <li><strong>Mid-Year Return (PND 51):</strong> Due within two months after the end of the first six months of the accounting period. This is an estimate based on the projected annual profit, and half of the estimated annual tax must be paid.</li>
                    <li><strong>Annual Return (PND 50):</strong> Due within 150 days from the end of the accounting period. The actual tax amount is calculated on yearly net profit, with credit for the mid-year tax payment.</li>
                  </ul>
                  
                  <h2>Value Added Tax (VAT)</h2>
                  <p>
                    Value Added Tax (VAT) is a consumption tax imposed on the supply of goods and services in Thailand and on the import of goods into Thailand.
                  </p>
                  
                  <h3>VAT Registration and Rates</h3>
                  <p>
                    The standard VAT rate is 7% (temporarily reduced from the statutory rate of 10% until September 30, 2023). Businesses with annual revenue exceeding THB 1.8 million must register for VAT.
                  </p>
                  <p>
                    Some goods and services are exempt from VAT, including:
                  </p>
                  <ul>
                    <li>Unprocessed agricultural products</li>
                    <li>Sale of livestock</li>
                    <li>Education services</li>
                    <li>Medical services</li>
                    <li>Domestic transportation</li>
                    <li>Rental of immovable property</li>
                    <li>Books, newspapers, and magazines</li>
                  </ul>
                  <p>
                    Exports are subject to 0% VAT (zero-rated), allowing exporters to claim input VAT credits.
                  </p>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Receipt size={20} className="mr-2 text-legal-business" />
                        VAT Compliance Requirements
                      </CardTitle>
                      <CardDescription>Documentation and filing obligations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        VAT registrants must comply with the following requirements:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Issue tax invoices for all sales of goods and services</li>
                        <li>Maintain input and output tax records</li>
                        <li>File monthly VAT returns (PP.30) by the 15th day of the following month</li>
                        <li>File annual VAT reconciliation</li>
                        <li>Maintain all VAT documentation for at least 5 years</li>
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        Tax invoices must contain specific information as prescribed by law, including the words "Tax Invoice" (in Thai), the supplier's name and tax ID, the customer's name and address, date of issuance, invoice number, description of goods or services, quantity, and amount of VAT.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar size={20} className="mr-2 text-legal-business" />
                        Withholding Tax
                      </CardTitle>
                      <CardDescription>Key withholding tax obligations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Withholding tax is a prepayment of income tax that is withheld by the payer and remitted to the Revenue Department. Common withholding tax rates include:
                      </p>
                      <Table className="mt-4">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type of Income</TableHead>
                            <TableHead>Withholding Rate</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Dividends</TableCell>
                            <TableCell>10%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Interest</TableCell>
                            <TableCell>15% (1% for financial institutions)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Royalties</TableCell>
                            <TableCell>3% (domestic), 15% (overseas)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Professional Services</TableCell>
                            <TableCell>3%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Rent</TableCell>
                            <TableCell>5%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Advertising</TableCell>
                            <TableCell>2%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Construction</TableCell>
                            <TableCell>3%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <p className="mt-4 text-muted-foreground">
                        Payers must issue withholding tax certificates to recipients, submit monthly withholding tax returns (PND 53 or PND 54), and remit withheld taxes to the Revenue Department by the 7th day of the following month.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-secondary/30 rounded-xl p-6 mb-8 sticky top-24">
                  <h3 className="text-xl font-medium mb-4">Quick Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#corporate-tax" className="text-legal-business hover:underline">Corporate Income Tax</a>
                    </li>
                    <li>
                      <a href="#vat" className="text-legal-business hover:underline">Value Added Tax</a>
                    </li>
                    <li>
                      <a href="#withholding-tax" className="text-legal-business hover:underline">Withholding Tax</a>
                    </li>
                    <li>
                      <a href="#tax-incentives" className="text-legal-business hover:underline">Tax Incentives</a>
                    </li>
                    <li>
                      <a href="#compliance" className="text-legal-business hover:underline">Compliance Requirements</a>
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
                          href="https://www.rd.go.th/english/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Revenue Department
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.boi.go.th/en/index/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Board of Investment
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/resources/templates"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Tax Document Templates
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
                    Try Tax Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with qualified tax advisors who can help you navigate Thailand's tax system and maximize your tax efficiency.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/resources/professionals">
                      Find a Tax Advisor
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
              subtitle="Common questions about taxes and VAT in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    When must a business register for VAT in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    A business must register for VAT in Thailand if its annual revenue from sales of goods or provision of services exceeds THB 1.8 million. Registration should be completed within 30 days after reaching this threshold. Even if revenue is below this threshold, businesses can voluntarily register for VAT if they wish to claim input VAT credits.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What are the tax incentives available for businesses in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Thailand offers several tax incentives for businesses:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>Board of Investment (BOI) Promotion:</strong> Up to 8 years of corporate income tax exemption, import duty exemptions on machinery and raw materials</li>
                      <li><strong>Eastern Economic Corridor (EEC):</strong> Enhanced incentives for investment in targeted industries in the EEC area</li>
                      <li><strong>SME tax benefits:</strong> Reduced corporate income tax rates for small and medium-sized enterprises</li>
                      <li><strong>International Business Center (IBC):</strong> Reduced corporate income tax rates (8%, 5%, or 3%) on qualifying income from associated enterprises</li>
                      <li><strong>R&D tax deductions:</strong> 200% tax deduction for qualifying research and development expenses</li>
                    </ul>
                    Eligibility for these incentives depends on factors such as industry sector, business activity, investment amount, and location.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How are foreign-sourced income taxed in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Thailand operates on a territorial tax system for companies. This means:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Foreign-sourced income is generally not subject to Thai corporate income tax if it is not remitted to Thailand in the same tax year it is earned</li>
                      <li>If foreign-sourced income is brought into Thailand, it becomes subject to corporate income tax in the tax year it is remitted</li>
                      <li>Foreign tax credits may be available for taxes paid overseas on income that is also subject to tax in Thailand</li>
                    </ul>
                    However, anti-tax avoidance rules may apply in certain situations, particularly with the introduction of the Country-by-Country Reporting requirements for large multinational enterprises.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What are the penalties for late tax filing or non-compliance?
                  </AccordionTrigger>
                  <AccordionContent>
                    Penalties for tax non-compliance in Thailand include:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>Late filing:</strong> Surcharge of 100% of the tax amount (capped at 25% for VAT)</li>
                      <li><strong>Late payment:</strong> 1.5% interest per month (capped at the tax amount due)</li>
                      <li><strong>Incorrect filing:</strong> Penalty of up to 100% of the tax shortfall</li>
                      <li><strong>Failure to issue tax invoices:</strong> Fine of up to THB 2,000</li>
                      <li><strong>Tax evasion:</strong> Criminal penalties including imprisonment of up to 7 years and/or fines of up to THB 200,000</li>
                    </ul>
                    The Revenue Department may reduce or waive penalties in certain cases of good faith errors or through voluntary disclosure programs.
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
                Need Help with Your Tax Planning?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our tax tools or connect with professional tax advisors to optimize your business tax strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/tools/scenario-simulator">
                    <Calculator className="mr-2 h-4 w-4" />
                    Tax Scenario Simulator
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to="/resources/templates">
                    Tax Document Templates
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

export default TaxesVat;
