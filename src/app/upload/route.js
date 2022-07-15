const route = require('express').Router();
const controlador = require('./controlador');

route.post('/carnet/perfil', controlador.carnet_perfil);

module.exports = route;