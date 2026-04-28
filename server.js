// console.log('Jai Shree Ram ');
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./Config/dbConnection');







connectDb();
const port = process.env.PORT || 5000;
app.use(express.json());


app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            status: "Failed",
            message: "Invalid JSON format in request body"
        });
    }
    next(err);
});

// console.log("KEY", process.env.ACCESS_TOKEN_SECRET);
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/todo", require("./routes/TodoRoutes"));
app.use("/api/expense", require("./routes/ExpenseRoute"));
app.use("/api/student", require("./routes/StudentRoute"));
app.use("/api/playerinfo", require("./routes/Playerinfo"));


app.use("/api/sports", require("./routes/sportsRoute"));


app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});


