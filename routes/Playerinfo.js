
const express = require('express');
const router = express.Router();

const { createplayer, getallplayer } = require("../controllers/Playeruser");
console.log("Player route loaded");


router.post('/', createplayer);
router.get('/', getallplayer)

module.exports = router;
