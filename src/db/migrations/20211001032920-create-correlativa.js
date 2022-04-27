'use strict';
module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('Correlativas',{
      id: {
        allowNull: false,          
        autoIncrement: true,          
        primaryKey: true,          
        type: Sequelize.INTEGER
      },          
      NecesariaId: {
        type: Sequelize.INTEGER
      },          
      MateriaId: {
        type: Sequelize.INTEGER
      },          
      createdAt: {
        allowNull: false,          
        type: Sequelize.DATE
      },          
      updatedAt: {
        allowNull: false,          
        type: Sequelize.DATE
      }
    });
  },          
  down: async (queryInterface,Sequelize) => {
    await queryInterface.dropTable('Correlativas');
  }
};