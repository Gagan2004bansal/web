const express = require('express');
const router = express.Router();

// Import Controller
const { getQues } = require("../controllers/getQues");
const { Home } = require("./App.js");
// Define API Routes
router.get("/getQues", getQues);
router.get("/", Home);

module.exports = router;

