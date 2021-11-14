'use strict';
module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('Materia',{
      id: {
        allowNull: false,          
        autoIncrement: true,          
        primaryKey: true,          
        type: Sequelize.INTEGER
      },          
      nombre: {
        type: Sequelize.STRING
      },          
      anio: {
        type: Sequelize.INTEGER
      },          
      cuatrimestre: {
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
    await queryInterface.dropTable('Materias');
  }
};