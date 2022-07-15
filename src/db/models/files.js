'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Files.init({
    usuario: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    url: DataTypes.STRING,
    meta: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Files',
  });
  return Files;
};