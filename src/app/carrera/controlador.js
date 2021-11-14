const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../databases/index');

const Carrera = require('../../databases/models/carrera')(sequelize,DataTypes);

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