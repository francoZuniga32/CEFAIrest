"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize,DataTypes) => {
  const Materia = require("./materia");
  const Carrera = require("./carrera");
  class Imparte extends Model {}
  Imparte.init(
    {
      CarreraId: {
        type: DataTypes.INTEGER,          
        reference: {
          model: Carrera,          
          id: "idCarrera",          
        },          
      },          
      MateriaId: {
        type: DataTypes.INTEGER,          
        reference: {
          model: Materia,          
          id: "idMateria",          
        },          
      },          
    },          
    {
      sequelize,          
      modelName: "Imparte",          
    }
  );
  return Imparte;
};
