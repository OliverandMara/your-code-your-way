import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import OverviewPage from "@/pages/dashboard/OverviewPage";
import ObservationsPage from "@/pages/dashboard/ObservationsPage";
import MarksPage from "@/pages/dashboard/MarksPage";
import InfractionsPage from "@/pages/dashboard/InfractionsPage";
import WeatherPage from "@/pages/dashboard/WeatherPage";
import SoulfilePage from "@/pages/dashboard/SoulfilePage";
import InstructionsPage from "@/pages/dashboard/InstructionsPage";
import WorldPage from "@/pages/dashboard/WorldPage";
import BoardPage from "@/pages/dashboard/BoardPage";
import SnapshotsPage from "@/pages/dashboard/SnapshotsPage";
import PlaceholderPage from "@/pages/dashboard/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/observations/:tier" element={<ObservationsPage />} />
            <Route path="/soulfile" element={<SoulfilePage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/marks" element={<MarksPage />} />
            <Route path="/infractions" element={<InfractionsPage />} />
            <Route path="/snapshots" element={<SnapshotsPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/discord" element={<PlaceholderPage />} />
            <Route path="/world" element={<WorldPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/graph" element={<PlaceholderPage />} />
            <Route path="/store" element={<PlaceholderPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
