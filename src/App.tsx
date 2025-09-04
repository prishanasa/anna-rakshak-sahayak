import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PestPrediction from "./pages/PestPrediction";
import CropYieldPrediction from "./pages/CropYieldPrediction";
import SoilFertility from "./pages/SoilFertility";
import CropRecommendation from "./pages/CropRecommendation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pest-prediction" element={<PestPrediction />} />
          <Route path="/crop-yield" element={<CropYieldPrediction />} />
          <Route path="/soil-fertility" element={<SoilFertility />} />
          <Route path="/crop-recommendation" element={<CropRecommendation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
