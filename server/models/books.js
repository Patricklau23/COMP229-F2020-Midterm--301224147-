/*File name:book.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 23 Oct 2022*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
