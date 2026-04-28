const express = require("express");
const router = express.Router();


const { createSports } = require("../controllers/SportController");




router.post('/', createSports);



module.exports = router;