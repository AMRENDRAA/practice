//Jai shree Ram
//crud 
const mongoose = require('mongoose');

const Todo = require('../Models/TodoModel');

// const asyncHandler = require("express-async-handler");
// @desc Get all contacts 
//@ route Get /api/todo 
//@ access public 

const todotasklist = async (req, res) => {

    try {


        const TodoList = await Todo.find({});

        console.log(req.body);

        console.log("this is todo get all request method ");
        res.status(200).json({
            status: "success",
            "TodoList": TodoList
        })

    } catch (err) {
        console.log("error", err);

    }

}
const createTodo = (async (req, res) => {

    try {
        const { Taskname, status } = req.body;
        if (!Taskname || !status) {
            res.status(400).json({ error: "Missing field taskname or status " });


        }

        const Taskcreate = await Todo.create({
            Taskname,
            status

        })
        res.status(201).json({
            status: "Success",
            Taskname: Taskcreate.Taskname,


        })



    } catch (err) {
        res.status(400).json({
            status: "Failed",
            err: err.errors.status.message
        })
    }












})




const deletetaskbyid = async (req, res) => {

    try {

        const id = req.params.id


        const deletedTodotask = await Todo.findByIdAndDelete(id);



        if (!deletedTodotask) {
            return res.status(404).json({ message: 'Item not found' });
        }


        res.status(200).json({ message: 'Delete was a success', deletedDocument: deletedTodotask });





    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }


}

const gettaskbystatus = async (req, res) => {

    try {
        console.log("this is gettaskbystatus");
        const id = req.params.status;

        const gettaskbystat = await Todo.find({ status: id });
        console.log(gettaskbystat);
        if (gettaskbystat.length === 0) {
            return res.status(400).json({ error: "Invalid status" });
        }





        res.status(200).json({
            status: "Success",
            data: gettaskbystat

        })


    } catch (err) {
        res.status(500).json({
            status: "failed",
            error: err.message
        })

    }


}

//crud 


//Update the task status 

const updatetaskbyid = async (req, res) => {


    try {

        // Check if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }


        const updatedTask = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ status: "Success", data: updatedTask });





    } catch (err) {
        res.status(500).json({ status: "Failed", error: err.message });
    }

}


module.exports = { todotasklist, createTodo, deletetaskbyid, gettaskbystatus, updatetaskbyid };

