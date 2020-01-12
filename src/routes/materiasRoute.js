const express = require('express');
const materiaController = require('../controllers/materiaCotroller');

const materiaRoute = express.Router();

materiaRoute.get('/materia', materiaController.all);

materiaRoute.get('/materia/id/:id', materiaController.id);

materiaRoute.get('/materia/nombre/:nombre', materiaController.nombre);

materiaRoute.get('/materia/ano/:ano', materiaController.ano);

materiaRoute.get('/materia/cuatrimestre/:cuatrimestre', materiaController.cuatrimestre);

materiaRoute.get('/materia/cuatrimestreano/:cuatrimestre/:ano', materiaController.cuatrimestreano);

module.exports = materiaRoute;