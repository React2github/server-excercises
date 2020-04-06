
const express = require("express");
const app = express();
let counter = 0;

app.get("/value", function (req, res) {
    res.send("The current count is " + counter);  
})

app.get("/increment", function (req, res) {
    counter++;
    res.send("The current count has been increased to " + counter);
})

app.get("/decrement", function (req, res) {
    counter--;
    res.send("The current count has been decreased to " + counter);
})

app.listen(3000, function() {
    console.log("Server is listening...");
})