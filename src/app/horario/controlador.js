const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../databases/index');

const Horarios = require('../../databases/models/horarios')(sequelize,DataTypes);
const Materia = require('../../databases/models/materia')(sequelize,DataTypes);

Horarios.hasOne(Materia,{foreignKey: 'id'});

controlador.all = async (req,res)=> {
    res.send(await Horarios.findAll({
        include:[{
            model: Materia
        }]
    }))
}

module.exports = controlador;