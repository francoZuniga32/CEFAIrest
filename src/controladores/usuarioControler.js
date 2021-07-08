const usuarioControler = {};
const pool = require('../database');
const jwt = require('jsonwebtoken');
const key = require('../config.json');
const md5 = require('md5');

usuarioControler.validar = (req, res) => {
    var usuario = req.params.usuario;
    var contrasenia = md5(req.params.contrasenia);
    var consulta = "SELECT * FROM usuario WHERE usuario.usuario = ? AND usuario.pass = ?";

    pool.query(consulta, [usuario, contrasenia], (err, usuario) => {
        if(err){
            res.json(err);
        }
        console.log(usuario.length);
        if (usuario.length > 0 && usuario != null) {
            var token = jwt.sign({"token":usuario[0].token}, key.clave);
            console.log(token);
            res.json({"token":token});
        }else{
            res.json({"mensaje": "el usuario no es valido o la contraseña es incorrecta"});
        }
    });
};

usuarioControler.validarLogin = (req, res) => {
    var usuario = req.body.usuario;
    var contrasenia = req.body.contrasenia;
    var consulta = "SELECT * FROM `usuario` WHERE usuario = ? AND pass = ?";

    pool.query(consulta, [usuario, contrasenia], (err, usuario)=>{
        if(err){
            console.log(err);
        }
        if(usuario.length > 0){
            req.session.user = {
                "nombre" : usuario[0].usuario,
                "tipo" : usuario[0].tipo
            };
            console.log(req.session.user);
            res.redirect("/administrar/");
        }else{
            res.redirect("/login");
        }
    });
}

module.exports = usuarioControler;
