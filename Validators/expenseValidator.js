const Joi = require("joi");
const expenseSchema = Joi.object({
    ExpenseName: Joi.string().min(3).max(100).required(),
    ExpenseAmount: Joi.number().min(0).required(),
    ExpenseAmount: Joi.number().integer().min(0).required(),
    ExpenseSummary: Joi.string().max(500).optional().allow("")
})

module.exports = expenseSchema;
