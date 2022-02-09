const http = require("http");
const express = require("express");
const app = require("./app")
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port);
