const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// GET localhost:3000/flight/new
router.get('/new', flightsCtrl.new);
// POST localhost:3000/flights
router.post('/', flightsCtrl.create);
// // GET localhost:3000/flights
router.get('/', flightsCtrl.index);

module.exports = router;
