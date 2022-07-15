'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carnet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carnet.init({
    usuario: DataTypes.INTEGER,
    perfil: DataTypes.STRING,
    qr: DataTypes.STRING,
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    codigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carnet',
  });
  return Carnet;
};