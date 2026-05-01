const BookModel = require('../Models/bookModel');


const getallbook = async (req, res) => {


    try {


        console.log('This is just testing ')
        const getbookid = await BookModel.find({});
        return res.status(200).json({
            status: "Succees",
            data: getbookid
        })




    } catch (err) {
        res.status(500).json({
            message: "failed ",
            err: err.err


        })
    }



}


const createbook = async (req, res) => {


    const { Bookname, Bookprice, Authorname } = req.body;

    if (!Bookname || !Bookprice || !Authorname) {
        res.status(400).json({

            status: "Failed",
            message: "Something is missing"
        })
    }


    const createbookid = await BookModel.create({
        Bookname,
        Bookprice,
        Authorname
    })


    res.status(201).json({
        status: "success",
        data: createbookid
    })
}

module.exports = { createbook, getallbook }