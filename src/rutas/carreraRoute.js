const express = require('express');
const carreraController = require('../controladores/carreraCotroller');

const carreraRoute = express.Router();

//peticiones get

carreraRoute.get('/carrera', carreraController.all);

carreraRoute.get('/carrera/id/:id', carreraController.id);

carreraRoute.get('/carrera/nombre/:nombre', carreraController.nombre);

carreraRoute.get('/carrera/plan/:plan', carreraController.plan);

carreraRoute.get('/carrera/duracion/:duracion', carreraController.duracion);

carreraRoute.get('/carrera/duracionmenor/:duracion', carreraController.duracionmenor);

carreraRoute.get('/carrera/duracionmayor/:duracion', carreraController.duracionmayor);

carreraRoute.get('/carrera/buscar/:buscar', carreraController.buscar);

//peticiones 

module.exports = carreraRoute;