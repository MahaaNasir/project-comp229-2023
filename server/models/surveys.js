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
    email: String,

     //survey questions
     q1: String,
     a1Option1: String,
     a1Option2: String,

     q2: String,
     a2Option1: String,
     a2Option2: String,

     q3: String,
     a3Option1: String,
     a3Option2: String,

     q4: String,
     a4Option1: String,
     a4Option2: String,

     q5: String,
     a5Option1: String,
     a5Option2: String
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveysModel);