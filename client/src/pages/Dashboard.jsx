import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaPlus,
  FaFeatherAlt,
  FaRobot,
  FaSearch,
  FaLock,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import {
  getMemories,
  createMemory,
  deleteMemory as removeMemory,
} from "../services/memoryService";

import MemoryCard from "../components/MemoryCard";

function Dashboard() {

  const navigate = useNavigate();

  const [memories, setMemories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [image, setImage] =
    useState(null);



  // ================= FORM =================
  const [formData, setFormData] =
    useState({

      title: "",

      content: "",

      mood: "Chaos 🩸",

      tags: "",

      isSecret: false,

    });



  // ================= FETCH MEMORIES =================
  const fetchMemories = async () => {

    try {

      setLoading(true);

      const data =
        await getMemories();

      setMemories(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };



  // ================= CREATE MEMORY =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const memoryData =
        new FormData();



      memoryData.append(
        "title",
        formData.title
      );

      memoryData.append(
        "content",
        formData.content
      );

      memoryData.append(
        "mood",
        formData.mood
      );

      memoryData.append(
        "tags",

        JSON.stringify(

          formData.tags
            .split(",")
            .map((tag) =>
              tag.trim()
            )
            .filter(Boolean)

        )
      );

      memoryData.append(
        "isSecret",
        formData.isSecret
      );



      if (image) {

        memoryData.append(
          "image",
          image
        );
      }



      await createMemory(
        memoryData
      );



      // RESET FORM
      setFormData({

        title: "",

        content: "",

        mood: "Chaos 🩸",

        tags: "",

        isSecret: false,

      });

      setImage(null);



      fetchMemories();

    } catch (error) {

      console.log(error);
    }
  };



  // ================= DELETE MEMORY =================
  const deleteMemory = async (id) => {

    try {

      await removeMemory(id);

      fetchMemories();

    } catch (error) {

      console.log(error);
    }
  };



  // ================= HANDLE INPUT =================
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });
  };



  // ================= LOAD MEMORIES =================
  useEffect(() => {

    fetchMemories();

  }, []);




  // ================= FILTER =================
  const filteredMemories =
    memories.filter(

      (memory) =>

        memory.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        memory.content
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

    );



  return (

    <motion.div

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      transition={{
        duration: 0.5,
      }}

      className="min-h-screen bg-[#0D0D0D] text-white flex"
    >



      {/* SIDEBAR */}
      <div className="w-[280px] border-r border-white/10 p-8 hidden lg:flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div>

            <h1
              className="text-4xl font-bold mb-3"
              style={{
                fontFamily: "Cinzel",
              }}
            >
              Ravenoir
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">

              Your cinematic AI memory vault.

            </p>

          </div>



          {/* NAVIGATION */}
          <div className="mt-16 space-y-6 text-gray-400">

            {/* VAULT */}
            <div className="flex items-center gap-4 text-white bg-white/5 px-4 py-3 rounded-2xl">

              <FaFeatherAlt />

              <span>
                Memory Vault
              </span>

            </div>



            {/* AI */}
            <div

              onClick={() =>
                navigate("/raven-ai")
              }

              className="flex items-center gap-4 hover:text-white cursor-pointer transition px-4 py-3 rounded-2xl hover:bg-white/5"
            >

              <FaRobot />

              <span>
                Raven AI
              </span>

            </div>



            {/* SECRET */}
            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 transition cursor-pointer">

              <FaLock />

              <span>
                Secret Vault
              </span>

            </div>

          </div>

        </div>



        {/* DEMO BADGE */}
        <div className="bg-red-950/30 border border-red-900/20 rounded-3xl p-5">

          <h2 className="text-xl font-bold mb-2">

            Ravenoir Demo

          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">

            Built with MERN Stack, AI integration,
            image uploads, secret vault system,
            and cinematic UI design.

          </p>

        </div>

      </div>



      {/* MAIN */}
      <div className="flex-1 p-4 md:p-8 overflow-hidden">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

          <div>

            <h2
              className="text-4xl md:text-6xl font-bold"
              style={{
                fontFamily: "Cinzel",
              }}
            >
              Memory Vault 🩸
            </h2>

            <p className="text-gray-400 mt-4 text-lg">

              Preserve your thoughts forever inside Ravenoir.

            </p>

          </div>



          {/* STATS */}
          <div className="flex gap-4">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">

              <p className="text-gray-500 text-sm">
                Total Memories
              </p>

              <h3 className="text-3xl font-bold mt-1">

                {memories.length}

              </h3>

            </div>



            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">

              <p className="text-gray-500 text-sm">
                Secret Vaults
              </p>

              <h3 className="text-3xl font-bold mt-1">

                {
                  memories.filter(
                    (m) => m.isSecret
                  ).length
                }

              </h3>

            </div>

          </div>

        </div>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-12"
        >

          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">

            <FaPlus />

            Create Memory

          </h3>



          {/* TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Memory Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* MOOD */}
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none mb-5"
          >

            <option>
              Chaos 🩸
            </option>

            <option>
              Peace 🌙
            </option>

            <option>
              Fear 👁️
            </option>

            <option>
              Rage 🔥
            </option>

            <option>
              Hope ✨
            </option>

          </select>



          {/* TAGS */}
          <input
            type="text"
            name="tags"
            placeholder="dreams, future, darkness..."
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* CONTENT */}
          <textarea
            name="content"
            placeholder="Write your memory..."
            rows="6"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none mb-5 resize-none"
          />



          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* SECRET */}
          <label className="flex items-center gap-3 mb-6 text-gray-300">

            <input
              type="checkbox"
              checked={
                formData.isSecret
              }

              onChange={(e) =>

                setFormData({

                  ...formData,

                  isSecret:
                    e.target.checked,

                })

              }
            />

            Store Inside Secret Vault 👁️

          </label>



          {/* SUBMIT */}
          <button
            type="submit"
            className="px-8 py-4 rounded-2xl bg-red-900 hover:bg-red-800 transition text-lg font-semibold shadow-xl shadow-red-950/30"
          >

            Save Memory

          </button>

        </form>



        {/* SEARCH */}
        <div className="relative mb-10">

          <FaSearch className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}

            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }

            className="w-full pl-14 p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

        </div>



        {/* MEMORIES */}
        {loading ? (

          <div className="text-center text-gray-500 text-2xl mt-20">

            Entering The Vault...

          </div>

        ) : filteredMemories.length === 0 ? (

          <div className="flex flex-col items-center justify-center mt-24 text-center">

            <div className="text-8xl mb-6">

              🪶

            </div>

            <h2 className="text-4xl font-bold mb-4">

              The Vault Is Empty

            </h2>

            <p className="text-gray-500 max-w-lg text-lg leading-relaxed">

              Your memories have not yet been carved into Ravenoir.
              Create your first cinematic memory now.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredMemories.map((memory) => (

              <MemoryCard
                key={memory._id}
                memory={memory}
                deleteMemory={deleteMemory}
              />

            ))}

          </div>

        )}

      </div>

    </motion.div>
  );
}

export default Dashboard;