const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/', controlador.all);

module.exports = ruta;