import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link to="/">
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "Cinzel" }}
          >
            Ravenoir
          </h1>
        </Link>


        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <Link
            to="/dashboard"
            className="hover:text-white transition"
          >
            Vault
          </Link>

          <Link
            to="/raven-ai"
            className="hover:text-white transition"
          >
            Raven AI
          </Link>

        </div>


        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-full bg-red-900 hover:bg-red-800 transition-all duration-300 hover:scale-105"
        >
          Enter Vault
        </Link>

      </div>

    </motion.nav>
  );
}

export default Navbar;