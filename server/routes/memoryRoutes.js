const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const {
  createMemory,
  getMemories,
  deleteMemory,
} = require("../controllers/memoryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();



// ================= CREATE MEMORY =================
router.post(
  "/",
  protect,
  upload.single("image"),
  createMemory
);



// ================= GET ALL MEMORIES =================
router.get(
  "/",
  protect,
  getMemories
);



// ================= DELETE MEMORY =================
router.delete(
  "/:id",
  protect,
  deleteMemory
);



module.exports = router;