const express = require('express');
const router = express.Router();
const { createhealthuserid, getalluserdata, healthdeleteuser, updatehealth } = require('../controllers/healthController');




router.post("/", createhealthuserid);

router.get("/", getalluserdata);
router.delete("/:id", healthdeleteuser);
router.put('/:id', updatehealth)



module.exports = router;

