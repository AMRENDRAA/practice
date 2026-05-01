const mongoose = require("mongoose");
const socialModel = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the name"]

    },
    lastname: {
        type: String,
        required: [true, "Please enter the lastname"]

    },
    age: {
        type: Number,
        required: [true],
        min: [18, 'Must be atleast 18 years ']

    }
}
    , {
        timestamp: true
    }


)
module.exports = mongoose.model("socialModel", socialModel); 
