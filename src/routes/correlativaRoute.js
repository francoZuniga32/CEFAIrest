const express = require('express');
const correlativaController = require('../controllers/correlativaController');

const correlativaRoute = express.Router();

correlativaRoute.get('/correlativa', correlativaController.all);
correlativaRoute.get('/correlativa/:idcarrera/:idmateria', correlativaController.correlativamateria);
correlativaRoute.get('/correlativa/necesaria/:necesaria', correlativaController.necesaria);
correlativaRoute.get('/correlativa/disponible/:disponible', correlativaController.disponible);
correlativaRoute.get('/correlativa/carrera/:idcarrera', correlativaController.carrera);
correlativaRoute.get('/correlativa/carrera/disponible/:disponible/:idcarrera', correlativaController.carreradisponible);
correlativaRoute.get('/correlativa/carrera/necesaria/:necesaria/:idcarrera', correlativaController.carreranecesaria);
correlativaRoute.get('/correlativa/graf/', correlativaController.graf);

module.exports = correlativaRoute;