import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full top-20"></div>

      {/* MAIN CONTENT */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold leading-tight z-10"
        style={{ fontFamily: "Cinzel" }}
      >
        The Vault That <br />
        Never Forgets
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-gray-400 max-w-2xl text-lg z-10"
      >
        Ravenoir is your intelligent dark memory vault —
        save thoughts, links, ideas, and knowledge forever.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-5 mt-10 z-10"
      >
        <button className="px-8 py-4 rounded-full bg-red-900 hover:bg-red-800 transition shadow-xl shadow-red-950">
          Enter Ravenoir
        </button>

        <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition">
          Explore
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;