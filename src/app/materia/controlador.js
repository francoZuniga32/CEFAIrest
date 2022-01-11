const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');

const Materia = require('../../db/models/materia')(sequelize,DataTypes);
const Imparte = require('../../db/models/imparte')(sequelize,DataTypes);
const Carrera = require('../../db/models/carrera')(sequelize,DataTypes);
const Correlativas = require('../../db/models/correlativa')(sequelize,DataTypes)

Materia.belongsToMany(Carrera,{through: Imparte,foreignKey: 'MateriaId'});
Materia.belongsToMany(Materia,{as: 'Disponible',through: Correlativas,foreignKey: 'NecesariaId'});
Materia.belongsToMany(Materia,{as: 'Necesaria',through: Correlativas,foreignKey: 'MateriaId'});

controlador.all = async (req,res)=> {
    res.send(await Materia.findAll())
}

controlador.carrera = {};

controlador.carrera.all = async (req,res)=> {
    if(req.params.id){
        res.send(await Materia.findAll({
            include:{
                model: Carrera,          
                where: {
                    id: req.params.id
                }
            }
        }));
    }else{
        res.status(404).send();
    }
}

controlador.carrera.anio = async (req,res) => {
    if(req.params.id && req.params.anio){
        res.send(await Materia.findAll({
            where: {
                anio: req.params.anio
            },          
            include:{
                model: Carrera,          
                where: {
                    id: req.params.id
                }
            }
        }))
    }else{
        res.status(404).send();
    }
}

controlador.correlativa = async (req,res)=> {
    res.send(await Materia.findAll({
        where: {
            id: req.params.id,          
        },          
        include:[
            {
                model: Materia,          
                as: 'Necesaria'
            },          
            {
                model: Materia,          
                as: 'Disponible'
            }
        ]
    }))
}

module.exports = controlador;