/*File name:index.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 23 Oct 2022*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});


/* GET Book page. wildcard */
router.get('/books/index', (req, res, next) => {
  res.render('books/index', {
    title: 'Book',
    books: ''
   });
});

module.exports = router;

