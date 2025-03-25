
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Individuals", path: "/individuals" },
    { name: "Businesses", path: "/businesses" },
    { name: "Tools", path: "/tools", submenu: [
      { name: "Scenario Simulator", path: "/tools/scenario-simulator" },
      { name: "Legal Risk Checker", path: "/tools/risk-checker" },
    ]},
    { name: "Resources", path: "/resources" },
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

  // Close mobile menu when changing routes
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
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-display font-medium flex items-center"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LawBridge
          </span>
          <span className="ml-1 text-foreground">Thailand</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/80"
                )}
              >
                <span className="flex items-center">
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </span>
              </Link>
              
              {item.submenu && (
                <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/80"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Get Started Button */}
        <Link 
          to="/individuals"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get Started
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto pb-12 pt-16 px-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-foreground hover:bg-secondary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link
                  to={item.path}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-primary bg-secondary/50"
                      : "text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className="pl-4 space-y-2 border-l-2 border-secondary ml-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={cn(
                          "block px-4 py-2 rounded-lg text-base transition-colors",
                          location.pathname === subItem.path
                            ? "text-primary bg-secondary/30"
                            : "text-foreground/80 hover:bg-secondary/30"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Link
              to="/individuals"
              className="block w-full rounded-lg bg-primary py-3 text-center font-medium text-primary-foreground shadow hover:bg-primary/90"
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
