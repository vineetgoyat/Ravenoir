const Groq = require("groq-sdk");

const Memory = require("../models/Memory");



const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});



// ================= ASK RAVEN =================
const askRaven = async (req, res) => {

  try {

    const { prompt } = req.body;

    const completion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",

            content:
              `
              You are Raven,
              a dark cinematic AI assistant.
              Speak mysteriously,
              intelligently,
              and emotionally.
              `,
          },

          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.3-70b-versatile",
      });

    res.status(200).json({

      reply:
        completion.choices[0]
          .message.content,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Raven AI failed",
    });
  }
};



// ================= SUMMARIZE MEMORY =================
const summarizeMemory = async (req, res) => {

  try {

    const memory =
      await Memory.findById(
        req.params.id
      );



    const completion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",

            content:
              `
              You are Raven,
              a dark emotional AI.
              Analyze memories poetically.
              `,
          },

          {
            role: "user",

            content:
              `
              Title:
              ${memory.title}

              Content:
              ${memory.content}
              `,
          },
        ],

        model: "llama-3.3-70b-versatile",
      });



    memory.summary =
      completion.choices[0]
        .message.content;



    await memory.save();



    res.status(200).json({

      summary:
        memory.summary,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Failed to summarize memory",

    });
  }
};



module.exports = {

  askRaven,

  summarizeMemory,

};