const express = require('express');
const router = express.Router();


const { createSocial, getuserid } = require("../controllers/socialController");



router.post('/', createSocial);
router.get('/', getuserid);





module.exports = router;
