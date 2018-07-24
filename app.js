const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

//connection to database
mongoose.connect(config.database);//connect to database
//if there is connection
mongoose.connection.on('connected', function(){
  console.log('connected to database '+config.database);
});
//if there is an error
mongoose.connection.on('error', function(err){
  console.log('database error '+err);
});

const app = express();//inicialized express

const users = require('./routes/users');//bring users folder from routes
const port = 3000;

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'view')))//set static folder
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
