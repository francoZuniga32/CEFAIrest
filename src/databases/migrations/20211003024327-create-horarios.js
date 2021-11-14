'use strict';
module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('Horarios',{
      id: {
        allowNull: false,          
        autoIncrement: true,          
        primaryKey: true,          
        type: Sequelize.INTEGER
      },          
      MateriaId: {
        type: Sequelize.INTEGER
      },          
      aula: {
        type: Sequelize.STRING
      },          
      dia: {
        type: Sequelize.STRING
      },          
      modulo: {
        type: Sequelize.STRING
      },          
      horainicio: {
        type: Sequelize.TIME
      },          
      horafin: {
        type: Sequelize.TIME
      },          
      cuatrimestre: {
        type: Sequelize.INTEGER
      },          
      estado: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Horarios');
  }
};