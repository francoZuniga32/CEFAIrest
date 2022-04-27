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

controlador.create = async(req, res)=>{
	if(req.body.nombre && req.body.anio && req.body.cuatrimestre && req.body.carreras){
		var materia = await Materia.create({
			nombre: req.body.nombre,
			anio: req.body.anio, 
			cuatrimestre: req.body.cuatrimestre
		});

		if(Array.isArray(req.body.carreras)){
			for(var i = 0; i < req.body.carreras.length; i++){
				await Imparte.create({
					CarreraId: req.body.carreras[i],
					MateriaId: materia.getDataValue('id')
				});
			}
		}else if(Number.isInteger(req.body.carreras)){
			await Imparte.create({
				CarreraId: req.body.carreras
			});
		}else{
			res.status(401).send({err: "la carreras o carreras tiene que ser un numero o un arreglo"});
		}
	}else{
		res.status(401).send({err: "no se proporciono el nombre o la descripcion o el anio o la carrera"})
	}
}

controlador.change = async(req, res)=>{
	if(req.body.id && req.body.nombre && req.body.anio && req.body.cuatrimestre){

	}else{

	}
}

module.exports = controlador;
