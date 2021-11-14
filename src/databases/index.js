const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.BD_NAME,          
    process.env.BD_USER,          
    process.env.BD_PASSWORD,{
        host: process.env.BD_HOST,          
        dialect: 'mysql'
    }
);

module.exports = sequelize;