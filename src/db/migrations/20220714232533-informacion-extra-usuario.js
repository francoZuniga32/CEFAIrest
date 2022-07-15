'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'nombre', {type: Sequelize.STRING });
    await queryInterface.addColumn('Usuarios', 'apellido', {type: Sequelize.STRING});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Usuarios', 'nombre');
    await queryInterface.removeColumn('Usuarios', 'apellido');
  }
};
