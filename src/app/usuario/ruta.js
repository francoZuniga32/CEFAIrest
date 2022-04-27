const ruta = require('express').Router();
const controlador = require("./controlador");

ruta.post('/auth', controlador.auth);
ruta.post('/create', controlador.create);
ruta.put('/', controlador.change);
ruta.delete('/', controlador.delete);

module.exports = ruta;
