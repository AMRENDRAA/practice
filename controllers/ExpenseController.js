//Jai shree ram 
const Expense = require('../Models/ExpenseModel');

const mongoose = require("mongoose");

// @desc post create  Expense 
//@ route post /api/expense
//@ access public 


const createExpenses = async (req, res) => {

    try {


        const { ExpenseName, ExpenseAmount, ExpenseSummary } = req.body;
        console.log("Body:", req.body)

        // if (!Expensename || !Expenseamount || !ExpenseSummary) {
        //     res.status(400).json({
        //         status: "Failed",
        //         message: "Missing something "
        //     })
        // }

        const createdata = await Expense.create({
            ExpenseName,
            ExpenseAmount,
            ExpenseSummary
        })

        res.status(200).json({
            status: "Success",
            data: createdata
        })








        console.log("Hellow from the get all expenses ");

    } catch (err) {
        console.log(err);

    }




}



const getallexpense = async (req, res) => {

    try {

        console.log("get all expense");

        const getExpensedata = await Expense.find({});

        return res.status(200).json({
            status: 'Success',
            data: getExpensedata
        })






    } catch (err) {
        console.log("error", err);

    }
}


const deleteexpense = async (req, res) => {

    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "Fail",
                message: "Invalid id"
            })
        }
        const deleteexpenseuser = await Expense.findByIdAndDelete(id);


        if (!deleteexpenseuser) {
            return res.status(404).json({
                status: "Failed",
                error: "Not found"
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Deleted "
        })




    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: err.message,

        })
    }




}

module.exports = { createExpenses, getallexpense, deleteexpense }