
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ChoosePath from "./pages/ChoosePath";
import IndividualsIndex from "./pages/individuals/Index";
import BusinessesIndex from "./pages/businesses/Index";
import ResourcesIndex from "./pages/resources/Index";
import ScenarioSimulator from "./pages/tools/ScenarioSimulator";
import BlogIndex from "./pages/blog/Index";
import BlogPost from "./pages/blog/BlogPost";
import LegalDisclaimer from "./pages/LegalDisclaimer";

// Individual topic pages
import MarriageDivorce from "./pages/individuals/MarriageDivorce";
import InheritanceWills from "./pages/individuals/InheritanceWills";
import CriminalLaw from "./pages/individuals/CriminalLaw";
import ConsumerProtection from "./pages/individuals/ConsumerProtection";
import VisaImmigration from "./pages/individuals/VisaImmigration";
import PropertyHousing from "./pages/individuals/PropertyHousing";

const queryClient = new QueryClient();

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<ChoosePath />} />
        <Route path="/individuals" element={<IndividualsIndex />} />
        <Route path="/businesses" element={<BusinessesIndex />} />
        <Route path="/resources" element={<ResourcesIndex />} />
        <Route path="/tools/scenario-simulator" element={<ScenarioSimulator />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        
        {/* Individual topic pages */}
        <Route path="/individuals/marriage-divorce" element={<MarriageDivorce />} />
        <Route path="/individuals/inheritance-wills" element={<InheritanceWills />} />
        <Route path="/individuals/criminal-law" element={<CriminalLaw />} />
        <Route path="/individuals/consumer-protection" element={<ConsumerProtection />} />
        <Route path="/individuals/visa-immigration" element={<VisaImmigration />} />
        <Route path="/individuals/property-housing" element={<PropertyHousing />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
