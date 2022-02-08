const http = require("http");
const express = require("express");
const app = require("./app")
const port = process.env.PORT || 5000;
const server = http.createServer();

server.listen(port, () => {
    console.log("Listening");
});
