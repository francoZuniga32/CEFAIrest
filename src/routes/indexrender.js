const indexRouter = require('express').Router();
const indexControler = require('../controllers/indexControler');
const correlativasControler = require('../controllers/correlativaController');
const dictaControler = require('../controllers/dictaController');

indexRouter.get('/', indexControler.render);
indexRouter.get('/horarios', indexControler.horarios);
indexRouter.get('/correlativas', indexControler.correlativas);
indexRouter.get('/correlativas/consulta/:idcarrera/:idmateria', correlativasControler.correlativamateria);
indexRouter.get('/horarios/consulta/:dia/:hora', dictaControler.diaHora);

module.exports = indexRouter;