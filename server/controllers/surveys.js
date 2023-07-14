/*
  Assignment 2
  File name: surveys.js
  Student Name: Maha Nasir
  Student ID: 301266305
  Date: 18 June 2023
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
        "email": req.body.email
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
        "phone": req.body.phone,
        "email": req.body.email
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