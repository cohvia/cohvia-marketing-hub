import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Product from "./pages/Product.tsx";
import Pricing from "./pages/Pricing.tsx";
import About from "./pages/About.tsx";

import TeamOfOne from "./pages/solutions/TeamOfOne.tsx";
import ForCSLeaders from "./pages/solutions/ForCSLeaders.tsx";
import ForCSMs from "./pages/solutions/ForCSMs.tsx";
import ForAEs from "./pages/solutions/ForAEs.tsx";
import ForCustomers from "./pages/solutions/ForCustomers.tsx";
import RelationshipIntelligence from "./pages/solutions/RelationshipIntelligence.tsx";
import Handovers from "./pages/solutions/Handovers.tsx";
import PlanningExecution from "./pages/solutions/PlanningExecution.tsx";
import BookHealth from "./pages/solutions/BookHealth.tsx";
import ScalingLeverage from "./pages/solutions/ScalingLeverage.tsx";
import Legal from "./pages/Legal.tsx";
import Security from "./pages/Security.tsx";
import NotFound from "./pages/NotFound.tsx";
import CustomerContextPlatform from "./pages/glossary/CustomerContextPlatform.tsx";
import CustomerNarrative from "./pages/glossary/CustomerNarrative.tsx";
import AccountNarrative from "./pages/glossary/AccountNarrative.tsx";
import AISuccessPlans from "./pages/glossary/AISuccessPlans.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions/team-of-one" element={<TeamOfOne />} />
          <Route path="/solutions/cs-leaders" element={<ForCSLeaders />} />
          <Route path="/solutions/csms" element={<ForCSMs />} />
          <Route path="/solutions/aes" element={<ForAEs />} />
          <Route path="/solutions/customers" element={<ForCustomers />} />
          <Route path="/solutions/relationship-intelligence" element={<RelationshipIntelligence />} />
          <Route path="/solutions/handovers" element={<Handovers />} />
          <Route path="/solutions/planning-execution" element={<PlanningExecution />} />
          <Route path="/solutions/book-health" element={<BookHealth />} />
          <Route path="/solutions/scaling-leverage" element={<ScalingLeverage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/:slug" element={<Legal />} />
          <Route path="/security" element={<Security />} />
          <Route path="/glossary/customer-context-platform" element={<CustomerContextPlatform />} />
          <Route path="/glossary/customer-narrative" element={<CustomerNarrative />} />
          <Route path="/glossary/account-narrative" element={<AccountNarrative />} />
          <Route path="/glossary/ai-success-plans" element={<AISuccessPlans />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
