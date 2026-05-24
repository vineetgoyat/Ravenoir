import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}

      <div className="absolute w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full top-20"></div>

      <div className="absolute bottom-0 w-[700px] h-[300px] bg-purple-900/10 blur-[140px] rounded-full"></div>



      {/* SMALL LABEL */}

      <motion.div

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="mb-6 z-10"
      >

        <span className="px-5 py-2 rounded-full border border-red-900/40 bg-red-950/20 text-red-300 text-sm tracking-widest uppercase">

          AI Memory Vault

        </span>

      </motion.div>



      {/* HEADING */}

      <motion.h1

        initial={{
          opacity: 0,
          y: 80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight z-10 max-w-6xl"

        style={{
          fontFamily: "Cinzel",
        }}
      >

        The Vault That
        <br />

        <span className="text-red-700">

          Never Forgets

        </span>

      </motion.h1>



      {/* DESCRIPTION */}

      <motion.p

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 0.5,
        }}

        className="mt-8 text-gray-400 max-w-3xl text-lg md:text-xl z-10 leading-relaxed"
      >

        Ravenoir is an AI-powered dark memory vault where thoughts,
        emotions, secrets, images, and memories are preserved forever.
        Speak with Raven AI, store hidden vaults, and relive memories
        through an immersive cinematic experience.

      </motion.p>



      {/* BUTTONS */}

      <motion.div

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.8,
        }}

        className="flex flex-col sm:flex-row gap-5 mt-12 z-10"
      >

        {/* ENTER BUTTON */}

        <button

          onClick={() =>
            navigate("/dashboard")
          }

          className="px-10 py-4 rounded-full bg-red-900 hover:bg-red-800 transition shadow-2xl shadow-red-950/50 text-lg font-semibold"
        >

          Enter Ravenoir

        </button>



        {/* EXPLORE BUTTON */}

        <button

          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }

          className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition text-lg"
        >

          Explore Features

        </button>

      </motion.div>



      {/* FEATURE PREVIEW */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 1.2,
        }}

        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 z-10 w-full max-w-6xl"
      >

        {/* CARD 1 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-red-900/40 transition">

          <div className="text-5xl mb-5">
            👁️
          </div>

          <h2 className="text-2xl font-bold mb-3">

            Secret Vault

          </h2>

          <p className="text-gray-400 leading-relaxed">

            Hide your most private memories behind Ravenoir’s secret vault system.

          </p>

        </div>



        {/* CARD 2 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-red-900/40 transition">

          <div className="text-5xl mb-5">
            🤖
          </div>

          <h2 className="text-2xl font-bold mb-3">

            Raven AI

          </h2>

          <p className="text-gray-400 leading-relaxed">

            Speak with the dark intelligence hidden inside the Ravenoir universe.

          </p>

        </div>



        {/* CARD 3 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-red-900/40 transition">

          <div className="text-5xl mb-5">
            🩸
          </div>

          <h2 className="text-2xl font-bold mb-3">

            Eternal Memories

          </h2>

          <p className="text-gray-400 leading-relaxed">

            Store thoughts, moods, images, and emotions forever inside your vault.

          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;