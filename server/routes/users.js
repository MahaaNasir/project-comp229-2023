/*
  File name: users.js
  Project Part 2
  Group 1
  Due: Jul 16, 2023
*/

var express = require('express');
var router = express.Router();

/* GET Route to listen the users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
