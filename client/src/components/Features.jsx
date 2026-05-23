import { motion } from "framer-motion";
import {
  FaFeatherAlt,
  FaBrain,
  FaLock,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFeatherAlt />,
    title: "Memory Collection",
    desc: "Save thoughts, ideas, links, and moments forever.",
  },
  {
    icon: <FaBrain />,
    title: "AI Intelligence",
    desc: "Smart summaries and intelligent organization.",
  },
  {
    icon: <FaLock />,
    title: "Secure Vault",
    desc: "Your memories protected with powerful security.",
  },
  {
    icon: <FaSearch />,
    title: "Instant Recall",
    desc: "Find any memory within seconds using smart search.",
  },
];

function Features() {
  return (
    <section className="py-32 px-6 relative">

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2
          className="text-5xl font-bold"
          style={{ fontFamily: "Cinzel" }}
        >
          The Raven Remembers
        </h2>

        <p className="text-gray-400 mt-5">
          Crafted for thinkers, creators, and collectors.
        </p>
      </motion.div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-red-900/40 transition duration-300 shadow-2xl"
          >

            {/* ICON */}
            <div className="text-4xl text-red-700 mb-6">
              {feature.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed">
              {feature.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;