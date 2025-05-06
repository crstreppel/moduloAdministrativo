const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'postgres', 'Crs@270172', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: console.log // Opcional: mostra logs das queries
});

// Testar a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');
  } catch (error) {
    console.error('Falha ao conectar:', error);
  }
}

testConnection();