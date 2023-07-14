/*
  File name: surveys.js
  Project Part 2
  Group 1
  Due: Jul 16, 2023
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the surveys Model
let Surveys = require('../models/surveys');

let surveysController = require('../controllers/surveys')

// a helper function for the guard purposes
function requireAuth(req, res, next)
{
    // checking if the user is logged in now
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route to surveys List page - READ Operation
router.get('/', surveysController.displaySurveysList);

// Get Route to Add page - CREATE Operation
router.get('/add', surveysController.displayAddPage);

// Post Route to process  Add page - CREATE Operation
router.post('/add', surveysController.processAddPage);

// Get Route to display Edit page - UPDATE Operation
router.get('/edit/:id', surveysController.displayEditPage);

// Post Route to process Edit page - UPDATE Operation
router.post('/edit/:id', surveysController.processEditPage);

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', surveysController.performDelete);

module.exports = router;