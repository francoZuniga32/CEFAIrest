const controlador = {};

const {DataTypes} = require('sequelize');
const sequelize = require('../../db/index');
const Usuario = require('../../db/models/usuario')(sequelize, DataTypes);

const jwt = require('jsonwebtoken');
const usuario = require('../../db/models/usuario');

controlador.auth = async(req, res)=>{
	if(req.body.usuario && req.body.contrasenia){
		var usuario = await Usuario.findOne({
			where:{
				usuario: req.body.usuario,
				contrasenia: req.body.contrasenia
			}
		});

		if( usuario != null){
			usuario.setDataValue('token',jwt.sign({usuario: usuario}, process.env.CLAVE, { expiresIn: "3h"}));
			res.send(usuario);
		}else{
			res.status(401).send({err: "el usuario o contrasenia son incorrectos"});
		}
	}else{
		res.status(203).send({err: "no se proporciono el usuario o la contrasenia o ambas"});
	}
}

controlador.create = async(req, res)=>{
	if(req.body.nombre && req.body.contrasenia){
		res.send(await Usuario.create({
			usuario: req.body.nombre,
			contrasenia: req.body.contrasenia
		}));
	}else{
		res.status(301).send({err: "no se proporciono el nombre o la contrasenia"});
	}
}

controlador.change = async(req, res)=>{
	if(req.body.usuario && req.body.contrasenia || req.body.usuarionuevo || req.body.contrasenianueva || req.body.admin){
		var usuario = await Usuario.findOne({
			where:{
				usuario: req.body.usuario,
				contrasenia: req.body.contrasenia
			}
		});

		if(usuario){
			res.send(await Usuario.update({
				usuario: req.body.usuarionuevo || usuario.getDataValue('usuario'),
				contrasenia: req.body.contrasenianueva || usuario.getDataValue('contrasenia'),
				admin: req.body.admin || usuario.getDataValue("admin") 
			}, {
				where: { id: usuario.getDataValue('id')}
			}))
		}else{
			res.status(401).send({err: "el ususario no existe"})
		}
	}else{
		res.status(401).send({err: "no proporciono el usuario o la contrasenia"});
	}
}

controlador.delete = async(req, res)=>{
	if(req.body.usuario && req.body.contrasenia){
		var usuarioActual = jwt.verify(req.headers["access-token"], process.env.CLAVE).usuario;
		if(usuario.usuario != req.body.usuario && usuario.contrasenia != req.body.contrasenia){
			await Usuario.delete({
				where: {
					usuario: req.body.usuario,
					contrasenia: req.body.contrasenia,
					admin: false
				}
			});
			res.send({msg: "se eliminio exitosamente"})
		}else{
			res.send({err: "no puede eliminarse a si mismo"})
		}
	}else{
		res.send({err: "no proporciono el usuario y la contrasenia"})
	}
}

module.exports = controlador;
