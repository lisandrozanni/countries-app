const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.get('/countries', validationMiddleware.validateQueryLength, countriesController.searchCountries);

module.exports = router;
