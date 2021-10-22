const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;


app.listen(port, ()=> console.log("I´m like a bird"));


app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/login.html");
});

app.get("/",(req,res)=> {
	res.sendFile(__dirname + "/views/register.html");
});