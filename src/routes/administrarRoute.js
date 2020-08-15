const administrarRoute = require("express").Router();
const administrarControler = require('../controllers/administrarControler');
const carrerasControler = require('../controllers/carreraCotroller');
const materiaController = require('../controllers/materiaCotroller');
const correlativaController = require('../controllers/correlativaController');
const dictaController = require('../controllers/dictaController');

administrarRoute.use('/', require('../middleware/user').midelware);
administrarRoute.get('/', administrarControler.home);
administrarRoute.get('/carreras', administrarControler.carreras);
administrarRoute.get('/materias', administrarControler.materias);
administrarRoute.get('/correlativas', administrarControler.correlativas);
administrarRoute.get('/horarios', administrarControler.horarios);

administrarRoute.get('/carreras/carreras', carrerasControler.all);
administrarRoute.get('/materias/materias', materiaController.complete);
administrarRoute.get('/correlativas/correlativas', correlativaController.all);
administrarRoute.get('/horarios/horarios', dictaController.all);
module.exports = administrarRoute;
