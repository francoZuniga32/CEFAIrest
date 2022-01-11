const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');

const Horarios = require('../../db/models/horarios')(sequelize,DataTypes);
const Materia = require('../../db/models/materia')(sequelize,DataTypes);

Horarios.hasOne(Materia,{foreignKey: 'id'});

controlador.all = async (req,res)=> {
    res.send(await Horarios.findAll({
        include:[{
            model: Materia
        }]
    }))
}

module.exports = controlador;