const express = require("express");

const router = express.Router();

const { createStudent, getallstudents, deletestudentid, updateallstudent } = require("../controllers/StudentController");

router.post("/", createStudent);
router.get('/', getallstudents);

router.delete("/:id", deletestudentid);

router.put('/:id', updateallstudent);



module.exports = router;