const GymModel = require('../Models/GymModel');
const creategymmember = async (req, res) => {


    try {
        const { name, age, fees } = req.body;

        if (!name || !age || !fees) {
            res.status(400).json({
                status: "failed",
                message: "missing something "
            })
        }

        const newmember = await GymModel.create({
            name,
            age,
            fees
        })

        res.status(201).json({

            status: "success",
            data: newmember
        })


    } catch (err) {
        res.status(400).json({
            status: "Failed ",
            err: err.message
        })
    }


}

const getgymmember = async (req, res) => {


    try {

        const getgymid = await GymModel.find({});

        res.status(200).json({
            status: "success",
            data: getgymid
        })



    } catch (err) {
        res.status(400).json({
            status: "Failed",
            err: err.message
        })
    }




}


const gymdeleteuser = async (req, res) => {


    try {

        const id = req.params.id;

        console.log(req.params.id)
        const deleteid = await GymModel.findByIdAndDelete(id);

        if (!deleteid) {
            res.status(500).json({
                status: "Failed"
            })
        }

        res.status(204).json({
            status: "Suceess"
        })


    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }


}


module.exports = {
    creategymmember,
    getgymmember,
    gymdeleteuser
}