import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RavenEye from "./components/RavenEye";
import Particles from "./components/Particles";

import Dashboard from "./pages/Dashboard";
import RavenAI from "./pages/RavenAI";

function HomePage() {
  return (
    <>
      <RavenEye />
      <Navbar />
      <Hero />
      <Features />
      <Particles />
    </>
  );
}

function App() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen overflow-hidden">

      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* DEMO DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* AI */}
        <Route
          path="/raven-ai"
          element={<RavenAI />}
        />

      </Routes>

    </div>
  );
}

export default App;