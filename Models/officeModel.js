const mongoose = require("mongoose");

const officeModel = mongoose.Schema({

    officename: {
        type: "String",
        required: [true, "Please provide the office name"]

    },

    officelocation: {
        type: "String",
        required: [true, "Please provide the office location "]
    },
    officeemployee: {
        type: Number,
        required: [true, "Please provide the no of employees"],
        min: [0, "Please provide the min value as 0"]
    }

})

module.exports = mongoose.model("officeModel", officeModel);
