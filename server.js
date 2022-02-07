const http = require("http");
const express = require("express");
const app = require("./app")
const port = process.env.PORT || 5000;
const server = http.createServer();

server.listen(port);

const dbURI = 'mongodb+srv://aakashv8900:<password>@cluster0.2r0iu.mongodb.net/chatbot?retryWrites=true&w=majority'

