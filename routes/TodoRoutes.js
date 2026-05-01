const express = require('express');
const router = express.Router();
const { todotasklist, createTodo, deletetaskbyid, gettaskbystatus, updatetaskbyid } = require('../controllers/TodoList');


console.log("todotasklist:", typeof todotasklist);
console.log("createTodo:", typeof createTodo);

router.get("/", todotasklist);
router.post("/", createTodo);
router.delete("/:id", deletetaskbyid);

router.get("/:status", gettaskbystatus);

router.put("/:id", updatetaskbyid);




module.exports = router;