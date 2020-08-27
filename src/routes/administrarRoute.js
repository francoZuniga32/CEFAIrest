const administrarRoute = require("express").Router();
const administrarControler = require('../controllers/administrarControler');
const carrerasControler = require('../controllers/carreraCotroller');
const materiaController = require('../controllers/materiaCotroller');
const correlativaController = require('../controllers/correlativaController');
const dictaController = require('../controllers/dictaController');

//midelware
administrarRoute.use('/', require('../middleware/user').midelware);
//rutas principales de administracion
administrarRoute.get('/', administrarControler.home);
administrarRoute.get('/carreras', administrarControler.carreras);
administrarRoute.get('/materias', administrarControler.materias);
administrarRoute.get('/correlativas', administrarControler.correlativas);
administrarRoute.get('/horarios', administrarControler.horarios);

//rutas consultas iniciales
administrarRoute.get('/carreras/carreras', carrerasControler.all);
administrarRoute.get('/materias/materias', materiaController.complete);
administrarRoute.get('/correlativas/correlativas', correlativaController.complete);

//rutas filtros
administrarRoute.get('/materias/materias/carrera/:idcarrera', materiaController.carrera);

//horarios
administrarRoute.get('/horarios/horarios/carreraaniocuatrimestre/:idcarrera/:anio/:cuatrimestre', dictaController.anioCarrera);
administrarRoute.get('/horarios/horario/edit/:idmateria/:dia/:modulo/:horainicio', dictaController.renderEdit);

administrarRoute.post('/horarios/horario/edit/', dictaController.edit);
module.exports = administrarRoute;
