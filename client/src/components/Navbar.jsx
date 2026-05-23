import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-10 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-md"
    >

      {/* LOGO */}
      <Link to="/">
        <h1
          className="text-3xl font-bold tracking-widest cursor-pointer"
          style={{ fontFamily: "Cinzel" }}
        >
          Ravenoir
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10 text-sm text-gray-300">

        <Link
          to="/"
          className="hover:text-white transition"
        >
          Features
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-white transition"
        >
          Vault
        </Link>

        <Link
          to="/register"
          className="hover:text-white transition"
        >
          About
        </Link>

      </div>

      {/* BUTTON */}
      <Link to="/login">
        <button className="px-5 py-2 rounded-full bg-red-900 hover:bg-red-800 transition shadow-lg shadow-red-950">
          Enter Vault
        </button>
      </Link>

    </motion.nav>
  );
}

export default Navbar;