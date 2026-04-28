const mongoose = require("mongoose");
const StudentModel = mongoose.Schema({
    Studentname: {
        type: String,
        required: true

    },
    Studentclass: {
        type: Number,
        required: true

    }

})

module.exports = mongoose.model("StudentModel", StudentModel);
