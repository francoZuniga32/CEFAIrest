const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');

const Carrera = require('../../db/models/carrera')(sequelize,DataTypes);

controlador.all = async (req,res)=> {
    res.send(await Carrera.findAll());
}

controlador.id = async (req,res)=> {
    res.send(await Carrera.findByPk(req.params.id));
}

controlador.put = async (req,res)=> {
    
}

controlador.delete = async (req,res)=> {
    
}

module.exports = controlador;