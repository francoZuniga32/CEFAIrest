const usuarioRouter = require('express').Router();
const usuarioControler = require('../controllers/usuarioControler');

usuarioRouter.get('/usuario/:usuario/:contrasenia', usuarioControler.validar);

module.exports = usuarioRouter;