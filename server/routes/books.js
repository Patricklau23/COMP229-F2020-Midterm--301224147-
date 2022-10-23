/*File name:books.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 23 Oct 2022*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, book) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/', {
        title: 'Books',
        //books declare from here
        books: book,
        
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    res.render('books/add', {title: 'Add Book', books: ''});
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    let newBook = books({
      "Title": req.body.Title, 
      "Desciption": req.body.Desciption, 
      "Price": req.body.Price, 
      "Author": req.body.Author, 
      "Genre": req.body.Genre
  });


book.create(newBook, (err, book) =>{
  if(err)
  {
      console.log(err);
      res.end(err);
  }
  else
  {
      // refresh the book list
      res.redirect('/books');
  }
});
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    let id = req.params.id;

    book.findById(id, (err, bookToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit
            res.render('books/edit', {title: 'Edit Book', books: bookToEdit})
        }
      })
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    let id = req.params.id;

    let updatedBook = books({
        "_id": id,
        "Title": req.body.Title, 
        "Desciption": req.body.Description, 
        "Price": req.body.Price, 
        "Author": req.body.Author, 
        "Genre": req.body.Genre
    });

    book.updateOne({_id: id}, updatedBook, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the book list
            res.redirect('/books');
        }
      })
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    let id = req.params.id;

    book.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the book list
            res.redirect('/books');
        }
    })
});


module.exports = router;
