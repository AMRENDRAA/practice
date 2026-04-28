const mongoose = require("mongoose");
const sportSchema = mongoose.Schema({
    playername: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})
module.exports = mongoose.model("sportSchema", sportSchema);