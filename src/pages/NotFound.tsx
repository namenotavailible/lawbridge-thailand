
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileSearch, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1 flex items-center">
        <div className="container px-4 py-32">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
              <FileSearch size={28} className="text-primary" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight">
              Page Not Found
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
              >
                <Home size={18} />
                <span>Back to Home</span>
              </Link>
              
              <button
                onClick={() => history.back()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-primary/5 transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default NotFound;
