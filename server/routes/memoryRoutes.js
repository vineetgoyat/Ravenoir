const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const {
  createMemory,
  getMemories,
  deleteMemory,
} = require("../controllers/memoryController");

const router = express.Router();



// ================= CREATE MEMORY =================
router.post(
  "/",
  upload.single("image"),
  createMemory
);



// ================= GET MEMORIES =================
router.get(
  "/",
  getMemories
);



// ================= DELETE MEMORY =================
router.delete(
  "/:id",
  deleteMemory
);



module.exports = router;