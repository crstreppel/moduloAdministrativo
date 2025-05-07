const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// Testar conexão com o banco e iniciar servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco:', err);
  });