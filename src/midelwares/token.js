const token = {};
const jwt = require('jsonwebtoken');

token.validar = (req, res, next, app) => {
    const token = req.headers['access-token'];
    //tenemso que validar con la base de datos

    if (token == "hola") {
        jwt.verify(token, app.get('llave'), (err, decoded) => {      
            if (err) {
                return res.json({ mensaje: 'Token inválida' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        res.send({ 
            mensaje: 'Token no proveída.' 
        });
    }
 }

module.exports = token;