
const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

router.get('/', (req, res, next) => {
  
  Movie.find().then(movie =>{
    res.render('movie', {movie});
  })
});



router.get("/:id", (req, res) => {

  Movie.findById(req.params.id).then(movie => {

    res.render("movie_list", { movie });
  });
});



module.exports = router;