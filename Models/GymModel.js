const mongoose = require("mongoose");

const GymModel = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter the name ']
    },
    age: {
        type: Number,
        required: [true, 'Please enter the age'],

        min: 16,
        max: 99
    },
    fees: {
        type: Number,
        min: 1,
        required: [true, 'Please enter the fees ']
    }


}, {
    timestamp: true
}
)
module.exports = mongoose.model("GymModel", GymModel);

