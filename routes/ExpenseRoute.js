const express = require('express');
const router = express.Router();
const { createExpenses, getallexpense, deleteexpense } = require('../controllers/ExpenseController')

const expenseSchema = require('../Validators/expenseValidator')
const validate = require('../middleware/validate');
router.post("/", validate(expenseSchema), createExpenses);
router.get("/", getallexpense);
router.delete("/:id", deleteexpense);


module.exports = router;