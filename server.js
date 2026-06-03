// console.log('Jai Shree Ram ');
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./Config/dbConnection');

const cors = require('cors'); // 1. Import the cors package





connectDb();
const port = process.env.PORT;

app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true
}));

app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            status: "Failed",
            message: "Invalid JSON format in request body"
        });
    }
    next(err);
});

app.use((req, res, next) => {
    console.log(`Incoming Request -> Method: ${req.method} | URL: ${req.originalUrl}`);
    next();
});

// console.log("KEY", process.env.ACCESS_TOKEN_SECRET);
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/todo", require("./routes/TodoRoutes"));
app.use("/api/expense", require("./routes/ExpenseRoute"));
app.use("/api/student", require("./routes/StudentRoute"));
app.use("/api/playerinfo", require("./routes/Playerinfo"));
app.use("/api/socialIdentify", require("./routes/socialRoutes"))

app.use("/api/offices", require("./routes/OfficeRoute"));




app.use("/api/sports", require("./routes/sportsRoute"));
app.use("/api/gymmember", require("./routes/gymRoutes"));

app.use("/api/bookpublish", require("./routes/bookRoute"));

app.use("/api/health", require("./routes/healthRoute"));



app.use(errorHandler);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});


