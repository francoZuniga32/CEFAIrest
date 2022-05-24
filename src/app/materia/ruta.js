const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/',controlador.all);
ruta.get('/carrera/:id',controlador.carrera.all);
ruta.get('/carrera/anio/:id/:anio',controlador.carrera.anio);
ruta.get('/correlativa/:id',controlador.correlativa);


module.exports = ruta;
