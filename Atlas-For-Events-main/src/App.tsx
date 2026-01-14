import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Activites from "./pages/Activites";
import Boutique from "./pages/Boutique";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Service detail pages
import EvenementsPage from "./pages/services/Evenements";
import VacancesPage from "./pages/services/Vacances";
import ActivitesPage from "./pages/services/Activites";
import HebergementPage from "./pages/services/Hebergement";
import SpaPage from "./pages/services/Spa";
import TransportPage from "./pages/services/Transport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/evenements" element={<EvenementsPage />} />
          <Route path="/services/vacances" element={<VacancesPage />} />
          <Route path="/services/activites" element={<ActivitesPage />} />
          <Route path="/services/hebergement" element={<HebergementPage />} />
          <Route path="/services/spa" element={<SpaPage />} />
          <Route path="/services/transport" element={<TransportPage />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
