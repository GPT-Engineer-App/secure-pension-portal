import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BookOpen, Calculator, Mail, Info } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import InvestInNPS from "./pages/InvestInNPS"; // Import the new page
import PRANGeneration from "./pages/PRANGeneration"; // Import the PRAN generation page
import RiskProfiling from "./pages/RiskProfiling"; // Import the RiskProfiling page
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Blogs",
    to: "/blogs",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Calculators",
    to: "/calculators",
    icon: <Calculator className="h-4 w-4" />,
  },
  {
    title: "Contact Us",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/invest-in-nps" element={<InvestInNPS />} /> {/* Add the new route */}
              <Route path="/pran-generation" element={<PRANGeneration />} /> {/* Add the PRAN generation route */}
              <Route path="/risk-profiling" element={<RiskProfiling />} /> {/* Add the RiskProfiling route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;