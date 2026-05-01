const HealthModel = require('../Models/healthModel');

const createhealthuserid = async (req, res) => {



    try {



        const {
            name, age, insured

        } = req.body;




        if (!name || !age || !insured) {
            return res.status(400).json({
                status: "Failed",
                messsage: "Something is missing "
            })
        }


        const createuser = await HealthModel.create({
            name,
            age,
            insured
        })

        return res.status(201).json({

            status: "Success",
            data: createuser
        })
    } catch (err) {
        res.status(400).json({

            status: "Failed",
            err: err.message
        })
    }


}



const getalluserdata = async (req, res) => {

    try {



        const getdata = await HealthModel.find({});

        res.status(200).json({
            status: "Success",
            data: getdata
        })
    } catch (err) {

        res.status(400).json({
            status: "Failed",
            err: err.message
        })
    }
}



const healthdeleteuser = async (req, res) => {


    try {
        console.log("Health delete")


        const id = req.params.id;

        const deletuserid = await HealthModel.findByIdAndDelete(id)

        if (!deletuserid) {
            res.status(500).json({
                err: "User not found"
            })
        }

        res.status(204).json({
            status: "Success"
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }
}

const updatehealth = async (req, res) => {

    try {
        const updateid = await HealthModel.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            }

        )


        if (!updateid) {
            res.status(500).json({
                status: "Failed"
            })
        }

        res.status(200).json({
            status: "success",
            data: updateid

        })


    } catch (err) {
        res.status(500).json({
            status: "Failed",
            Err: err.message
        })
    }
}
module.exports = { createhealthuserid, getalluserdata, healthdeleteuser, updatehealth }