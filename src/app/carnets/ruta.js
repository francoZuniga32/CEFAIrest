const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/', controlador.all);
ruta.get('/verificar/', controlador.tiket_consulta);
ruta.post('/', controlador.create);

module.exports = ruta;