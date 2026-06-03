const OfficeModel = require("../Models/officeModel");

const createoffice = async (req, res) => {
    try {


        const { officelocation, officename, officeemployee } = req.body;

        if (!officelocation || !officename || !officeemployee) {

            res.status(400).json({ "err": "please provide data" })
        }


        const createnewoffice = await OfficeModel.create({
            officelocation,
            officename,
            officeemployee
        })

        res.status(200).json({

            status: "success",
            data: createnewoffice

        })
    } catch (err) {
        res.status(500).json({

            status: "Error",
            err: err.err
        })
    }





}
module.exports = { createoffice }