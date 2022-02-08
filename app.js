const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const questionsRoutes = require("./api/routes/questions");
const responsesRoutes = require("./api/routes/responses");
const userRoutes = require("./api/routes/users");

mongoose.connect('mongodb+srv://aakashv8900:aakashv8900@cluster0.2r0iu.mongodb.net/chatbot?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use("/questions", questionsRoutes);
app.use("/responses", responsesRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;