const student = require('../Models/StudentModel');


const createStudent = async (req, res) => {




    try {

        const { Studentname, Studentclass } = req.body;

        const createstudentid = await student.create({
            Studentname,
            Studentclass
        })

        res.status(200).json({
            status: "success",
            data: createstudentid
        })

    } catch (err) {

        console.log("ERR", err);
        res.status(500).json({
            status: "failed",
            err: err.message
        })

    }


}



const getallstudents = async (req, res) => {

    try {

        const getstudent = await student.find({});

        res.status(200).json({
            status: "success",
            data: getstudent
        })

    } catch (err) {
        console.log('err', err);
        res.status(500).json({
            status: "Failed",
            err: e.err
        })
    }




}

const deletestudentid = async (req, res) => {
    try {

        const id = req.params.id;
        const deletedstudent = await student.findByIdAndDelete(id);

        if (!deletedstudent) {
            return res.status(400).json({
                status: "fAILED",
                err: "not found"
            })
        }

        res.status(204).json({
            status: "success"
        })



    } catch (err) {
        res.status(400).json({
            status: "failed",
            err: err.message
        })
    }
}
const updateallstudent = async (req, res) => {

    try {

        const updatesudent = await student.findByIdAndUpdate(req.params.id, req.body, {

            new: true,
            runValidators: true
        })

        if (!updatesudent) {
            res.status(500).json({
                status: "Failed"
            })
        }

        res.status(200).json({

            status: "Success ",
            data: updatesudent
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }

}


module.exports = { createStudent, getallstudents, deletestudentid, updateallstudent }