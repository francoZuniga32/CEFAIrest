"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize,DataTypes) => {
  const Materia = require('./materia');
  class Correlativa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Correlativa.init(
    {
      NecesariaId: {
        type: DataTypes.INTEGER,          
        reference: {
          model: Materia,          
          id: "idMateria",          
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
      modelName: "Correlativas",          
    }
  );
  return Correlativa;
};
