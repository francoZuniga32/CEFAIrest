const controlador = {};
const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');

const Carrera = require('../../db/models/carrera')(sequelize,DataTypes);
const Imparte = require('../../db/models/imparte')(sequelize, DataTypes);

controlador.all = async (req,res)=> {
    res.send(await Carrera.findAll());
}

controlador.id = async (req,res)=> {
    res.send(await Carrera.findByPk(req.params.id));
}

controlador.create = async(req, res)=>{
	if(req.body.nombre && req.body.plan && req.body.duracion){
		res.send( await Carrera.create({
			nombre: req.body.nombre,
			plan: req.body.plan,
			duracion: req.body.duracion,
			createdAt: new Date(),
			updatedAt: new Date()
		}) );
	}else{
		res.send({err: "no se proporciono el nombre o el plan o la duracion"});
	}
}

controlador.put = async (req,res)=> {
    if(req.body.carrera && req.body.nombre || req.body.duracion || req.body.plan){
    	var carreraActual = await Carrera.findOne({where:{ id: req.body.carreraActual }});
	res.send(await Carrera.update({
		nombre: req.body.nombre || carreraActual.getDataValue("nombre"),
		plan: req.body.plan || carreraActual.getDataValue("plan"),
		duracion: req.body.duracion || carreraActual.getDataValue("duracion"),
	}, {
		where:{
			id: req.body.carrera
		}
	}));
    }else{
	    res.send({err: "no se proporciono el id de la carrera o el nombre, plan o duracion"});
    }
}

controlador.delete = async(req, res)=>{
	if(req.params.id){
		await Carrera.delete({
			where:{
				id: req.params.id
			}
		});
		await Imparte.delete({
			where:{
				CarreraId: req.params.id
			}
		})
	}
}

module.exports = controlador;
