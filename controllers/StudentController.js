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

module.exports = { createStudent, getallstudents }