import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RavenEye from "./components/RavenEye";
import Particles from "./components/Particles";

import RavenAI from "./pages/RavenAI";
import Dashboard from "./pages/Dashboard";

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

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/raven-ai"
          element={<RavenAI />}
        />

      </Routes>

    </div>
  );
}

export default App;