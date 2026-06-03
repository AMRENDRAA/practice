const express = require('express');
const router = express.Router();
const { getallContacts, createContact, deleteContact, getContact, editContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);



router.use(validateToken);
router.route("/").get(getallContacts).post(createContact);
router.route("/:id").get(getContact).put(editContact).delete(deleteContact);



module.exports = router;

