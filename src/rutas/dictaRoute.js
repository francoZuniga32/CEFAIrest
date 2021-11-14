const express = require('express');
const dictaController = require('../controladores/dictaController');

const dictaRoute = express.Router();

dictaRoute.get('/dicta',dictaController.all);

dictaRoute.get('/dicta/idmateria/:idmateria',dictaController.idmateria);

dictaRoute.get('/dicta/dia/:dia',dictaController.dia);

dictaRoute.get('/dicta/estado/:estado',dictaController.estado);

dictaRoute.get('/dicta/cuatrimestre/:cuatrimestre',dictaController.cuatrimestre);

dictaRoute.get('/dicta/hora/:hora',dictaController.hora);

dictaRoute.get('/dicta/horamenor/:hora',dictaController.horamenor);

dictaRoute.get('/dicta/horamayor/:hora',dictaController.horamayor);

module.exports = dictaRoute