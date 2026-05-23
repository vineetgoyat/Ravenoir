const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const {
  createMemory,
  getMemories,
  deleteMemory,
} = require("../controllers/memoryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
    "/",
    protect,
    upload.single("image"),
    createMemory
);

router.get("/", protect, getMemories);

router.delete("/:id", protect, deleteMemory);

module.exports = router;