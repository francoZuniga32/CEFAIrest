const controlador = {};

var pdf = require("pdf-creator-node");
var fs = require("fs");
var path = require('path');

controlador.generate_carnet = async (data) => {
    console.log(data);
  var options = {
    "width": "90mm",
    "height": "53mm",
    "border": "0mm"
  };

  var html = fs.readFileSync(path.join(__dirname, './templates/carnets.html'), "utf8");

  var document = {
    html: html,
    data: data,
    path: path.join(__dirname, `../../public/carnets/${data.Usuario.id}/${data.uuid}.pdf`),
    type: "",
  };


  try {
    var res = pdf.create(document, options);
    return res;
  } catch (error) {
    console.log(err);
  }
};

module.exports = controlador;
