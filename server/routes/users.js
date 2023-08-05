/*
  File name: users.js
  Project 
  Group 1
*/

var express = require('express');
var router = express.Router();

/* GET Route to listen the users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
