
import { useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

const LegalDisclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const disclaimerSections = [
    {
      title: "General Disclaimer",
      content: "The information provided on this website is for general informational purposes only. It is not intended as legal advice and should not be relied upon as such."
    },
    {
      title: "No Lawyer-Client Relationship",
      content: "Your use of this site or any tools provided does not create an attorney-client relationship between you and LawBridge Thailand, or any contributors to the site."
    },
    {
      title: "Accuracy of Information",
      content: "While we strive to provide accurate and up-to-date legal information, Thai laws and regulations may change over time. We do not guarantee the completeness, accuracy, or applicability of any content."
    },
    {
      title: "Professional Advice Required",
      content: "You should consult a licensed Thai lawyer or legal professional for advice tailored to your specific situation. We strongly recommend doing so before making any legal or business decisions."
    },
    {
      title: "Third-Party Links and Tools",
      content: "Our site may contain links to third-party websites or use external tools. We are not responsible for the content or functionality of those external sites or tools."
    },
    {
      title: "Use at Your Own Risk",
      content: "Your use of this website is entirely at your own risk. LawBridge Thailand and its team will not be held liable for any damages or losses arising from the use of the content or features provided."
    },
    {
      title: "Copyright Notice",
      content: "All content on this site, unless otherwise stated, is the property of LawBridge Thailand and may not be copied or reused without permission."
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
                Please read this disclaimer carefully before using our website or services.
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
                  At LawBridge Thailand, we aim to provide helpful information about Thai legal matters, but it's important to understand the limitations of our service:
                </p>
                
                <div className="space-y-8">
                  {disclaimerSections.map((section, index) => (
                    <div key={index} className="bg-secondary/10 p-6 rounded-lg">
                      <h2 className="text-xl font-display font-medium mb-3">{section.title}</h2>
                      <p className="text-muted-foreground">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 border border-primary/20 rounded-lg bg-primary/5">
                  <p className="font-medium text-center">
                    By using this website, you acknowledge that you have read, understood, and agree to these terms.
                  </p>
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
