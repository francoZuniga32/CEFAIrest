const indexRouter = require('express').Router();
const indexControler = require('../controllers/indexControler');
const correlativasControler = require('../controllers/correlativaController');
const dictaControler = require('../controllers/dictaController');
const usuarioControler = require('../controllers/usuarioControler');

indexRouter.get('/', indexControler.render);
indexRouter.get('/horarios', indexControler.horarios);
indexRouter.get('/correlativas', indexControler.correlativas);
indexRouter.get('/horarios/misemana', indexControler.misemana);
indexRouter.get('/horarios/horarios/materia/:idmateria', dictaControler.idmateria)
indexRouter.get('/correlativas/consulta/:idcarrera/:idmateria', correlativasControler.correlativamateria);
indexRouter.get('/horarios/consulta/:dia/:hora', dictaControler.diaHora);
indexRouter.get('/login', indexControler.login);
indexRouter.post('/loginvalidate', usuarioControler.validarLogin);

module.exports = indexRouter;