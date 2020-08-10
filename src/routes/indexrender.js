const indexRouter = require('express').Router();
const indexControler = require('../controllers/indexControler');
const correlativasControler = require('../controllers/correlativaController');

indexRouter.get('/', indexControler.render);
indexRouter.get('/horarios', indexControler.horarios);
indexRouter.get('/correlativas', indexControler.correlativas);
indexRouter.get('/correlativas/consulta/:idcarrera/:idmateria', correlativasControler.correlativamateria);

module.exports = indexRouter;