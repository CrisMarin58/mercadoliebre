const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port, ()=> console.log("I´m like a bird"));


app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/login.html");
});

app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/register.html");
});