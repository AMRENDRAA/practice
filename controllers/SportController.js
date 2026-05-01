const Sport = require('../Models/sportsModel');

// @desc post create  Sports Model
//@ route post /api/sports
//@ access public 


const createSports = async (req, res) => {

    try {

        const { playername, Email } = req.body;
        console.log('Player deatils ', playername, Email);
        const createplayer = await Sport.create({
            playername,
            Email
        })

        res.status(201).json({
            status: "success",
            data: createplayer
        })




        console.log("this is controller")
    } catch (err) {

        res.status(400).json({
            status: 500,
            err: err.message
        })
        console.log("this is err", err)

    }




}



const getallids = async (req, res) => {


    try {


        const id = await Sport.find({});

        if (!id) {
            res.status(400).json({
                status: "Failed",
                data: "no data"
            })
        }

        res.status(200).json({
            status: "Success",
            data: id
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err.message
        })
    }
}

const deletesportstudent = async (req, res) => {

    try {

        console.log("Hello")
        const id = req.params.id;


        const deletestudentid = await Sport.findByIdAndDelete(id);

        if (!deletestudentid) {
            res.status(400).json({
                status: "Failed",
                message: "Not found"
            })
        }

        return res.status(204).json({
            status: "Success",

        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            error: err.message
        })
    }
}


const updateSport = async (req, res) => {

    try {

        const updatesportid = await Sport.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!updatesportid) {

            res.status(500).json({
                status: "Failed"
            })


        }


        res.status(200).json({
            status: "Success",
            data: updatesportid

        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }
}


module.exports = { createSports, getallids, deletesportstudent, updateSport }



