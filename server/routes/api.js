const express = require("express");
const router = express.Router();

const card_controller = require("../controllers/cards.controllers");

router.get("/cards", card_controller.findAll);

router.get("/cards/:id", card_controller.findById);

module.exports = router;
