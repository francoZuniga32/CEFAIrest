'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  	await queryInterface.bulkInsert('Usuarios',[{
		usuario: 'admin@example.com',
		contrasenia: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
		createdAt: new Date(),
		updatedAt: new Date()
	}])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
