"use strict";

module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.bulkInsert("Carreras",[
      {
        nombre: "Profesorado en Informática",          
        plan: "1185/13",          
        duracion: 4,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Licenciatura en Ciencias de la Computación",          
        plan: "1112/13",          
        duracion: 5,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Licenciatura en Sistemas de Información",          
        plan: "1420/2013",          
        duracion: 5,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Tecnicatura Universitaria en Desarrollo Web",          
        plan: "0885/2012",          
        duracion: 3,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre:
          "Tecnicatura Universitaria en Administración de Sistemas y Software Libre",          
        plan: "0895/2012 ",          
        duracion: 3,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
    ]);
  },          

  down: async (queryInterface,Sequelize) => {
    await queryInterface.dropTable("Carreras");
  },          
};
