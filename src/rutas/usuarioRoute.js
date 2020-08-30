const usuarioRouter = require('express').Router();
const usuarioControler = require('../controladores/usuarioControler');

usuarioRouter.get('/usuario/:usuario/:contrasenia', usuarioControler.validar);

module.exports = usuarioRouter;