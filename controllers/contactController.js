
//Jai shree Ram


const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel");



// @desc Get all contacts 
//@ route Get /api/contacts 
//@ access private

const getallContacts = asyncHandler(async (req, res) => {


    //    console.log("Hello this is from getallcontacts controller ")
    //     console.log(req.body);


    const contacts = await Contact.find({});


    res.status(200).json({
        message: "Hello this response  is to fetch  all contacts details   ",
        contacts: contacts
    })
})


//@desc Create New contact 
// @route Post /api/contactss
//@ access private

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body :is: ", req.body);
    const { name, email, phone } = req.body;// destructure 
    // if (!name || !email || !phone) {
    //     throw new Error("All fields are mandatory !");


    // }

    console.log("Before DB call");

    try {

        console.log("Request", req.user);

        const contact = await Contact.create({
            name,
            email,
            phone,
            user_id: req.user.id
        });

        console.log("Created:", contact);

        res.status(201).json(contact);

    } catch (err) {
        console.log("CREATE ERROR:", err);
        res.status(500).json({ message: err.message });
    }


})
//@desc Put New contact 
// @route put /api/contacts
//@ access private 

const editContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true });



    res.status(200).json({
        message: `Update the contact  ${req.params.id}`,
        update: updateContact
    })
})





//@desc delete New contact 
// @route put /api/contacts/:id
//@ access private 

const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await contact.deleteOne();



    res.status(201).json({
        message: "This is the delete method ",
        contact: contact
    })


})


//@desc get individual contact 
// @route put /api/contacts
//@ access private  

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }




    res.status(200).json({
        message: `This is the get contact  method ${req.params.id} `,
        contacts: contact
    })


})




module.exports = { getallContacts, createContact, deleteContact, getContact, editContact };
