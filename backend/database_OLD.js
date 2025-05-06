// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('PatyPet4.2', 'postgres', 'Crs@270172', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true // Ativa timestamps em todos os modelos
  }
});

module.exports = sequelize;
