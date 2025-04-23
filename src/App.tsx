import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Structure from "./pages/Structure";
import Vision from "./pages/Vision";
import Strategy from "./pages/Strategy";
import Services from "./pages/Services";
import PrivateSectorServices from "./pages/PrivateSectorServices";
import TechnicalSupport from "./pages/TechnicalSupport";
import Consultations from "./pages/Consultations";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import AnnualReport from "./pages/AnnualReport";
import Admins from "./pages/Admins";
import Projects from "./pages/Projects";
import Complaints from "./pages/Complaints";
import ResetPassword from "./pages/ResetPassword";
import AuthCallback from "./pages/AuthCallback";
import ChangePassword from "./pages/ChangePassword";

// Initialize query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/structure" element={<Structure />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/strategy" element={<Strategy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/private-sector" element={<PrivateSectorServices />} />
          <Route path="/services/technical-support" element={<TechnicalSupport />} />
          <Route path="/services/consultations" element={<Consultations />} />
          <Route path="/services/complaints" element={<Complaints />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/change-password" element={<ChangePassword />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
