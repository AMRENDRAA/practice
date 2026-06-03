const express = require("express");
const router = express.Router();



const validateToken = require("../middleware/validateTokenHandler");
const { registeruser, loginuser, currentuser } = require("../controllers/userController")


// Register the user 
router.post("/register", registeruser)

//Login 
router.post("/login", loginuser);

// current user information 

router.get("/current", validateToken, currentuser);



module.exports = router;
