const produtoRoutes = require("../routes/produtoRoutes");
const usuarioRoutes = require("../routes/usuarioRoutes");
const cartaoRoutes = require("../routes/cartaoRoutes");
const pedidoRoutes = require("../routes/pedidoCompraRoutes");
const adminRoutes = require("../routes/AdministradorRoutes");
const express = require("express");
const bodyParser = require('body-parser'); 
const cors = require('cors');
const dbSync = require("../Database/databaseSyncronizando"); 
const app = express();
const path = require('path');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use('/produto', produtoRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/cartao', cartaoRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/admin', adminRoutes);

dbSync();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
