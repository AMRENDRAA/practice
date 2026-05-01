
const express = require('express');
const router = express.Router();

const { createplayer, getallplayer, deleteplayer } = require("../controllers/Playeruser");
console.log("Player route loaded");


router.post('/', createplayer);
router.get('/', getallplayer)

router.delete('/:id', deleteplayer);

module.exports = router;
