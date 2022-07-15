const sequelize = require("../db/index");
const { DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const Usuario = require("../db/models/usuario")(sequelize, DataTypes);

const auth = async(req, res, next) => {
    if(req.params.folder === 'carnets'){
        if (req.headers["access-token"]) {
            console.log("pasando por el middelware");
        try {
                var row = await Usuario.findOne({
                    where: {
                        id: jwt.verify(req.headers["access-token"], process.env.CLAVE).usuario.id,
                        admin: true
            },
                });
                if (row && row.getDataValue('id') == req.params.user_id) {
                    next();
                } else {
                    res.status(404);
                }
            } catch (error) {
                res.status(401).send({ err: error });
            }
        } else {
            res.status(203).send({ mensaje: "no esta provisto el token" });
        }
    }
};

module.exports = auth;
