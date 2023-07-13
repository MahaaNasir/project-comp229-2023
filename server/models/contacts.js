/*
  Assignment 2
  File name: contacts.js
  Student Name: Maha Nasir
  Student ID: 301266305
  Date: 18 June 2023
*/

let mongoose = require('mongoose');

//creating the model class - contactsModel
//Change to surveyModel
let contactsModel = mongoose.Schema({
    name: String,
    phone: Number,
    email: String
    //Questions 1-5
    //Option 1-2 for each question
},
{
    collection: 'contacts'
    //surveys
});

module.exports = mongoose.model('Contacts', contactsModel);//Fix names