const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
    ExpenseName: { type: String, required: true, trim: true },
    ExpenseAmount: { type: Number, required: true },
    ExpenseSummary: { type: String, trim: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("ExpenseModel", ExpenseSchema);
