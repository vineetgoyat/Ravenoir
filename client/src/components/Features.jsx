import { motion } from "framer-motion";

const features = [
  {
    title: "Memory Collection",
    desc: "Save thoughts, ideas, links, and moments forever.",
  },
  {
    title: "AI Intelligence",
    desc: "Smart summaries and intelligent organization.",
  },
  {
    title: "Secure Vault",
    desc: "Your memories protected with powerful security.",
  },
  {
    title: "Instant Recall",
    desc: "Find any memory within seconds using smart search.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
          style={{ fontFamily: "Cinzel" }}
        >
          Features
        </motion.h2>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-900/40 hover:shadow-xl hover:shadow-red-950/20"
            >

              <h3 className="text-2xl font-semibold mb-4 text-red-400">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;