const fs = require("fs");
const host = "127.0.0.1";
const port = 1337;
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, host);
