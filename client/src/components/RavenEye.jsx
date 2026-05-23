import { motion } from "framer-motion";

function RavenEye() {
  return (
    <div className="absolute top-32 right-20 hidden lg:block">

      {/* OUTER GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="w-40 h-40 rounded-full bg-red-900/20 blur-3xl absolute"
      />

      {/* EYE */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px #7f1d1d",
            "0 0 60px #ff0000",
            "0 0 20px #7f1d1d",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="relative w-16 h-16 rounded-full bg-white border-4 border-red-900 flex items-center justify-center"
      >
        {/* PUPIL */}
        <div className="w-6 h-6 rounded-full bg-red-700"></div>

        {/* SCRATCH */}
        <div className="absolute w-20 h-1 bg-red-950 rotate-45"></div>
      </motion.div>
    </div>
  );
}

export default RavenEye;