
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, GlobeLock, FileText, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ForeignBusinessAct = () => {
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
                Foreign Business Act Thailand
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Understanding Thailand's Foreign Business Act (FBA), restricted business activities, and legal options for foreign investors.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Overview of the Foreign Business Act</h2>
                  <p>
                    The Foreign Business Act B.E. 2542 (1999) is the primary legislation governing foreign investment and business operations in Thailand. The Act classifies business activities into three lists of restricted businesses in which foreign participation is either prohibited or limited.
                  </p>
                  
                  <h3>Definition of a "Foreign" Business</h3>
                  <p>
                    Under the FBA, a business is considered "foreign" if:
                  </p>
                  <ul>
                    <li>A natural person who is not a Thai national</li>
                    <li>A juristic person not registered in Thailand</li>
                    <li>A juristic person registered in Thailand with 50% or more of its shares held by non-Thai persons or entities</li>
                    <li>A Thai registered partnership where the managing partner or manager is a foreigner</li>
                  </ul>
                  
                  <h3>The Three Lists of Restricted Businesses</h3>
                  <p>
                    The FBA categorizes restricted business activities into three lists:
                  </p>
                  
                  <h4>List 1: Businesses Prohibited to Foreigners</h4>
                  <p>
                    Foreign entities are strictly prohibited from operating businesses in List 1, which includes:
                  </p>
                  <ul>
                    <li>Newspaper business, radio broadcasting, or television station</li>
                    <li>Rice farming, plantation, or crop growing</li>
                    <li>Livestock farming</li>
                    <li>Forestry and timber processing from natural forests</li>
                    <li>Fishery in Thai territorial waters and specific economic zones</li>
                    <li>Thai herb extraction</li>
                    <li>Trading and auctioning of Thai antiques</li>
                    <li>Trading of Buddha images and monk bowls</li>
                    <li>Land trading</li>
                  </ul>
                  
                  <h4>List 2: Businesses Related to National Security or Affecting Arts and Culture, Traditions, Folk Handicrafts, or Natural Resources and Environment</h4>
                  <p>
                    Foreign companies may operate businesses in List 2 only with Cabinet approval and 40% Thai ownership. This list includes:
                  </p>
                  <ul>
                    <li>Production, distribution, and maintenance of firearms, ammunition, explosives, etc.</li>
                    <li>Domestic transportation by land, water, or air</li>
                    <li>Trading of Thai antiques or art objects</li>
                    <li>Production of carved wood</li>
                    <li>Silkworm farming, silk production, and silk weaving</li>
                    <li>Production of Thai musical instruments</li>
                    <li>Production of gold, silver, or lacquerware</li>
                    <li>Mining, including rock blasting and rock crushing</li>
                  </ul>
                  
                  <h4>List 3: Businesses in which Thais Are Not Ready to Compete with Foreigners</h4>
                  <p>
                    Foreign entities may operate businesses in List 3 with permission from the Director-General of the Department of Business Development. This list includes many service businesses such as:
                  </p>
                  <ul>
                    <li>Wholesale and retail</li>
                    <li>Brokerage and agency</li>
                    <li>Advertising</li>
                    <li>Hotel operation (excluding hotel management)</li>
                    <li>Tour guiding</li>
                    <li>Selling food and beverages</li>
                    <li>Most service businesses</li>
                  </ul>
                </div>
                
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle size={20} className="mr-2 text-green-600" />
                        Legal Options for Foreign Investors
                      </CardTitle>
                      <CardDescription>Strategies to operate restricted businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Foreign investors have several legal options to operate businesses restricted under the FBA:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Foreign Business License (FBL):</strong> Apply for permission from the Director-General of the Department of Business Development</li>
                        <li><strong>Board of Investment (BOI) Promotion:</strong> Obtain investment promotion which may include exemption from certain FBA restrictions</li>
                        <li><strong>Treaty of Amity (for US citizens):</strong> Under this treaty, American citizens receive the same treatment as Thai nationals for most business activities</li>
                        <li><strong>Industrial Estate Authority of Thailand (IEAT):</strong> Businesses located in designated industrial estates may receive certain exemptions</li>
                        <li><strong>Thai Majority Ownership:</strong> Partner with Thai nationals to maintain Thai majority ownership (51% or more)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle size={20} className="mr-2 text-amber-500" />
                        Nominee Structures Warning
                      </CardTitle>
                      <CardDescription>Legal risks of circumventing FBA restrictions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The use of Thai nominees to circumvent foreign ownership restrictions is explicitly prohibited under the FBA. Penalties for violations include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Fines up to THB 1,000,000</li>
                        <li>Imprisonment for up to 3 years</li>
                        <li>Court-ordered termination of business operations</li>
                        <li>Personal liability for directors</li>
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        Thai authorities actively investigate suspected nominee arrangements, particularly in sectors known for foreign investment such as property development, retail, and tourism.
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
                      <a href="#overview" className="text-legal-business hover:underline">FBA Overview</a>
                    </li>
                    <li>
                      <a href="#restricted-lists" className="text-legal-business hover:underline">Restricted Business Lists</a>
                    </li>
                    <li>
                      <a href="#legal-options" className="text-legal-business hover:underline">Legal Options for Foreigners</a>
                    </li>
                    <li>
                      <a href="#boi-promotion" className="text-legal-business hover:underline">BOI Promotion</a>
                    </li>
                    <li>
                      <a href="#nominee-risks" className="text-legal-business hover:underline">Nominee Structure Risks</a>
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
                          <FileText size={16} className="mr-2" />
                          Department of Business Development
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
                        <a 
                          href="https://www.ieat.go.th/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-legal-business hover:underline"
                        >
                          <FileText size={16} className="mr-2" />
                          Industrial Estate Authority
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
                    Try Business Scenario Simulator
                  </Link>
                </Button>
                
                <div className="bg-legal-business/5 border border-legal-business/10 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HelpCircle size={20} className="mr-2 text-legal-business" />
                    Need Professional Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our network of qualified business consultants and legal professionals can advise on FBA compliance and strategies.
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
              subtitle="Common questions about the Foreign Business Act and foreign investment in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can a foreigner own 100% of a Thai company?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, a foreigner can own 100% of a Thai company, but only if the business activity is not restricted under the Foreign Business Act, or if the foreign investor obtains a Foreign Business License, BOI promotion, or operates under special agreements like the US-Thailand Treaty of Amity. For businesses on the restricted lists, foreign ownership is typically limited to 49% or less.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is the process for obtaining a Foreign Business License?
                  </AccordionTrigger>
                  <AccordionContent>
                    The process for obtaining a Foreign Business License (FBL) includes:
                    <ol className="list-decimal pl-5 space-y-1 mt-2">
                      <li>Preparation of required documents including business plans, financial projections, and details of technology transfer</li>
                      <li>Submission of application to the Department of Business Development</li>
                      <li>Review by the Foreign Business Committee</li>
                      <li>Decision by the Director-General or Cabinet (depending on the business type)</li>
                      <li>Issuance of the license upon approval (typically takes 60-90 days)</li>
                    </ol>
                    The application fee is THB 2,000, and upon approval, the license fee ranges from THB 20,000 to THB 40,000 depending on the type of business.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What are the benefits of BOI promotion for foreign investors?
                  </AccordionTrigger>
                  <AccordionContent>
                    The Board of Investment (BOI) offers numerous benefits to promoted companies:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Exemption from foreign ownership restrictions under the FBA</li>
                      <li>Permission to own land for business operations</li>
                      <li>Facilitation of visas and work permits for foreign experts and technicians</li>
                      <li>Tax incentives including corporate income tax exemptions (up to 8 years), import duty exemptions on machinery and raw materials</li>
                      <li>Permission to bring in foreign skilled workers and experts</li>
                    </ul>
                    Eligibility depends on the industry sector, technology transfer, location, and other criteria determined by the BOI.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How does the US-Thailand Treaty of Amity work?
                  </AccordionTrigger>
                  <AccordionContent>
                    The Treaty of Amity and Economic Relations between the United States and Thailand allows American citizens and companies to:
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Own up to 100% of a company in Thailand</li>
                      <li>Operate in sectors restricted for other foreigners under the FBA's List 3</li>
                      <li>Receive national treatment, meaning the same rights as Thai nationals in business operations</li>
                    </ul>
                    To qualify, the American company must be registered in the US, and American shareholders must own at least 51% of the company. The company must obtain a Treaty of Amity certificate from the US Embassy and register with the Department of Business Development. Certain activities remain restricted, including communications, transportation, fiduciary functions, banking, land exploitation, and natural resource exploitation.
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
                Navigating Foreign Investment in Thailand
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Get personalized guidance on FBA compliance and investment strategies for your business in Thailand.
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

export default ForeignBusinessAct;
