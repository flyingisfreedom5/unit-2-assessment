var express = require('express');
var router = express.Router();
const cars = require('../data/cars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cars });
});

router.post('/', function(req, res) {
  // Add a car object to the cars array
  cars.push({
    make: req.body.make,
    model: req.body.model,
    fullTank: true
  });
  // Alternative way to add the car object
  // req.body.fullTank = true;
  // cars.push(req.body);
  // If we changed data - always redirect
  res.redirect('/');
});

router.post('/cars/:idx', function(req, res) {
  cars.splice(req.params.idx, 1);
  res.redirect('/');
});

module.exports = router;