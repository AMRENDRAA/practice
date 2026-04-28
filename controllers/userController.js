const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// @desc register  a user  
//@ route POST  /api/user  
//@ access public 

const registeruser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are mandatory"
        });
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        return res.status(400).json({
            message: "User is already registered"
        });
    }

    // Hash Password
    //we use the bcrypt library to hash the password 


    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const user = await User.create({
        username,
        email,
        password: hashedpassword
    });
    console.log(`User created ${user}`);


    if (!user) {
        return res.status(400).json({
            message: "User data is incorrect"
        });
    }

    return res.status(201).json({
        _id: user._id,
        email: user.email
    });
});

// @desc register  a user  
//@ route Post  /api/user  
//@ access public 

const loginuser = asyncHandler(async (req, res) => {

    console.log("Step 1: Start");


    const { email, password } = req.body;

    console.log("Step 1: Body parsed");

    // validation
    if (!email || !password) {
        return res.status(400).json({
            // console.log("Step 3:validation failed ");

            message: "All fields are mandatory"
        });
    }

    // find the user in the db 


    const user = await User.findOne({ email });
    // compare password with hashedpassword


    // authentication
    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        return res.status(200).json({ accessToken });

    } else {
        return res.status(401).json({
            message: "email or password is not valid"
        });
    }
});


// @desc current info user  
//@ route Get  /api/user  
//@ access public 

const currentuser = asyncHandler((req, res) => {

    res.json({ message: "login done Current user", user: req.user });



}
)

module.exports = { registeruser, loginuser, currentuser }