const controlador = {};
const { DataTypes } = require("sequelize");
const sequelize = require("../../db/index");

require("dotenv").config();

const Carnets = require("../../db/models/carnet")(sequelize, DataTypes);
const Usuario = require("../../db/models/usuario")(sequelize, DataTypes);
const Files = require("../../db/models/files")(sequelize, DataTypes);

const pdfGenerate = require('../pdf/index');

Carnets.hasOne(Usuario, { foreignKey: "id", sourceKey: "usuario" });
Carnets.hasOne(Files, { foreignKey: "id", sourceKey: "perfil" });

controlador.all = async (req, res) => {
  res.send(
    await Carnets.findAndCountAll({
      include: [
        {
          model: Usaurio,
          attributes: ["nombre"],
        },
        {
          model: Files,
          attributes: ["url"],
        },
      ],
    })
  );
};

controlador.tiket_consulta = async (req, res) => {
  if (req.query.uuid) {
    var usuario = await Carnets.findOne({
      where: {
        uuid: req.query.uuid,
      },
      include:[
        {
          model: Usuario,
          attributes: ['usuario']
        },
        {
          model: Files,
          attributes: ["url"],
        },
      ]
    });
    if (usuario) {
      res.send({ exists: true , data: usuario});
    } else {
      res.send({ exists: false });
    }
  } else {
    res.status(401).send({ err: "no proporciono el uuid" });
  }
};

controlador.create = async (req, res) => {
  if (req.body.usuario && req.body.perfil) {
    var carnet = await Carnets.findOne({
      where: {
        usuario: req.body.usuario,
      },
    });
    if (!carnet) {
      carnet = await Carnets.create({
        usuario: req.body.usuario,
        perfil: req.body.perfil,
      });
      carnet = await Carnets.findOne({
        attributes: ["uuid"],
        where: {
          usuario: req.body.usuario,
        },
      });

      await Carnets.update(
        {
          qr: `${
            process.env.BASE_URL
          }carnets/verificar?uuid=${carnet.getDataValue("uuid")}`,
        },
        {
          where: {
            usuario: req.body.usuario,
          },
        }
      );

      carnet = await Carnets.findOne({
        where: {
          usuario: req.body.usuario,
        },
        include:[
          {
            model: Usuario
          },
          {
            model: Files
          }
        ]
      });

      await pdfGenerate.generate_carnet(carnet.toJSON());

      res.send(carnet);
    } else {
      res.status(203).send({ err: "el carnet ya fue registrado" });
    }
  } else {
    res
      .status(401)
      .send({ err: "no se proporciono el usaurio ni la foto de perfil." });
  }
};

module.exports = controlador;
