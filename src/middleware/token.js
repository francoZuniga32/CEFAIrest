const token = {};
const pool = require('../database');
const key = require('../config.json');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const usuarioControler = require('../controladores/usuarioControler');

token.validar = async (req, res, next)=>{
    var token = req.headers['access-token'];
    var consulta = "SELECT * FROM usuario WHERE usuario.token = ?";
    //1. validamos si el access-token, en caso contrario retornamos un error
    if(token != null || token != ""){
        //2. desiframos el token provisto por el usuario
        try {
            var decoded = jwt.verify(token, key.clave);
            var token = decoded.token;
            var usaurio = await pool.query(consulta, [token]);
            console.log(usaurio);
            //3. comparamos si el token decifrado pertenecen a un usuario
            if(usaurio.length > 0){
                //mas adelante llevaremos refgistros de quienes hacen uso de la aplicacion
                console.log("TOKEN VALIDO!!");
                next();
            }else{
                res.json({"Error":"El token provisto en header no es un token aceptado"});
            }

        } catch(err) {
            res.json(err);
        }
        
    }else{
        res.json({"Error":"token no provista en header: access-token"});
    }
};

module.exports = token;