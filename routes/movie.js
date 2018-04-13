
const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

router.get('/', (req, res, next) => {
  res.render('movie');
});



router.post("/", (req, res) => {
  const { title, director, stars, image, description, showtimes } = req.body;

  const movie = new Movie({ title, director, stars, image, description, showtimes });
  movie.save().then(movie => {
    console.log("Pelis");
    console.log(movie);
    res.redirect("/movie",{movie});


    
  });
});

router.get("/movie_list", (req, res) => {
  Movie.find().then(movie => {
    debug(movie.title);
    res.render("movie_list", { movie });
  });
});



module.exports = router;