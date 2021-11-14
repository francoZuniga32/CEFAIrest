const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/',controlador.all);
ruta.get('/:id',controlador.id)

module.exports = ruta;