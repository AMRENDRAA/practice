const express = require("express");
const router = express.Router();
const { createoffice } = require('../controllers/officeController')

router.post('/', createoffice);
// router.get('/', getoffice)



module.exports = router;


