const express = require('express');
const finalRoute = express.Router();
const finalController = require('../controllers/finalController');

finalRoute.get('/final', finalController.all);
finalRoute.get('/final/necesaria/:necesaria', finalController.necesaria);
finalRoute.get('/final/disponible/:disponible', finalController.disponible);

module.exports = finalRoute;