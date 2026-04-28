const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {
    // console.log("SECRET IN MIDDLEWARE:", process.env.ACCESS_TOKEN_SECRET);

    let token = req.headers.authorization || req.headers.Authorization;

    if (!token) {
        return res.status(401).json({
            message: "No token provided "
        })
    }



    try {
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded Token:", decoded);
        req.user = decoded.user;
        return next();
    } catch (err) {
        console.error("Token validation error:", err);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
});

module.exports = validateToken;
