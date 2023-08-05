/*
  File name: surveys.js
  Project
  Group 1
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

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', surveysController.performDelete);

// Get Route to templates page - CREATE Operation
router.get('/templates', surveysController.displayTemplatesPage);



// Multiple Choice page
// Get Route to Add page - CREATE Operation
router.get('/add_multiple_choice', surveysController.displayAddMultipleChoicePage);

// Post Route to process  Add page - CREATE Operation
router.post('/add_multiple_choice', surveysController.processAddMultipleChoicePage);

// Get Route to display Edit page - UPDATE Operation
router.get('/edit_multiple_choice/:id', surveysController.displayEditMultipleChoicePage);

// Post Route to process Edit page - UPDATE Operation
router.post('/edit_multiple_choice/:id', surveysController.processEditMultipleChoicePage);



// Dropdown Options page
// Get Route to Add Dropdown page - CREATE Operation
router.get('/add_dropdown_options', surveysController.displayDropdownOptionsPage);

// Post Route to process Dropdown  page - CREATE Operation
router.post('/add_dropdown_options', surveysController.processAddDropdownOptionsPage);

// Get Route to Edit Dropdown page - CREATE Operation
router.get('/edit_dropdown_options/:id', surveysController.displayEditDropdownOptionsPage);

// Post Route to process Edit Dropdown page - CREATE Operation
router.post('/edit_dropdown_options/:id', surveysController.processEditDropdownOptionsPage);



// Short Answer page
// Get Route to Add Dropdown page - CREATE Operation
router.get('/add_short_answers', surveysController.displayShortAnswersPage);

// Post Route to process Dropdown  page - CREATE Operation
router.post('/add_short_answers', surveysController.processAddShortAnswersPage);

// Get Route to Edit Dropdown page - CREATE Operation
router.get('/edit_short_answers/:id', surveysController.displayEditShortAnswersPage);

// Post Route to process Edit Dropdown page - CREATE Operation
router.post('/edit_short_answers/:id', surveysController.processEditShortAnswersPage);




// Radio Buttons page
// Get Route to Add Dropdown page - CREATE Operation
router.get('/add_radio', surveysController.displayRadioButtonsPage);

// Post Route to process Dropdown page - CREATE Operation
router.post('/add_radio', surveysController.processAddRadioButtonsPage);

// Get Route to Edit Dropdown page - CREATE Operation
router.get('/edit_radio/:id', surveysController.displayEditRadioButtonsPage);

// Post Route to process Edit Dropdown page - CREATE Operation
router.post('/edit_radio/:id', surveysController.processEditRadioButtonsPage);


module.exports = router;