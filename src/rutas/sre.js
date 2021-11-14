const sreRouter = require('express').Router();
const sreController = require('../controladores/sreController');

sreRouter.get('/',sreController.jsonMaterias);

module.exports =sreRouter;