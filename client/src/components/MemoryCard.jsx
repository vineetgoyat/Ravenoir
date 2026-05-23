import { motion } from "framer-motion";

import { useState } from "react";

import axios from "axios";

import {
  FaTrash,
  FaBrain,
} from "react-icons/fa";



function MemoryCard({
  memory,
  deleteMemory,
}) {

  const [revealed, setRevealed] =
    useState(false);

  const [summary, setSummary] =
    useState("");

  const [loading, setLoading] =
    useState(false);



  // ================= SUMMARIZE MEMORY =================
  const summarizeWithAI =
    async () => {

      try {

        setLoading(true);

        const res =
          await axios.post(

            `${import.meta.env.VITE_API_URL}/api/ai/summarize/${memory._id}`

          );



        setSummary(
          res.data.summary
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
      }}

      whileHover={{
        scale: 1.02,
      }}

      className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-red-900/40 hover:shadow-2xl hover:shadow-red-950/30 transition duration-300"
    >



      {/* IMAGE */}
      {memory.image && (

        <img
          src={memory.image}
          alt="memory"
          className="w-full h-[220px] object-cover rounded-2xl mb-5"
        />

      )}



      {/* SECRET MEMORY */}
      {memory.isSecret && !revealed ? (

        <div className="text-center py-10">

          <div className="text-5xl mb-5">
            👁️
          </div>

          <h2 className="text-2xl font-bold mb-4">

            Secret Memory

          </h2>

          <p className="text-gray-500 mb-6">

            This memory has been hidden
            inside Ravenoir.

          </p>

          <button
            onClick={() =>
              setRevealed(true)
            }
            className="px-6 py-3 rounded-xl bg-red-900 hover:bg-red-800 transition"
          >

            Reveal Secret

          </button>

        </div>

      ) : (

        <>

          {/* TITLE */}
          <h3 className="text-2xl font-semibold mb-4">

            {memory.title}

          </h3>



          {/* MOOD */}
          <div className="inline-block px-4 py-1 rounded-full bg-red-950 text-red-300 text-sm mb-4">

            {memory.mood}

          </div>



          {/* CONTENT */}
          <p className="text-gray-400 leading-relaxed mb-6">

            {memory.content}

          </p>



          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">

            {memory.tags?.map((tag, index) => (

              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300"
              >

                #{tag}

              </span>

            ))}

          </div>



          {/* DELETE BUTTON */}
          <button
            onClick={() =>
              deleteMemory(memory._id)
            }
            className="flex items-center gap-2 text-red-700 hover:text-red-500 transition"
          >

            <FaTrash />

            Delete

          </button>



          {/* AI BUTTON */}
          <button
            onClick={summarizeWithAI}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mt-4"
          >

            <FaBrain />

            {loading

              ? "Raven is analyzing..."

              : "Summarize With Raven"}

          </button>



          {/* AI SUMMARY */}
          {summary && (

            <div className="mt-5 p-4 rounded-2xl bg-black/30 border border-purple-900/40">

              <h3 className="text-lg font-bold text-purple-400 mb-2">

                👁️ Raven Analysis

              </h3>

              <p className="text-gray-300 leading-relaxed">

                {summary}

              </p>

            </div>

          )}

        </>

      )}

    </motion.div>
  );
}

export default MemoryCard;