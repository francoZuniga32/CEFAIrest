const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');
const Materia = require('../../db/models/materia')(sequelize,DataTypes);
const Finales = require('../../db/models/finales')(sequelize,DataTypes);

Materia.belongsToMany(Materia,{as: 'MateriasDisponibles',through: Finales,foreignKey: 'NecesariaId'});
Materia.belongsToMany(Materia,{as: 'FinalesNecesarias',through: Finales,foreignKey: 'MateriaId'});

controlador.all = async (req,res) => {
    res.send(await Materia.findAll({
        include:[
            {
                model: Materia,          
                as: 'MateriasDisponibles'
            },          
            {
                model: Materia,          
                as:'FinalesNecesarias'
            }
        ]
    }))
}
module.exports = controlador;