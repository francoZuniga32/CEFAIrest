'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
  class Horarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Horarios.init({
    MateriaId: DataTypes.INTEGER,          
    aula: DataTypes.STRING,          
    dia: DataTypes.STRING,          
    modulo: DataTypes.STRING,          
    horainicio: DataTypes.TIME,          
    horafin: DataTypes.TIME,          
    cuatrimestre: DataTypes.INTEGER,          
    estado: DataTypes.STRING
  },{
    sequelize,          
    modelName: 'Horarios',          
  });
  return Horarios;
};