const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movie_list', (req, res, next) => {
  res.render('movie_list');
});



module.exports = router;
