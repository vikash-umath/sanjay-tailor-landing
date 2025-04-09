
const express = require("express");
const { contactCtrl } = require("../controllers/contactCtrl");
const router = express.Router();

// Endpoint for creating a new contact submission
router.post("/create", contactCtrl);

module.exports = router;
