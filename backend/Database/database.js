const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo correspondente
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `../../backend/.env.${env}` });

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false, // Desabilita logs, opcional
});

module.exports = sequelize;
