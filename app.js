const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();      
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("css"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);


})
app.listen(3000, () => console.log("server is listening to port 3000"));
