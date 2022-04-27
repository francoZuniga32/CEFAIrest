const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/',controlador.all);
ruta.get('/:id',controlador.id);

ruta.post('/', controlador.create);

ruta.delete('/',controlador.delete);

module.exports = ruta;
