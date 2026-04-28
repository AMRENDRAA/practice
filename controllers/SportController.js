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


module.exports = { createSports }



