const PlayerSchema = require("../Models/Player");


const createplayer = async (req, res) => {
    try {

        const { name, playerclass, age, email } = req.body;
        console.log(req.body);

        console.log("req body", req.body);
        if (!name || !age || !email) {
            return res.status(400).json({
                status: "Failed",
                err: "Missing something"
            })
        }

        const existingUser = await PlayerSchema.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                status: "Failed",
                err: "Email already exists"
            });
        }

        const createplayerdata = await PlayerSchema.create({
            name,
            playerclass,
            age,
            email
        })
        res.status(200).json({
            status: "success",
            data: createplayerdata
        })
    } catch (err) {

        // Validation error (Mongoose)
        if (err.name === "ValidationError") {
            const errors = Object.values(err.errors).map(e => e.message);

            return res.status(400).json({
                status: "Failed",
                err: errors.join(", ")
            });
        }

        if (err.code === 11000) {
            return res.status(400).json({
                status: "Failed",
                err: ` ${Object.keys(err.keyValue)}: ${Object.values(err.keyValue)}`
            });
        }
        return res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }


}
const getallplayer = async (req, res) => {
    try {



        const getdataplayer = await PlayerSchema.find({});

        return res.status(200).json({
            status: "success",
            data: getdataplayer
        })


    } catch (err) {
        return res.status(500).json({
            status: "failed",
            err: err.message
        })
    }
}

module.exports = { createplayer, getallplayer }