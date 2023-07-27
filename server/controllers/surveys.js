/*
  File name: surveys.js
  Project Part 2
  Group 1
  Due: Jul 16, 2023
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connecting to surveys Model
let Surveys = require('../models/surveys');

module.exports.displaySurveysList = async (req, res, next)=>{
    try {
        let surveysList = await Surveys.find();

        res.render('surveys/list', 
            {title: 'Surveys', 
            SurveysList: surveysList,
            profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

//Template page
module.exports.displayTemplatesPage = async (req, res, next)=>{
    try {
        res.render('surveys/templates', 
        {title: 'Choose a Survey Template',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};





//multiple choice
module.exports.displayAddMultipleChoicePage = async (req, res, next)=>{
    try {
        res.render('surveys/add_multiple_choice', 
        {title: 'Add a Survey',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddMultipleChoicePage = async (req, res, next) => {
    let newSurveys = new Surveys({
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

         //survey questions
         "q1": req.body.q1,
         "a1Option1": req.body.a1Option1,
         "a1Option2": req.body.a1Option2,
         "a1Option3": req.body.a1Option3,
         "a1Option4": req.body.a1Option4,

         "q2": req.body.q2,
         "a2Option1": req.body.a2Option1,
         "a2Option2": req.body.a2Option2,
         "a2Option3": req.body.a2Option3,
         "a2Option4": req.body.a2Option4,

         "q3": req.body.q3,
         "a3Option1": req.body.a3Option1,
         "a3Option2": req.body.a3Option2,
         "a3Option3": req.body.a3Option3,
         "a3Option4": req.body.a3Option4,
 
         "q4": req.body.q4,
         "a4Option1": req.body.a4Option1,
         "a4Option2": req.body.a4Option2,
         "a4Option3": req.body.a4Option3,
         "a4Option4": req.body.a4Option4,
 
         "q5": req.body.q5,
         "a5Option1": req.body.a5Option1,
         "a5Option2": req.body.a5Option2,
         "a5Option3": req.body.a5Option3,
         "a5Option4": req.body.a5Option4
    });

    try {
        await newSurveys.save();
        res.redirect('/surveys-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditMultipleChoicePage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveysToEdit = await Surveys.findById(id);
        res.render('surveys/edit_multiple_choice', 
        {title: 'Edit Survey', 
        surveys: surveysToEdit,
        profileName: req.user ? req.user.profileName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditMultipleChoicePage = async (req, res, next) => {
    let id = req.params.id;

    let updatedSurveys = {
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

        //survey questions
        "q1": req.body.q1,
        "a1Option1": req.body.a1Option1,
        "a1Option2": req.body.a1Option2,
        "a1Option3": req.body.a1Option3,
        "a1Option4": req.body.a1Option4,

        "q2": req.body.q2,
        "a2Option1": req.body.a2Option1,
        "a2Option2": req.body.a2Option2,
        "a2Option3": req.body.a2Option3,
        "a2Option4": req.body.a2Option4,

        "q3": req.body.q3,
        "a3Option1": req.body.a3Option1,
        "a3Option2": req.body.a3Option2,
        "a3Option3": req.body.a3Option3,
        "a3Option4": req.body.a3Option4,

        "q4": req.body.q4,
        "a4Option1": req.body.a4Option1,
        "a4Option2": req.body.a4Option2,
        "a4Option3": req.body.a4Option3,
        "a4Option4": req.body.a4Option4,

        "q5": req.body.q5,
        "a5Option1": req.body.a5Option1,
        "a5Option2": req.body.a5Option2,
        "a5Option3": req.body.a5Option3,
        "a5Option4": req.body.a5Option4
    };

    try {
        await Surveys.updateOne({_id: id}, updatedSurveys);
        res.redirect('/surveys-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Surveys.findByIdAndRemove(id);
        res.redirect('/surveys-list');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};




//dropdown options
module.exports.displayDropdownOptionsPage = async (req, res, next)=>{
    try {
        res.render('surveys/add_dropdown_options', 
        {title: 'Add a Survey',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddDropdownOptionsPage = async (req, res, next) => {
    let newSurveys = new Surveys({
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,


         "q1Dropdown": req.body.q1Dropdown,
         "q1Option": req.body.q1Option,
         "q1DropdownOption1": req.body.q1DropdownOption1,
         "q1DropdownOption2": req.body.q1DropdownOption2,

         "q2Dropdown": req.body.q2Dropdown,
         "q2Option": req.body.q2Option,
         "q2DropdownOption1": req.body.q2DropdownOption1,
         "q2DropdownOption2": req.body.q2DropdownOption2,
 
         "q3Dropdown": req.body.q3Dropdown,
         "q3Option": req.body.q3Option,
         "q3DropdownOption1": req.body.q3DropdownOption1,
         "q3DropdownOption2": req.body.q3DropdownOption2,
 
         "q4Dropdown": req.body.q4Dropdown,
         "q4Option": req.body.q4Option,
         "q4DropdownOption1": req.body.q4DropdownOption1,
         "q4DropdownOption2": req.body.q4DropdownOption2,

         "q5Dropdown": req.body.q5Dropdown,
         "q5Option": req.body.q5Option,
         "q5DropdownOption1": req.body.q5DropdownOption1,
         "q5DropdownOption2": req.body.q5DropdownOption2

    });

    try {
        await newSurveys.save();
        res.redirect('/surveys-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
module.exports.displayEditDropdownOptionsPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveysToEdit = await Surveys.findById(id);
        res.render('surveys/edit_dropdown_options', 
        {title: 'Edit Survey', 
        surveys: surveysToEdit,
        profileName: req.user ? req.user.profileName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditDropdownOptionsPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedSurveys = {
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

        //survey questions
        
        "q1Dropdown": req.body.q1Dropdown,
        "q1Option": req.body.q1Option,
        "q1DropdownOption1": req.body.q1DropdownOption1,
        "q1DropdownOption2": req.body.q1DropdownOption2,

        "q2Dropdown": req.body.q2Dropdown,
        "q2Option": req.body.q2Option,
        "q2DropdownOption1": req.body.q2DropdownOption1,
        "q2DropdownOption2": req.body.q2DropdownOption2,

        "q3Dropdown": req.body.q3Dropdown,
        "q3Option": req.body.q3Option,
        "q3DropdownOption1": req.body.q3DropdownOption1,
        "q3DropdownOption2": req.body.q3DropdownOption2,

        "q4Dropdown": req.body.q4Dropdown,
        "q4Option": req.body.q4Option,
        "q4DropdownOption1": req.body.q4DropdownOption1,
        "q4DropdownOption2": req.body.q4DropdownOption2,

        "q5Dropdown": req.body.q5Dropdown,
        "q5Option": req.body.q5Option,
        "q5DropdownOption1": req.body.q5DropdownOption1,
        "q5DropdownOption2": req.body.q5DropdownOption2
    };

    try {
        await Surveys.updateOne({_id: id}, updatedSurveys);
        res.redirect('/surveys-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};





//dropdown options
module.exports.displayShortAnswersPage = async (req, res, next)=>{
    try {
        res.render('surveys/add_short_answers', 
        {title: 'Add a Survey',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddShortAnswersPage = async (req, res, next) => {
    let newSurveys = new Surveys({
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

        "q1ShortAnswer": req.body.q1ShortAnswer,
        "a1ShortAnswer": req.body.a1ShortAnswer,

        "q2ShortAnswer": req.body.q2ShortAnswer,
        "a2ShortAnswer": req.body.a2ShortAnswer,
         
        "q3ShortAnswer": req.body.q3ShortAnswer,
        "a3ShortAnswer": req.body.a3ShortAnswer,

        "q4ShortAnswer": req.body.q4ShortAnswer,
        "a4ShortAnswer": req.body.a4ShortAnswer,

        "q5ShortAnswer": req.body.q5ShortAnswer,
        "a5ShortAnswer": req.body.a5ShortAnswer

    });

    try {
        await newSurveys.save();
        res.redirect('/surveys-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
module.exports.displayEditShortAnswersPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveysToEdit = await Surveys.findById(id);
        res.render('surveys/edit_short_answers', 
        {title: 'Edit Survey', 
        surveys: surveysToEdit,
        profileName: req.user ? req.user.profileName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditShortAnswersPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedSurveys = {
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

        //survey questions
        
        "q1ShortAnswer": req.body.q1ShortAnswer,
        "a1ShortAnswer": req.body.a1ShortAnswer,

        "q2ShortAnswer": req.body.q2ShortAnswer,
        "a2ShortAnswer": req.body.a2ShortAnswer,
         
        "q3ShortAnswer": req.body.q3ShortAnswer,
        "a3ShortAnswer": req.body.a3ShortAnswer,

        "q4ShortAnswer": req.body.q4ShortAnswer,
        "a4ShortAnswer": req.body.a4ShortAnswer,

        "q5ShortAnswer": req.body.q5ShortAnswer,
        "a5ShortAnswer": req.body.a5ShortAnswer
    };

    try {
        await Surveys.updateOne({_id: id}, updatedSurveys);
        res.redirect('/surveys-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};





//Radio buttons
module.exports.displayRadioButtonsPage = async (req, res, next)=>{
    try {
        res.render('surveys/add_radio', 
        {title: 'Add a Survey',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddRadioButtonsPage = async (req, res, next) => {
    let newSurveys = new Surveys({
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,
        
        "q1RadioButton": req.body.q1RadioButton,
        "a1RadioButton1": req.body.a1RadioButton1,
        "a1RadioButtonText1": req.body.a1RadioButtonText1,
        "a1RadioButtonText2": req.body.a1RadioButtonText2,
        "a1RadioButtonText3": req.body.a1RadioButtonText3,

        "q2RadioButton": req.body.q2RadioButton,
        "a2RadioButton1": req.body.a2RadioButton1,
        "a2RadioButtonText1": req.body.a2RadioButtonText1,
        "a2RadioButtonText2": req.body.a2RadioButtonText2,
        "a2RadioButtonText3": req.body.a2RadioButtonText3,

        
        "q3RadioButton": req.body.q3RadioButton,
        "a3RadioButton1": req.body.a3RadioButton1,
        "a3RadioButtonText1": req.body.a3RadioButtonText1,
        "a3RadioButtonText2": req.body.a3RadioButtonText2,
        "a3RadioButtonText3": req.body.a3RadioButtonText3,

        "q4RadioButton": req.body.q4RadioButton,
        "a4RadioButton1": req.body.a4RadioButton1,
        "a4RadioButtonText1": req.body.a4RadioButtonText1,
        "a4RadioButtonText2": req.body.a4RadioButtonText2,
        "a4RadioButtonText3": req.body.a4RadioButtonText3,

        "q5RadioButton": req.body.q5RadioButton,
        "a5RadioButton1": req.body.a5RadioButton1,
        "a5RadioButtonText1": req.body.a5RadioButtonText1,
        "a5RadioButtonText2": req.body.a5RadioButtonText2,
        "a5RadioButtonText3": req.body.a5RadioButtonText3
    });

    try {
        await newSurveys.save();
        res.redirect('/surveys-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
module.exports.displayEditRadioButtonsPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveysToEdit = await Surveys.findById(id);
        res.render('surveys/edit_radio', 
        {title: 'Edit Survey', 
        surveys: surveysToEdit,
        profileName: req.user ? req.user.profileName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditRadioButtonsPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedSurveys = {
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "email": req.body.email,
        "surveyType": req.body.surveyType,

        //survey questions
    
        "q1RadioButton": req.body.q1RadioButton,
        "a1RadioButton1": req.body.a1RadioButton1,
        "a1RadioButtonText1": req.body.a1RadioButtonText1,
        "a1RadioButtonText2": req.body.a1RadioButtonText2,
        "a1RadioButtonText3": req.body.a1RadioButtonText3,

        "q2RadioButton": req.body.q2RadioButton,
        "a2RadioButton1": req.body.a2RadioButton1,
        "a2RadioButtonText1": req.body.a2RadioButtonText1,
        "a2RadioButtonText2": req.body.a2RadioButtonText2,
        "a2RadioButtonText3": req.body.a2RadioButtonText3,

        
        "q3RadioButton": req.body.q3RadioButton,
        "a3RadioButton1": req.body.a3RadioButton1,
        "a3RadioButtonText1": req.body.a3RadioButtonText1,
        "a3RadioButtonText2": req.body.a3RadioButtonText2,
        "a3RadioButtonText3": req.body.a3RadioButtonText3,

        "q4RadioButton": req.body.q4RadioButton,
        "a4RadioButton1": req.body.a4RadioButton1,
        "a4RadioButtonText1": req.body.a4RadioButtonText1,
        "a4RadioButtonText2": req.body.a4RadioButtonText2,
        "a4RadioButtonText3": req.body.a4RadioButtonText3,

        "q5RadioButton": req.body.q5RadioButton,
        "a5RadioButton1": req.body.a5RadioButton1,
        "a5RadioButtonText1": req.body.a5RadioButtonText1,
        "a5RadioButtonText2": req.body.a5RadioButtonText2,
        "a5RadioButtonText3": req.body.a5RadioButtonText3
    };

    try {
        await Surveys.updateOne({_id: id}, updatedSurveys);
        res.redirect('/surveys-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};