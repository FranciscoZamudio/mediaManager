const express = require("express");
const router = express.Router();

//Register
router.get("/register", function(req, res, next){
  res.send("Register");
});
