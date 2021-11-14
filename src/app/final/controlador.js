const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../databases/index');
const Materia = require('../../databases/models/materia')(sequelize,DataTypes);
const Finales = require('../../databases/models/finales')(sequelize,DataTypes);

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