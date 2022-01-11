'use strict';
module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('Carreras',{
      id: {
        allowNull: false,          
        autoIncrement: true,          
        primaryKey: true,          
        type: Sequelize.INTEGER
      },          
      nombre: {
        type: Sequelize.STRING
      },          
      plan: {
        type: Sequelize.STRING
      },          
      duracion: {
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
    await queryInterface.dropTable('Carreras');
  }
};