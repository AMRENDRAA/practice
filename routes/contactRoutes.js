const express = require('express');
const router = express.Router();
const { getallContacts, createContact, deleteContact, getContact, editContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);

router.route("/").get(getallContacts);


router.route("/:id").get(validateToken, getContact);


router.route("/:id").put(validateToken, editContact);

router.route("/").post(validateToken, createContact);


router.route("/:id").delete(validateToken, deleteContact);








// router.route("/").get((req, res) => {
//     res.status(200).json({
//         message: "Hello this response "
//     })
// })

module.exports = router;

