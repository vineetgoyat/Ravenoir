import { useState, useEffect } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
  FaCrow,
  FaPaperPlane,
  FaVolumeUp,
} from "react-icons/fa";



function RavenAI() {

  const [prompt, setPrompt] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [speaking, setSpeaking] =
    useState(false);

  const [voices, setVoices] =
    useState([]);



  // ================= LOAD VOICES =================
  useEffect(() => {

    const loadVoices = () => {

      const allVoices =
        window.speechSynthesis.getVoices();

      setVoices(allVoices);
    };



    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

  }, []);




  // ================= ASK RAVEN =================
  const askRaven = async () => {

    if (!prompt.trim()) return;

    try {

      setLoading(true);

      const res = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/ai`,

        {
          prompt,
        }

      );

      setReply(
        res.data.reply
      );

    } catch (error) {

      console.log(error);

      setReply(
        "The raven remains silent..."
      );

    } finally {

      setLoading(false);
    }
  };




  // ================= SPEAK RAVEN =================
  const speakRaven = (text) => {

    if (!text) return;



    // STOP OLD SPEECH
    window.speechSynthesis.cancel();



    const utterance =
      new SpeechSynthesisUtterance(text);



    // DARK VOICE SETTINGS 😈
    utterance.pitch = 0.7;

    utterance.rate = 0.85;

    utterance.volume = 1;



    // FIND BEST VOICE
    const darkVoice =
      voices.find((voice) =>
        voice.name.includes(
          "Google UK English Male"
        )
      ) || voices[0];



    if (darkVoice) {

      utterance.voice =
        darkVoice;
    }



    utterance.onstart = () => {

      setSpeaking(true);
    };



    utterance.onend = () => {

      setSpeaking(false);
    };



    window.speechSynthesis.speak(
      utterance
    );
  };




  // ================= STOP SPEAKING =================
  const stopRaven = () => {

    window.speechSynthesis.cancel();

    setSpeaking(false);
  };




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

      className="min-h-screen bg-[#0D0D0D] text-white p-6 md:p-10"
    >

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">

          <div className="text-5xl text-red-800">

            <FaCrow />

          </div>

          <div>

            <h1
              className="text-5xl font-bold"
              style={{
                fontFamily: "Cinzel",
              }}
            >
              Raven AI
            </h1>

            <p className="text-gray-500 mt-2">

              Speak with the soul hidden
              inside Ravenoir.

            </p>

          </div>

        </div>



        {/* AI CONTAINER */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-red-950/10">

          {/* INPUT */}
          <textarea

            rows="5"

            placeholder="Ask Raven something..."

            value={prompt}

            onChange={(e) =>
              setPrompt(e.target.value)
            }

            className="w-full p-5 rounded-2xl bg-black/30 border border-white/10 outline-none resize-none"
          />



          {/* ASK BUTTON */}
          <button

            onClick={askRaven}

            disabled={loading}

            className="mt-6 px-8 py-4 rounded-2xl bg-red-900 hover:bg-red-800 transition flex items-center gap-3"
          >

            <FaPaperPlane />

            {loading
              ? "Raven is thinking..."
              : "Ask Raven"}

          </button>



          {/* RESPONSE */}
          {reply && (

            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="mt-10 bg-black/30 border border-white/10 rounded-2xl p-6"
            >

              <h2 className="text-2xl font-bold mb-4 text-red-400">

                👁️ Raven Speaks

              </h2>



              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">

                {reply}

              </p>



              {/* VOICE BUTTONS */}
              <div className="flex gap-4 mt-6">

                <button

                  onClick={() =>
                    speakRaven(reply)
                  }

                  className="px-6 py-3 rounded-xl bg-purple-900 hover:bg-purple-800 transition flex items-center gap-3"
                >

                  <FaVolumeUp />

                  {speaking
                    ? "Raven Speaks..."
                    : "Hear Raven"}

                </button>



                {speaking && (

                  <button

                    onClick={stopRaven}

                    className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                  >

                    Stop

                  </button>

                )}

              </div>

            </motion.div>

          )}

        </div>

      </div>

    </motion.div>
  );
}

export default RavenAI;