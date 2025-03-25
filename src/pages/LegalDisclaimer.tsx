
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const LegalDisclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const disclaimerSections = [
    {
      title: "1. Introduction",
      content: "Welcome to LawBridge Thailand. By accessing or using our website (www.lawbridge.site) and its associated services, tools, or content (collectively referred to as the \"Website\"), you acknowledge and agree to the terms outlined in this Legal Disclaimer. If you do not agree with these terms, please refrain from using our Website."
    },
    {
      title: "2. General Information Only",
      content: "The materials and content provided on this Website are for general informational and educational purposes regarding Thai legal matters. They do not constitute legal advice, legal opinions, or any form of professional counsel. While we strive for accuracy, the information presented may not reflect the most current legal developments. Users should consult with a qualified legal professional for advice tailored to their specific circumstances."
    },
    {
      title: "3. No Attorney-Client Relationship",
      content: "Your use of this Website, including any communication facilitated through it, does not establish an attorney-client relationship between you and LawBridge Thailand or any of its affiliates, contributors, or partners. Any information transmitted to us via the Website is not privileged or confidential."
    },
    {
      title: "4. Accuracy and Completeness",
      content: "We endeavor to ensure that the information on this Website is accurate and up-to-date. However, Thai laws and regulations are subject to change, and we cannot guarantee that all content is complete, accurate, or current. Reliance on any information provided herein is at your own risk."
    },
    {
      title: "5. Professional Advice Recommended",
      content: "Legal matters are often complex and fact-specific. We strongly recommend consulting with a licensed Thai attorney or legal professional before making any decisions or taking any actions based on the information provided on this Website."
    },
    {
      title: "6. Third-Party Links and Content",
      content: "This Website may contain links to third-party websites or content for your convenience. LawBridge Thailand does not endorse, control, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through our Website."
    },
    {
      title: "7. Personal Data Protection",
      content: "In compliance with Thailand's Personal Data Protection Act B.E. 2562 (2019) (\"PDPA\"), LawBridge Thailand is committed to protecting your personal data. By using our Website, you consent to the collection, use, and disclosure of your personal data as described in our Privacy Policy.",
      bullets: [
        "Data Collection: We collect personal data only when necessary and with your consent, in accordance with the PDPA.",
        "Data Use: Your personal data is used solely for the purposes specified at the time of collection, such as responding to inquiries or providing requested services.",
        "Data Sharing: We do not share your personal data with third parties without your explicit consent, except as required by law or as necessary to provide our services."
      ],
      footer: "For detailed information on how we handle your personal data, please refer to our Privacy Policy."
    },
    {
      title: "8. Use at Your Own Risk",
      content: "Your use of this Website is entirely at your own risk. LawBridge Thailand, its affiliates, contributors, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or reliance on any content provided on this Website."
    },
    {
      title: "9. Intellectual Property Rights",
      content: "Unless otherwise stated, all content on this Website, including text, graphics, logos, and images, is the property of LawBridge Thailand and is protected by Thai and international copyright laws. Unauthorized use, reproduction, or distribution of this content is prohibited."
    },
    {
      title: "10. Amendments",
      content: "We reserve the right to amend this Legal Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on this page. Your continued use of the Website constitutes acceptance of the amended terms."
    },
    {
      title: "11. Governing Law and Jurisdiction",
      content: "This Legal Disclaimer is governed by and construed in accordance with the laws of the Kingdom of Thailand. Any disputes arising from or in connection with this Legal Disclaimer shall be subject to the exclusive jurisdiction of the Thai courts."
    },
    {
      title: "12. Contact Information",
      content: "If you have any questions or concerns regarding this Legal Disclaimer or our compliance with the PDPA, please contact us at:",
      bullets: [
        "Email: info@siamtechonline.com",
        "Address: Dusit, Bangkok, Thailand"
      ]
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Legal Disclaimer
              </h1>
              
              <p className="text-xl text-muted-foreground animate-slide-down animation-delay-100">
                Effective Date: 26 March 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Disclaimer Content */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  Please read this disclaimer carefully before using our website or services. The following terms and conditions apply to all visitors and users of LawBridge Thailand.
                </p>
                
                <div className="space-y-8">
                  {disclaimerSections.map((section, index) => (
                    <div key={index} className="bg-secondary/10 p-6 rounded-lg">
                      <h2 className="text-xl font-display font-medium mb-3">{section.title}</h2>
                      <p className="text-muted-foreground">{section.content}</p>
                      
                      {section.bullets && (
                        <ul className="mt-3 space-y-2 list-disc pl-5">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="text-muted-foreground">{bullet}</li>
                          ))}
                        </ul>
                      )}
                      
                      {section.footer && (
                        <p className="mt-3 text-muted-foreground italic">{section.footer}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 border border-primary/20 rounded-lg bg-primary/5">
                  <p className="font-medium text-center">
                    By using this website, you acknowledge that you have read, understood, and agree to these terms.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link to="/about">Learn more about LawBridge Thailand</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default LegalDisclaimer;
