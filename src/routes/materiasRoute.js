const express = require('express');
const materiaController = require('../controllers/materiaCotroller');

const materiaRoute = express.Router();

materiaRoute.get('/materia', materiaController.all);
materiaRoute.get('/materia/id/:id', materiaController.id);
materiaRoute.get('/materia/nombre/:nombre', materiaController.nombre);
materiaRoute.get('/materia/anio/:anio', materiaController.anio);
materiaRoute.get('/materia/cuatrimestre/:cuatrimestre', materiaController.cuatrimestre);
materiaRoute.get('/materia/cuatrimestreanio/:cuatrimestre/:anio', materiaController.cuatrimestreanio);
materiaRoute.get('/materia/carreraanio/:idcarrera/:anio', materiaController.carreraAnio);



module.exports = materiaRoute;