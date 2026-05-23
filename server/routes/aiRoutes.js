const express = require("express");

const router = express.Router();

const {
  askRaven,
  summarizeMemory,
} = require("../controllers/aiController");



router.post(
  "/",
  askRaven
);

router.post(
  "/summarize/:id",
  summarizeMemory
);

module.exports = router;