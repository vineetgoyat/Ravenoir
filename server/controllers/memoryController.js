const Memory = require("../models/Memory");



// ================= CREATE MEMORY =================
const createMemory = async (req, res) => {

  try {

    const {
      title,
      content,
      mood,
      tags,
      isSecret,
    } = req.body;

    // IMAGE FROM CLOUDINARY
    const image =
      req.file?.path || "";

    // PARSE TAGS
    const parsedTags =
      tags ? JSON.parse(tags) : [];

    // CREATE MEMORY
    const memory = await Memory.create({

      title,
      content,

      mood,

      tags: parsedTags,

      image,

      isSecret:
        isSecret === "true",

      user: req.user,

    });

    res.status(201).json(memory);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to create memory",
    });
  }
};



// ================= GET ALL MEMORIES =================
const getMemories = async (req, res) => {

  try {

    const memories = await Memory.find({
      user: req.user,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(memories);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch memories",
    });
  }
};



// ================= DELETE MEMORY =================
const deleteMemory = async (req, res) => {

  try {

    const memory = await Memory.findById(
      req.params.id
    );

    // CHECK MEMORY EXISTS
    if (!memory) {

      return res.status(404).json({
        message: "Memory not found",
      });
    }

    // CHECK OWNER
    if (
      memory.user.toString() !==
      req.user.toString()
    ) {

      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await memory.deleteOne();

    res.status(200).json({
      message: "Memory deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to delete memory",
    });
  }
};



module.exports = {
  createMemory,
  getMemories,
  deleteMemory,
};