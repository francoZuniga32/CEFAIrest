const indexRouter = require('express').Router();
const indexControler = require('../controladores/indexControler');
const correlativasControler = require('../controladores/correlativaController');
const dictaControler = require('../controladores/dictaController');
const usuarioControler = require('../controladores/usuarioControler');
const materiaController = require('../controladores/materiaCotroller');

indexRouter.get('/',indexControler.render);
indexRouter.get('/horarios',indexControler.horarios);
indexRouter.get('/correlativas',indexControler.correlativas);
indexRouter.get('/horarios/misemana',indexControler.misemana);
indexRouter.get('/horarios/horarios/materia/:idmateria/:cuatrimestre',dictaControler.materiaCuatrimestre)
indexRouter.get('/correlativas/consulta/:idcarrera/:idmateria',correlativasControler.correlativamateria);
indexRouter.get('/horarios/consulta/:dia/:hora/:cuatrimestre',dictaControler.diaHora);
indexRouter.get('/login',indexControler.login);
indexRouter.post('/loginvalidate',usuarioControler.validarLogin);


module.exports = indexRouter;