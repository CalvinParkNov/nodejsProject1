//express basic step
const express = require("express");
const bodyParser = require("body-parser"); 
const request = require("request");
const page = __dirname;

const app = express();

app.get("/", (req, res)=>{
  res.sendFile(page + "/index.html");
})

app.get("/createAccount", (req, res)=>{
  res.sendFile(page + "/createAccount.html");
})

app.listen(3000, ()=>{
  console.log("server is running on port 3000");
})