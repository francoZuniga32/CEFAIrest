const controlador = {};

const path = require("path");
const multer = require("multer");
const fs = require('fs');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const sequelize = require("../../db/index");
const { DataTypes } = require("sequelize");
const { json } = require("body-parser");

const Files = require("../../db/models/files")(sequelize, DataTypes);

function multerConfStorage(inputName, tipes, storage) {
  return multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if (tipes.indexOf(ext) < 0) {
        return callback(new Error("Only images are allowed"));
      }
      callback(null, true);
    },
    limits: {
      fileSize: 1024 * 1024,
    },
  }).single(inputName);
}

function multerConf(inputName, tipes, tipo, id_usaurio) {
  var storage = multer.diskStorage({
    destination: path.join(__dirname, getDirLocal(tipo, id_usaurio)),
    filename: (req, file, cb) => {
      var name = encriptfile(file.originalname);
      cb(null, name);
    },
  });
  return multerConfStorage(inputName, tipes, storage);
}

function encriptfile(filename) {
  return (
      crypto.createHash("sha1").update(filename).digest("hex") +
      "." +
      filename.split(".")[1]
  );
}

function getDirLocal(tipo, id_usaurio){
    var retorno = "";
    switch (tipo) {
        case 'carnets_perfil':
            retorno = `../../public/carnets/${id_usaurio}/perfil`
            break;
        case 'carnets_qr':
            retorno = `../../public/carnets/${id_usaurio}/qr`
        default:
            break;
    }
    return retorno;
}

function getUrl(tipo, file, id_usaurio){
    var retorno = "";
    switch (tipo) {
        case 'carnets_perfil':
            retorno = `http://localhost:3000/static/carnets/${id_usaurio}/perfil/${file}`
            break;
        case 'carnets_qr':
            retorno = `http://localhost:3000/static/carnets/${id_usaurio}/qr/${file}`
        default:
            break;
    }
    return retorno;
}

async function existirOCrearCarpeta(usaurio){
  try {
    await fs.accessSync(path.join(__dirname, `../../public/carnets/${usaurio}`));
  } catch (error) {
    await fs.mkdirSync(path.join(__dirname, `../../public/carnets/${usaurio}`));
  }
}

controlador.carnet_perfil = async(req, res)=>{
    var usuario = jwt.verify(req.headers["access-token"], process.env.CLAVE).usuario;
    await existirOCrearCarpeta(usuario.id);
    multerConf("carnets_perfil", ['.png', '.jpeg', '.jpg'], "carnets_perfil", usuario.id)(req, res, async(err) =>{
        if (usuario) {
            var file = await Files.create({
                usuario: usuario.id,
                tipo: "miniatura",
                url: `http://localhost:3000/static/carnets/${usuario.id}/perfil/${req.file.filename}`,
                meta: req.file
            });
            if (file) res.status(200).send(file);
        }
    })
}

module.exports = controlador;