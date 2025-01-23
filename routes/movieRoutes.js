const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");

// Definiamo gli endpoint index e show
router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
