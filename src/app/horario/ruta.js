const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/', controlador.all);
ruta.get('/carrera/:carrera/anio/:anio', controlador.anio);
ruta.get('/materia/:id', controlador.materia);

module.exports = ruta;
