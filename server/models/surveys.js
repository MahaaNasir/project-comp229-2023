/*
  File name: surveys.js
  Project
  Group 1
*/

let mongoose = require('mongoose');

//creating the model class - surveysModel
let surveysModel = mongoose.Schema({
    name: String,
    surveyName: String,
    email: String,
    surveyType: String,
   

     //survey questions

     //multiple choice
     q1: String,
     a1Option1: String,
     a1Option2: String,
     a1Option3: String,
     a1Option4: String,

     q2: String,
     a2Option1: String,
     a2Option2: String,
     a2Option3: String,
     a2Option4: String,

     q3: String,
     a3Option1: String,
     a3Option2: String,
     a3Option3: String,
     a3Option4: String,

     q4: String,
     a4Option1: String,
     a4Option2: String,
     a4Option3: String,
     a4Option4: String,

     q5: String,
     a5Option1: String,
     a5Option2: String,
     a5Option3: String,
     a5Option4: String,

     //dropdown options
     q1Dropdown: String,
     q1Option: String,
     q1DropdownOption1: String,
     q1DropdownOption2: String,

     q2Dropdown:String,
     q2Option: String,
     q2DropdownOption1: String,
     q2DropdownOption2: String,

     q3Dropdown: String,
     q3Option: String,
     q3DropdownOption1: String,
     q3DropdownOption2: String,

     q4Dropdown: String,
     q4Option: String,
     q4DropdownOption1: String,
     q4DropdownOption2: String,

     q5Dropdown: String,
     q5Option: String,
     q5DropdownOption1: String,
     q5DropdownOption2: String,


     //short answers
     q1ShortAnswer: String,
     a1ShortAnswer: String,

     q2ShortAnswer: String,
     a2ShortAnswer: String,

     q3ShortAnswer: String,
     a3ShortAnswer: String,

     q4ShortAnswer: String,
     a4ShortAnswer: String,

     q5ShortAnswer: String,
     a5ShortAnswer: String,


     //radio buttons
     q1RadioButton: String,
     a1RadioButton1: String,
     a1RadioButtonText1: String,
     a1RadioButtonText2: String,
     a1RadioButtonText3: String,
     
     q2RadioButton: String,
     a2RadioButton1: String,
     a2RadioButtonText1: String,
     a2RadioButtonText2: String,
     a2RadioButtonText3: String,

     q3RadioButton: String,
     a3RadioButton1: String,
     a3RadioButtonText1: String,
     a3RadioButtonText2: String,
     a3RadioButtonText3: String,

     q4RadioButton: String,
     a4RadioButton1: String,
     a4RadioButtonText1: String,
     a4RadioButtonText2: String,
     a4RadioButtonText3: String,

     q5RadioButton: String,
     a5RadioButton1: String,
     a5RadioButtonText1: String,
     a5RadioButtonText2: String,
     a5RadioButtonText3: String
},

{
    collection: 'surveys'
});

module.exports = mongoose.model('Surveys', surveysModel);