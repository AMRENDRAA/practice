const socialModel = require("../Models/socialModel");
const createSocial = async (req, res) => {

    try {

        const { name, lastname, age } = req.body;

        const createsocialid = await socialModel.create({
            name,
            lastname,
            age

        })

        res.status(201).json({

            status: "success",
            data: createsocialid

        })

    } catch (err) {
        res.status(400).json({
            status: "failed",
            err: err.message
        })
    }

}

const getuserid = async (req, res) => {

    try {


        const getsocialids = await socialModel.find({});
        res.status(200).json({
            status: "success",
            data: getsocialids
        })

    } catch (err) {
        res.status(400).json({
            status: "failed",
            err: err.message
        })
    }



}

const deleteuserid = async (req, res) => {

    try {

        const id = req.params.id;

        const deleteuser = await socialMedia.findByIdAndDelete(id);

        if (!deleteuser) {
            res.status(400).json({
                status: "FAILED "

            })
        }

        res.status(204).json({
            status: "Success"
        })
    } catch (err) {
        return res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }
}

module.exports = { createSocial, getuserid, deleteuserid }