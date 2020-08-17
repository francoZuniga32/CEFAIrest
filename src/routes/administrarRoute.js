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
//rutas consultas iniciales
administrarRoute.get('/carreras/carreras', carrerasControler.all);
administrarRoute.get('/materias/materias', materiaController.complete);
administrarRoute.get('/correlativas/correlativas', correlativaController.complete);
administrarRoute.get('/horarios/horarios', dictaController.administrar);
//rutas filtros
administrarRoute.get('/materias/materias/carrera/:idcarrera', materiaController.carrera);

administrarRoute.get('/horarios/horarios/carrera/:idcarrera', dictaController.carrera);
administrarRoute.get('/horarios/horarios/dia/:dia', dictaController.dia);
administrarRoute.get('/horarios/horarios/carreradia/:carrera/:dia', dictaController.diaCarrera);
module.exports = administrarRoute;
