const express = require("express");
const router = express.Router();

const { createbook, getallbook } = require('../controllers/bookController')

//get the books
router.get('/', getallbook)

// creATE THE BOOKS 

router.post('/', createbook);

module.exports = router;

