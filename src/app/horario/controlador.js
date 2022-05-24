const controlador = {};
const {Op, DataTypes} = require('sequelize');
const sequelize = require('../../db/index');
const horarios = require('../../db/models/horarios');

const Horarios = require('../../db/models/horarios')(sequelize,DataTypes);
const Materia = require('../../db/models/materia')(sequelize,DataTypes);

const Imparte = require('../../db/models/imparte')(sequelize, DataTypes);

Horarios.hasOne(Materia,{foreignKey: 'id', sourceKey: 'MateriaId'});

const Carrera = require('../../db/models/carrera')(sequelize, DataTypes);
const Correlativas = require('../../db/models/correlativa')(sequelize,DataTypes);

Materia.belongsToMany(Carrera,{through: Imparte,foreignKey: 'MateriaId'});

controlador.all = async (req,res)=> {
	var where = {};
	req.query.dia != null ? where.dia = req.query.dia : false;
	req.query.horainicio != null ? where.horainicio = {[Op.gte] : req.query.horainicio} : null;
	req.query.horafin != null ? where.horafin = {[Op.lte]:req.query.horafin } : null;
	req.query.cuatrimestre != null ? where.cuatrimestre = req.query.cuatrimestre : null;
	res.send(await getHorarios(where));
}

controlador.anio = async(req, res)=>{
	var anio = req.params.anio;
	var carrera = req.params.carrera;	
	if(anio && carrera){
		var where = {};
		req.query.dia != null ? where.dia = req.query.dia : false;
		req.query.horainicio != null ? where.horainicio = {[Op.gte] : req.query.horainicio} : null;
		req.query.horafin != null ? where.horafin = {[Op.lte]:req.query.horafin } : null;
		req.query.cuatrimestre != null ? where.cuatrimestre = req.query.cuatrimestre : null;
		res.send(await getHorarios(where, anio, carrera));
	}else{
		res.status(401).send({err: "no se proporciono el anio"});
	}
}

async function getHorarios(where, anio, carrera){
	var whereMateria = {};
	var whereCarrera = {};

	anio != null ? whereMateria.anio = anio : null ;
	carrera != null ? whereCarrera.id = carrera : null ;
	return await Horarios.findAll({
		attributes: ['aula', 'dia','modulo', 'horainicio', 'horafin', 'estado', 'cuatrimestre'],
		where: where,
        	order:[
			['horainicio', 'ASC']	
		],
		include:[{
			model: Materia,
			attributes: ['nombre'],
			where: whereMateria,
			include:[{
				model: Carrera,
				attributes: ['nombre'],
				where: whereCarrera,
				through:{
					attributes: []
				}
			}]
        	}]
	});
}

controlador.materia = async(req, res)=>{
	if(req.params.id){
		res.send( await Horarios.findAll({
			include:[{
				model: Materia,
				where:{
					id: req.params.id
				}
			}]
		}))
	}
}

controlador.create = async(req, res)=>{
	if(req.body.idMateria && req.body.aula && req.body.dia && req.body.modulo && req.body.horainicio && req.body.horafin && req.body.cuatrimestre && req.body.estado){
		res.send(await Horarios.create({
    			MateriaId: req.body.idMateria,          
    			aula: req.body.aula,
    			dia: req.body.dia,
    			modulo: req.body.modulo,
   	 		horainicio: req.body.horainicio,
    			horafin: req.body.horafin,
    			cuatrimestre: req.body.cuatrimestre,
    			estado: req.body.estado
		}));
	}else{
		res.status(401).send({err: "no se proporciono el id de la materia o el aula o el dia o el modulo o la hora de inicio o la hora de fin o el cuatrimestre o el estado de la materia"});
	}
}

controlador.change = async(req, res)=>{
}

module.exports = controlador;
