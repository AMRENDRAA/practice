const mongoose = require("mongoose");

const HealthModel = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'please provide the name ']
    },
    age: {
        type: String,
        required: [true, 'Please provide age ']
    },
    insured: {
        type: String,
        required: [true, 'Please provide value '],
        enum: {
            values: ["yes", "no"],
            message: "Invalid order status"
        }
    }
}, {
    timestamp: true
})


module.exports = mongoose.model("healthModel", HealthModel);
