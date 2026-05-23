import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RavenEye from "./components/RavenEye";
import ProtectedRoute from "./components/ProtectedRoute";
import Particles from "./components/Particles";

import Login from "./pages/Login";
import Register from "./pages/Register";
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

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />



        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />



        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />



        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />



        {/* RAVEN AI */}
        <Route
          path="/raven-ai"
          element={
            <ProtectedRoute>

              <RavenAI />

            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;