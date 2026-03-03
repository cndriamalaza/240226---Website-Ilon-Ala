import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Catalogue from "./pages/Catalogue";
import ProductDetail from "./pages/ProductDetail";
import NurseryDetail from "./pages/NurseryDetail";
import About from "./pages/About";
import Quality from "./pages/Quality";
import Agribusiness from "./pages/Agribusiness";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Privacy from "./pages/Privacy";
import AdminDashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/produit/:slug" element={<ProductDetail />} />
                <Route path="/pepiniere/:slug" element={<NurseryDetail />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/qualite" element={<Quality />} />
                <Route path="/agribusiness" element={<Agribusiness />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/privacy" element={<Privacy />} />
              </Route>
              {/* Admin has its own layout */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
