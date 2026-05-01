const express = require("express");
const router = express.Router();


const { createSports, getallids, deletesportstudent, updateSport } = require("../controllers/SportController");




router.post('/', createSports);
router.get('/', getallids);
router.delete('/:id', deletesportstudent)

router.put('/:id', updateSport)




module.exports = router;