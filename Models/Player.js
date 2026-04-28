const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        trim: true,
        minlength: [3, "Name must be atleast 3 characters long "],
        maxlength: [50, "Name cannot Exceed the 50 chars "]
    },
    playerclass: {
        type: String,
        required: true,
        min: [1, "class must be atleast 1"],
        max: [12, "class cannot exceed 12 "]
    },
    age: {
        type: Number,
        required: [true, "Age is required "],
        min: [1, "age  must be atleast 1"],
        max: [12, "age  cannot exceed 12 "]

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PlayerSchema", PlayerSchema);
