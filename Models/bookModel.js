const mongoose = require('mongoose');

const BookModel = mongoose.Schema({
    Bookname: {
        type: String,
        required: [true, 'Please provide the bookname ']
    },
    Bookprice: {
        type: Number,
        required: [true, 'Please provide the publish date']
    },
    Authorname: {
        type: String,
        required: [true, 'Please provide the authorname ']
    }

}, {
    timestamp: [true]
})


module.exports = mongoose.model("BookModel", BookModel);
