
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Users, FileText, CheckCircle, HelpCircle, Calendar, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LaborLaw = () => {
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
                Thai Labor Law for Businesses
              </h1>
              
              <p className="text-xl text-muted-foreground">
                A comprehensive guide to employment regulations, hiring practices, and employer obligations in Thailand.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Labor Protection Act Overview</h2>
                  <p>
                    The Labor Protection Act B.E. 2541 (1998) and its amendments form the foundation of employment law in Thailand. The Act applies to most employers and employees, establishing minimum standards for employment conditions, benefits, and worker protections.
                  </p>
                  
                  <h3>Employment Contracts</h3>
                  <p>
                    Employment contracts in Thailand can be written or verbal. While not legally required to be in writing, a written contract is highly recommended to clearly establish terms and conditions of employment and prevent disputes. Key elements of employment contracts include:
                  </p>
                  <ul>
                    <li>Job description and responsibilities</li>
                    <li>Compensation and benefits</li>
                    <li>Work location and hours</li>
                    <li>Probation period (if applicable)</li>
                    <li>Duration (fixed-term or indefinite)</li>
                    <li>Termination conditions</li>
                    <li>Non-competition clauses (if applicable)</li>
                  </ul>
                  
                  <h3>Working Hours and Overtime</h3>
                  <p>
                    Standard working hours in Thailand are:
                  </p>
                  <ul>
                    <li>Maximum 8 hours per day and 48 hours per week for most work</li>
                    <li>Maximum 7 hours per day and 42 hours per week for hazardous work</li>
                    <li>Overtime is limited to 36 hours per week</li>
                    <li>At least 1 rest day per week, with an interval of not more than 6 days</li>
                  </ul>
                  <p>
                    Overtime compensation must be paid at a rate of at least 1.5 times the regular hourly wage. Work on holidays requires compensation at 3 times the regular rate.
                  </p>
                  
                  <h3>Minimum Wage</h3>
                  <p>
                    Thailand's minimum wage varies by province, ranging from THB 313 to THB 336 per day (as of 2023). Employers must comply with the minimum wage regulations applicable in their province.
                  </p>
                  
                  <h3>Leave Entitlements</h3>
                  <p>
                    Thai labor law mandates several types of leave:
                  </p>
                  <ul>
                    <li><strong>Annual Leave:</strong> Minimum 6 days after one year of continuous employment</li>
                    <li><strong>Sick Leave:</strong> Up to 30 days per year with pay</li>
                    <li><strong>Maternity Leave:</strong> 98 days (45 days paid by the employer, 45 days paid by social security)</li>
                    <li><strong>Military Service Leave:</strong> As required by military duty</li>
                    <li><strong>Training Leave:</strong> As necessary for employee skills development</li>
                    <li><strong>Sterilization Leave:</strong> As prescribed by a physician</li>
                    <li><strong>Religious Leave:</strong> As approved by the employer</li>
                  </ul>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <ShieldCheck size={20} className="mr-2 text-legal-business" />
                        Severance Pay Requirements
                      </CardTitle>
                      <CardDescription>Mandatory severance pay based on employment duration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Employers must provide severance pay to employees who are terminated without cause, based on their length of service:
                      </p>
                      <Table className="mt-4">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Length of Service</TableHead>
                            <TableHead>Severance Pay</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>120 days but less than 1 year</TableCell>
                            <TableCell>30 days of wages</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>1 year but less than 3 years</TableCell>
                            <TableCell>90 days of wages</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>3 years but less than 6 years</TableCell>
                            <TableCell>180 days of wages</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>6 years but less than 10 years</TableCell>
                            <TableCell>240 days of wages</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10 years but less than 20 years</TableCell>
                            <TableCell>300 days of wages</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>20 years or more</TableCell>
                            <TableCell>400 days of wages</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <p className="mt-4 text-muted-foreground">
                        Severance pay is not required for termination due to dishonesty, intentional criminal acts against the employer, intentional damage to employer property, absence for three consecutive days without reasonable cause, gross negligence, or violation of work rules after written warning.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar size={20} className="mr-2 text-legal-business" />
                        Social Security Obligations
                      </CardTitle>
                      <CardDescription>Employer contributions and benefits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        All employers with at least one employee must register with the Social Security Office within 30 days of hiring their first employee. The Thai Social Security System provides seven types of benefits:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Injury or sickness benefits</li>
                        <li>Maternity benefits</li>
                        <li>Disability benefits</li>
                        <li>Death benefits</li>
                        <li>Child allowance</li>
                        <li>Old-age benefits</li>
                        <li>Unemployment benefits</li>
                      </ul>
                      <p className="mt-4">
                        Contribution rates (as of 2023):
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Employer: 5% of employee's salary (capped at THB 750 per month)</li>
                        <li>Employee: 5% of salary (capped at THB 750 per month)</li>
                        <li>Government: 2.75% contribution</li>
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
                      <a href="#labor-protection" className="text-legal-business hover:underline">Labor Protection Act</a>
                    </li>
                    <li>
                      <a href="#employment-contracts" className="text-legal-business hover:underline">Employment Contracts</a>
                    </li>
                    <li>
                      <a href="#working-hours" className="text-legal-business hover:underline">Working Hours</a>
                    </li>
                    <li>
                      <a href="#leave-entitlements" className="text-legal-business hover:underline">Leave Entitlements</a>
                    </li>
                    <li>
                      <a href="#severance-pay" className="text-legal-business hover:underline">Severance Pay</a>
                    </li>
                    <li>
                      <a href="#social-security" className="text-legal-business hover:underline">Social Security</a>
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
                          href="https://www.mol.go.th/en/home/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Ministry of Labour
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.sso.go.th/wpr/main/home/en/home/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Social Security Office
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/resources/templates"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Employment Contract Templates
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
                    Try Employment Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our network of qualified labor law specialists can assist with employment contracts, disputes, and compliance.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/resources/professionals">
                      Find a Labor Law Specialist
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
              subtitle="Common questions about labor law in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can employers terminate employees without cause?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, employers can terminate employees without cause in Thailand, but they must:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Provide advance notice as specified in the employment contract (or a minimum of one pay period)</li>
                      <li>Pay severance according to the employee's length of service</li>
                      <li>Ensure the termination is not discriminatory or in retaliation for exercising legal rights</li>
                    </ul>
                    For employees with indefinite employment contracts, employers must provide at least one payment period's notice (or payment in lieu of notice) before termination.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Are there restrictions on hiring foreign employees?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, foreign workers in Thailand require a valid work permit and appropriate visa. Key requirements include:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>For every foreign employee, a company generally needs to employ 4 Thai nationals</li>
                      <li>Paid-up capital requirements (generally 2 million baht per foreign employee)</li>
                      <li>The position must not be reserved for Thai nationals under the Foreign Employment Act</li>
                      <li>The foreign employee must possess the qualifications for the position</li>
                    </ul>
                    Work permits are job and location-specific, meaning a new permit is required if the employee changes jobs or work locations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What documentation must employers maintain?
                  </AccordionTrigger>
                  <AccordionContent>
                    Employers in Thailand must maintain several employment records:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Employee register with personal details of all employees</li>
                      <li>Documents related to payment of wages, overtime, and holiday pay</li>
                      <li>Work rules in Thai (mandatory for workplaces with 10+ employees)</li>
                      <li>Records of employee complaints and resolution</li>
                      <li>Social security registration and contribution records</li>
                      <li>Tax withholding documentation</li>
                    </ul>
                    These records must generally be kept for at least 2 years after termination of employment.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Are probation periods mandatory in Thailand?
                  </AccordionTrigger>
                  <AccordionContent>
                    Probation periods are not mandatory under Thai labor law, but they are common practice. If implemented, they should be:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Clearly stated in the employment contract</li>
                      <li>Typically 30-120 days in duration</li>
                      <li>Specified with clear evaluation criteria</li>
                    </ul>
                    During probation, employers may terminate employment without severance pay if explicitly stated in the employment contract. However, proper notice must still be provided as specified in the contract.
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
                Manage Your Workforce Effectively
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Access our employment tools and templates to ensure compliance with Thai labor laws.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/tools/scenario-simulator">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Employment Scenario Simulator
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to="/resources/templates">
                    Employment Templates
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

export default LaborLaw;
