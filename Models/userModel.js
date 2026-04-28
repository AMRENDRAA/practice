const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please enter the username "]
    },
    email: {
        type: String,
        required: [true, "please enter the user email"],
        unique: [true, "Email already taken "]
    },
    password: {
        type: String,
        required: [true, "please enter the password "]
    }

}, {
    timestamp: true,

})

module.exports = mongoose.model("User", userSchema);
