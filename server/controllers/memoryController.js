const Memory = require("../models/Memory");



// ================= CREATE MEMORY =================
const createMemory = async (req, res) => {

  try {

    console.log("BODY => ", req.body);
    console.log("FILE => ", req.file);

    const {
      title,
      content,
      mood,
      tags,
      isSecret,
    } = req.body;



    // ================= VALIDATION =================
    if (!title || !content) {

      return res.status(400).json({
        message: "Title and content are required",
      });
    }



    // ================= IMAGE =================
    const image =
      req.file?.path || "";



    // ================= TAGS =================
    let parsedTags = [];

    try {

      parsedTags =
        tags ? JSON.parse(tags) : [];

    } catch (error) {

      parsedTags = [];
    }



    // ================= CREATE MEMORY =================
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



    res.status(201).json({
      success: true,
      message: "Memory created successfully",
      memory,
    });

  } catch (error) {

    console.log("CREATE MEMORY ERROR => ", error);

    res.status(500).json({
      success: false,
      message: "Failed to create memory",
      error: error.message,
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



    res.status(200).json({
      success: true,
      count: memories.length,
      memories,
    });

  } catch (error) {

    console.log("GET MEMORIES ERROR => ", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch memories",
      error: error.message,
    });
  }
};



// ================= DELETE MEMORY =================
const deleteMemory = async (req, res) => {

  try {

    const memory =
      await Memory.findById(
        req.params.id
      );



    // ================= CHECK EXISTS =================
    if (!memory) {

      return res.status(404).json({
        success: false,
        message: "Memory not found",
      });
    }



    // ================= CHECK OWNER =================
    if (
      memory.user.toString() !==
      req.user.toString()
    ) {

      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }



    await memory.deleteOne();



    res.status(200).json({
      success: true,
      message: "Memory deleted successfully",
    });

  } catch (error) {

    console.log("DELETE MEMORY ERROR => ", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete memory",
      error: error.message,
    });
  }
};



module.exports = {
  createMemory,
  getMemories,
  deleteMemory,
};