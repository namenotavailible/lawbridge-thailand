import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, ShieldAlert, Gavel, Building2, Scale, Search, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CriminalLaw = () => {
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-legal-criminal/10 to-transparent">
          <div className="container px-4">
            <div className="flex items-center mb-6">
              <Link to="/individuals" className="flex items-center text-muted-foreground hover:text-legal-criminal transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to Individual Legal Topics</span>
              </Link>
            </div>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-legal-criminal bg-legal-criminal/10 rounded-full">
                <ShieldAlert size={16} className="mr-2" />
                <span>Criminal Law</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
                Criminal Law <span className="text-legal-criminal">in Thailand</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Understanding Thailand's criminal justice system, legal rights, and procedures.
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
                Thailand's criminal law system is primarily based on the Thai Criminal Code (Penal Code) and the Criminal Procedure Code. The system combines elements of civil law and common law traditions, with significant influence from European legal systems.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Understanding criminal law is particularly important for both Thai citizens and foreigners, as ignorance of the law is not a valid defense. Thailand's criminal justice process includes investigation, prosecution, trial, and appeal stages, with specific rights and procedures at each phase.
              </p>
              
              <p className="text-muted-foreground">
                For foreigners, special considerations exist, including language barriers, consular notification rights, and potential immigration consequences of criminal charges. Both Thai citizens and foreigners are subject to the same criminal laws and penalties, which can be severe for certain offenses.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Topics Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Key Topics"
              subtitle="Essential information about criminal law in Thailand"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldAlert size={20} className="mr-2 text-legal-criminal" />
                    Common Criminal Offenses
                  </CardTitle>
                  <CardDescription>Frequently prosecuted crimes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Drug offenses (possession, trafficking, manufacturing)</li>
                    <li>• Theft and property crimes</li>
                    <li>• Assault and violent crimes</li>
                    <li>• Computer crimes and online offenses</li>
                    <li>• Lèse-majesté (royal defamation)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle size={20} className="mr-2 text-legal-criminal" />
                    Rights When Arrested
                  </CardTitle>
                  <CardDescription>Legal protections in custody</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Right to be informed of charges</li>
                    <li>• Right to contact family and attorney</li>
                    <li>• Right to medical treatment if needed</li>
                    <li>• Right to fair and humane treatment</li>
                    <li>• Right to consular notification (foreigners)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gavel size={20} className="mr-2 text-legal-criminal" />
                    Criminal Court Process
                  </CardTitle>
                  <CardDescription>Stages of criminal proceedings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Police investigation and evidence gathering</li>
                    <li>• Prosecutor review and formal charging</li>
                    <li>• Arraignment and initial court appearance</li>
                    <li>• Trial procedures and witness testimony</li>
                    <li>• Verdict and sentencing process</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale size={20} className="mr-2 text-legal-criminal" />
                    Bail Process
                  </CardTitle>
                  <CardDescription>Temporary release during proceedings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Eligibility criteria for bail</li>
                    <li>• Setting and posting bail amounts</li>
                    <li>• Bail conditions and restrictions</li>
                    <li>• Bail revocation circumstances</li>
                    <li>• Special considerations for foreigners</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 size={20} className="mr-2 text-legal-criminal" />
                    Penalties & Sentencing
                  </CardTitle>
                  <CardDescription>Consequences of criminal conviction</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Types of penalties (imprisonment, fines, probation)</li>
                    <li>• Sentencing guidelines and judicial discretion</li>
                    <li>• Mitigating and aggravating factors</li>
                    <li>• Parole and early release options</li>
                    <li>• Royal pardons and sentence reductions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search size={20} className="mr-2 text-legal-criminal" />
                    Finding Legal Representation
                  </CardTitle>
                  <CardDescription>Securing qualified criminal defense</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Public defenders and legal aid options</li>
                    <li>• Private criminal defense attorneys</li>
                    <li>• Attorney qualifications and specializations</li>
                    <li>• Interpreter services for non-Thai speakers</li>
                    <li>• Legal fees and payment arrangements</li>
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
              subtitle="Common questions about criminal law in Thailand"
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What should I do if I'm arrested in Thailand?</h3>
                <p className="text-muted-foreground">
                  If arrested, remain calm and cooperative but don't resist. You have the right to be informed of the charges against you in a language you understand. Request to contact your embassy (if foreign) and a lawyer immediately. Do not sign any documents you don't understand, and request an interpreter if needed. Inform family members of your situation. Remember that while you have the right to remain silent, respectful cooperation with authorities is advisable.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">How does bail work in the Thai criminal system?</h3>
                <p className="text-muted-foreground">
                  Bail in Thailand is typically available for most offenses except very serious crimes or where flight risk is high. Bail amounts vary based on the alleged offense's severity, with higher amounts for more serious charges. Cash, property, or a guarantor can secure bail. For foreigners, bail may be higher due to perceived flight risk, and sometimes passport surrender is required as a condition. The court has discretion in setting bail amounts and conditions.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">What are the penalties for drug offenses in Thailand?</h3>
                <p className="text-muted-foreground">
                  Thailand has some of the world's strictest drug laws. Penalties depend on the drug type, amount, and offense nature. Possession of small amounts for personal use can result in 1-5 years imprisonment and fines. Trafficking or possession of larger quantities can lead to 10 years to life imprisonment or even the death penalty in extreme cases. Some minor drug offenses may be eligible for rehabilitation programs instead of imprisonment, particularly for first-time offenders.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Do I need a translator during criminal proceedings?</h3>
                <p className="text-muted-foreground">
                  Yes, if you don't speak Thai fluently. The Thai justice system recognizes the right to understand proceedings against you. Courts should provide official translators/interpreters for formal proceedings. However, the quality and availability of court-provided interpretation can vary. For police questioning and document review, official interpreters may not be automatically provided. It's advisable to request an interpreter clearly and, when possible, arrange for your own trusted interpreter to ensure accurate communication.
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
                The information provided on this page is for general informational purposes only and does not constitute legal advice. Thai criminal laws are complex and subject to change. While we strive to provide accurate and up-to-date information, we strongly recommend consulting with a qualified Thai criminal defense attorney for advice specific to your situation. Criminal charges can have serious consequences, including imprisonment and deportation for foreigners.
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
                Need More Information?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Explore our interactive tools or browse related resources for more detailed information on criminal law in Thailand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/tools/scenario-simulator"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-legal-criminal rounded-lg shadow-sm hover:bg-legal-criminal/90 transition-colors"
                >
                  <span>Try Scenario Simulator</span>
                </Link>
                
                <Link
                  to="/resources/glossary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-legal-criminal bg-white border border-legal-criminal/20 rounded-lg shadow-sm hover:bg-legal-criminal/5 transition-colors"
                >
                  <span>Legal Terms Glossary</span>
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

export default CriminalLaw;
