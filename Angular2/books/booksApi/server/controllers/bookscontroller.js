let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Book = sequelize.import("../models/books");


//up above are called variables


/****Books ******* */
router.post("/make", function (req, res) { //ok to receive a post request. On post you can create or send data to server
    let nameOfBook = req.body.nameOfBook;
    let author = req.body.author;
    let genre = req.body.genre;
    let pubYear = req.body.pubYear;
    let rating = req.body.rating;
    
    //console.log(req.body)
    Book.create({
        nameOfBook: nameOfBook,
        author: author,
        genre: genre,
        pubYear: pubYear,
        rating: rating
    }).then(
        function createSuccess(book) {
            res.json({
                created: book,
                message: "Hello, there!",
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

router.get("/totallybuggin", function (req, res) { //this is where I would allow to all users see the movies that another user uploaded. It's open. On "get" we can read the movies
console.log(req.user.dataValues.id)
console.log("kjhgfdcvbnkjuytrfdcvbnmkJHGFDSDFGHJKJHGFDFGHJKJHGFRERTYUIJUHYGFDFGHJKLKJHG")
Book.findAll()
    .then( //.then passes any info found to the 1st function if found or 2nd function if there is an error
        function getSuccess(sweeteightiesflixs) {  //if it can be found in the database then its a success
            res.json({
                book: sweeteightiesflixs,
                message: "Hello, there!",
            })
        },
        function createError(err) { //will return with an error if it cant be found in the database
            res.send(500, err.message)
        }
    )
})

router.put("/rollingwiththehomies/:id", function (req, res) {
    let input = req.params.id;
    let nameOfBook = req.body.book.nameOfBook;
    let author = req.body.book.author;
    let genre = req.body.book.genre;
    let pubYear= req.body.book.pubYear;
    let rating = req.body.book.rating;
    //console.log(req.body)
    Book.update({
        nameOfBook: nameOfBook,
        author: author,
        genre: genre,
        pubYear: pubYear,
        rating: rating
    }, { where: { id: input }}) //update the movie with the up above info which id is = to the input
    .then(
        function createSuccess(book) {
            res.json({
                updated: book,
                message: "Hello, there!",
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

router.delete("/barfout/:id", function (req, res) {
    let input = req.params.id;
    Book.destroy({ where: { id: input }}) //delete the movie with the up above info which id is = to the input
    .then(
        function createSuccess(movie) {
            res.json({
                updated: book,
                message: "Hello, there!",
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

module.exports = router