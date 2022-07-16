const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.get("/:contactId", ContactController.get);
router.get("/", ContactController.getAll);
router.post("/", ContactController.create);

module.exports = router;
