const sreRouter = require('express').Router();
const sreController = require('../controllers/sreController');

sreRouter.get('/', sreController.jsonMaterias);

module.exports =sreRouter;