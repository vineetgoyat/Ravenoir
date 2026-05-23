const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      default: "Unknown",
    },

    tags: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
      default: "",
   },
    
    isSecret: {
      type: Boolean,
      default: false,
   },

    summary: {
      type: String,
      default: "",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Memory",
  memorySchema
);