import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Catalogue from "./pages/Catalogue";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/produit/:slug" element={<ProductDetail />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commander" element={<Order />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
