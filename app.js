const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

const port = 3000;
const users = require('./routes/users');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);//anything that is url/users will go to this file

//index route
app.get('/', function(req, res){//route to homepage that sands a message
  res.send('invalid end point');
});

//start server
app.listen(port, function(){
  console.log("Server started on port:"+port);
});
