// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./backend/database_OLD');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Testa a conexão com o banco
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida.'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err)); 

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
