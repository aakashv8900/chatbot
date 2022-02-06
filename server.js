const express = require("express");
const app = express();
require("dotenv").config();

const dbURI = 'mongodb+srv://aakashv8900:<password>@cluster0.2r0iu.mongodb.net/chatbot?retryWrites=true&w=majority'

app.use("/ques/", require("./routes/usersRoutes"));

app.listen(5000, function() {
    console.log("Listening");
});