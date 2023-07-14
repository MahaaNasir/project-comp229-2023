/*
  Assignment 2
  File name: surveys.js
  Student Name: Maha Nasir
  Student ID: 301266305
  Date: 18 June 2023
*/

let mongoose = require('mongoose');

//creating the model class - surveysModel
let surveysModel = mongoose.Schema({
    name: String,
    phone: Number,
    surveyName: String,
    email: String
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveysModel);