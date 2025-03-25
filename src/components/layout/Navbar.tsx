import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Users, Building2, Wrench, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Individuals", path: "/individuals", icon: Users },
    { name: "Businesses", path: "/businesses", icon: Building2 },
    { name: "Tools", path: "/tools", icon: Wrench, submenu: [
      { name: "Scenario Simulator", path: "/tools/scenario-simulator" },
      { name: "Legal Risk Checker", path: "/tools/risk-checker" },
    ]},
    { name: "Resources", path: "/resources", icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-medium flex items-center"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LawBridge
          </span>
          <span className="ml-1 text-foreground">Thailand</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1.5",
                    location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
                      ? "text-primary after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-0 after:h-0.5 after:bg-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 focus-visible:outline-none"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 z-50">
                    <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={`${item.name}-menu`}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name} role="menuitem">
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block px-4 py-2 text-sm text-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 focus-visible:outline-none",
                              location.pathname === subItem.path && "bg-secondary/50 text-primary"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link 
          to="/get-started"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Get Started
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full overflow-y-auto pb-12 pt-16 px-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="space-y-2">
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                      location.pathname === item.path
                        ? "text-primary bg-secondary/50"
                        : "text-foreground hover:bg-secondary/50 focus-visible:bg-secondary/50 focus-visible:outline-none"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {item.submenu && (
                    <ul className="pl-4 space-y-2 border-l-2 border-secondary ml-4">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block px-4 py-2 rounded-lg text-base transition-colors flex items-center",
                              location.pathname === subItem.path
                                ? "text-primary bg-secondary/30"
                                : "text-foreground/80 hover:bg-secondary/30 focus-visible:bg-secondary/30 focus-visible:outline-none"
                            )}
                          >
                            <span className="w-3 h-3 bg-secondary rounded-full mr-2"></span>
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8">
            <Link
              to="/get-started"
              className="block w-full rounded-lg bg-primary py-3 text-center font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
