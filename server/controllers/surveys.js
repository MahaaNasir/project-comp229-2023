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

module.exports.displayAddPage = async (req, res, next)=>{
    try {
        res.render('surveys/add', 
        {title: 'Add a Survey',
        profileName: req.user ? req.user.profileName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddPage = async (req, res, next) => {
    let newSurveys = new Surveys({
        "name": req.body.name,
        "phone": req.body.phone,
        "surveyName": req.body.surveyName,
        "email": req.body.email,

         //survey questions
         "q1": req.body.q1,
         "a1Option1": req.body.a1Option1,
         "a1Option2": req.body.a1Option2,
 
         "q2": req.body.q2,
         "a2Option1": req.body.a2Option1,
         "a2Option2": req.body.a2Option2,
 
         "q3": req.body.q3,
         "a3Option1": req.body.a3Option1,
         "a3Option2": req.body.a3Option2,
 
         "q4": req.body.q4,
         "a4Option1": req.body.a4Option1,
         "a4Option2": req.body.a4Option2,
 
         "q5": req.body.q5,
         "a5Option1": req.body.a5Option1,
         "a5Option2": req.body.a5Option2
    });

    try {
        await newSurveys.save();
        res.redirect('/surveys-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let surveysToEdit = await Surveys.findById(id);
        res.render('surveys/edit', 
        {title: 'Edit Survey', 
        surveys: surveysToEdit,
        profileName: req.user ? req.user.profileName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedSurveys = {
        "name": req.body.name,
        "surveyName": req.body.surveyName,
        "phone": req.body.phone,
        "email": req.body.email,

        //survey questions
        "q1": req.body.q1,
        "a1Option1": req.body.a1Option1,
        "a1Option2": req.body.a1Option2,

        "q2": req.body.q2,
        "a2Option1": req.body.a2Option1,
        "a2Option2": req.body.a2Option2,

        "q3": req.body.q3,
        "a3Option1": req.body.a3Option1,
        "a3Option2": req.body.a3Option2,

        "q4": req.body.q4,
        "a4Option1": req.body.a4Option1,
        "a4Option2": req.body.a4Option2,

        "q5": req.body.q5,
        "a5Option1": req.body.a5Option1,
        "a5Option2": req.body.a5Option2
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