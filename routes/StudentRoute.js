const express = require("express");

const router = express.Router();

const { createStudent, getallstudents } = require("../controllers/StudentController");

router.post("/", createStudent);
router.get('/', getallstudents);


module.exports = router;