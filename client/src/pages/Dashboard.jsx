import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaPlus,
  FaFeatherAlt,
  FaRobot,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import {
  getMemories,
  createMemory,
  deleteMemory as removeMemory,
} from "../services/memoryService";

import MemoryCard from "../components/MemoryCard";



function Dashboard() {


  const [memories, setMemories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [image, setImage] =
    useState(null);



  // ================= FORM DATA =================
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



  // ================= LOGOUT =================
   <button
      className="mt-20 px-5 py-3 rounded-xl bg-red-900 hover:bg-red-800 transition"
   >
      Ravenoir Demo
   </button>


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




  // ================= FILTER MEMORIES =================
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
      <div className="lg:w-[280px] border-r border-white/10 p-8 hidden lg:block">

        <h1
          className="text-4xl font-bold mb-16"
          style={{
            fontFamily: "Cinzel",
          }}
        >
          Ravenoir
        </h1>



        <div className="space-y-6 text-gray-400">

          {/* VAULT */}
          <div className="flex items-center gap-3 text-white">

            <FaFeatherAlt />

            <span>Vault</span>

          </div>



          {/* AI */}
          <div
            onClick={() =>
              navigate("/raven-ai")
            }

            className="flex items-center gap-3 hover:text-white cursor-pointer transition"
          >

            <FaRobot />

            <span>Raven AI</span>

          </div>

        </div>



        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-20 px-5 py-3 rounded-xl bg-red-900 hover:bg-red-800 transition"
        >
          Logout
        </button>

      </div>



      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-8">

        {/* TOP */}
        <div className="mb-12">

          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: "Cinzel",
            }}
          >
            Memory Vault 🩸
          </h2>

          <p className="text-gray-400 mt-3">

            Preserve your thoughts forever.

          </p>

        </div>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-12"
        >

          <h3 className="text-2xl mb-6 flex items-center gap-3">

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
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* MOOD */}
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none mb-5"
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
            placeholder="Tags separated by commas"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* CONTENT */}
          <textarea
            name="content"
            placeholder="Write your memory..."
            rows="5"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none mb-5"
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
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none mb-5"
          />



          {/* SECRET TOGGLE */}
          <label className="flex items-center gap-3 mb-5 text-gray-300">

            <input
              type="checkbox"
              name="isSecret"
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

            Store In Secret Vault 👁️

          </label>



          {/* BUTTON */}
          <button
            type="submit"
            className="mt-3 px-8 py-4 rounded-xl bg-red-900 hover:bg-red-800 transition"
          >

            Save Memory

          </button>

        </form>



        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search memories..."
          value={searchTerm}

          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }

          className="w-full mb-10 p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
        />



        {/* MEMORY GRID */}
        {loading ? (

          <div className="text-center text-gray-500 text-xl mt-20">

            Entering The Vault...

          </div>

        ) : filteredMemories.length === 0 ? (

          <div className="flex flex-col items-center justify-center mt-24 text-center">

            <div className="text-7xl mb-6">

              🪶

            </div>

            <h2 className="text-3xl font-bold mb-4">

              The Vault Is Empty

            </h2>

            <p className="text-gray-500 max-w-md">

              Your memories have not yet been carved into Ravenoir.

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