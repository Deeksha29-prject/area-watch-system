
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Report from "./pages/Report";
import Status from "./pages/Status";
import About from "./pages/About";
import UserPortal from "./pages/UserPortal";
import AdminPortal from "./pages/AdminPortal";
import WorkerPortal from "./pages/WorkerPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report" element={<Report />} />
          <Route path="/status" element={<Status />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/worker-portal" element={<WorkerPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
