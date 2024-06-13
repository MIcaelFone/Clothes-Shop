const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Servir os arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Qualquer requisição, envia o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
