/*
  File name: index.js
  Project Part 2
  Group 1
  Due: Jul 16, 2023
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// creating the User Model instance here
let userModel = require('../models/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', profileName: req.user ? req.user.profileName : '' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About', profileName: req.user ? req.user.profileName : '' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact', profileName: req.user ? req.user.profileName : '' });
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            profileName: req.user ? req.user.profileName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //if there is server errer
        if(err)
        {
            return next(err);
        }
        // if there is a user login err
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //if server err
            if(err)
            {
                return next(err);
            }
            return res.redirect('/surveys-list');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // checking the user is already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: "Register",
            messages: req.flash('registerMessage'),
            profileName: req.user ? req.user.profileName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    //initializing user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        profileName: req.body.profileName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log(err);
            console.log("Error: Inserting New User");
            if(err.name == 'UserExistsError')
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!');
            }
            return res.render('auth/register',
            {
                title: "Register",
                messages: req.flash('registerMessage'),
                profileName: req.user ? req.user.profileName : ''
            });
        }
        else
        {
            //if the registration is successful
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/surveys-list')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout((err) => {
        if (err)
        {
            //handling the error 
            console.log(err);
            return next(err);
        }
        return res.redirect('/');
    });
}