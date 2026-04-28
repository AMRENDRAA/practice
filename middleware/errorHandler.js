const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    // Fix: correct fallback (avoid default 200)


    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {

        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed  ", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Validation Failed  ", message: err.message, stackTrace: err.stack })
            break;


        case constants.UNAUTHORIZED:
            res.json({ title: "UN Authorized   ", message: err.message, stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Forbideen  ", message: err.message, stackTrace: err.stack })
            break;


        default:

            console.log("No error all good !");
            break;





    }





}



module.exports = errorHandler;
