const Mongoose = require("mongoose");

const TodoSchema = Mongoose.Schema({
    Taskname: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Start", "Inprogress", "Done"],
        default: "Start"
    }

})


module.exports = Mongoose.model("TodoSchema", TodoSchema);
