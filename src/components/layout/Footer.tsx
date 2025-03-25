
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "For Individuals",
      links: [
        { name: "Marriage & Divorce", href: "/individuals/marriage-divorce" },
        { name: "Inheritance & Wills", href: "/individuals/inheritance-wills" },
        { name: "Criminal Law Basics", href: "/individuals/criminal-law" },
        { name: "Consumer Protection", href: "/individuals/consumer-protection" },
        { name: "Visa & Immigration", href: "/individuals/visa-immigration" },
      ],
    },
    {
      title: "For Businesses",
      links: [
        { name: "Starting a Business", href: "/businesses/starting-business" },
        { name: "Foreign Business Act", href: "/businesses/foreign-business-act" },
        { name: "Labor Law", href: "/businesses/labor-law" },
        { name: "Taxes & VAT", href: "/businesses/taxes-vat" },
        { name: "Contracts & Agreements", href: "/businesses/contracts" },
      ],
    },
    {
      title: "Tools & Resources",
      links: [
        { name: "Scenario Simulator", href: "/tools/scenario-simulator" },
        { name: "Legal Risk Checker", href: "/tools/risk-checker" },
        { name: "Legal Glossary", href: "/resources/glossary" },
        { name: "Template Library", href: "/resources/templates" },
        { name: "FAQ", href: "/resources/faq" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/about" },
        { name: "Legal Disclaimer", href: "/legal-disclaimer" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-xl font-display font-medium">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  LawBridge
                </span>
                <span className="ml-1 text-foreground">Thailand</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Simplifying Thai law for everyone.
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} LawBridge Thailand. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground text-center md:text-left">
            <p>
              LawBridge Thailand provides information for educational purposes only. 
              This is not legal advice. Please consult a qualified lawyer for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
