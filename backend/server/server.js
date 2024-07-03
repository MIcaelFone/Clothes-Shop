const produtoRoutes = require("../routes/ProdutoRoutes");
const usuarioRoutes = require("../routes/usuarioRoutes");
const cartaoRoutes = require("../routes/cartaoRoutes");
const pedidoRoutes = require("../routes/compraRoutes");
const adminRoutes = require("../routes/AdministradorRoutes");
const express = require("express");
const bodyParser = require('body-parser'); 
const cors = require('cors');
const dbSync = require("../Database/dbSync"); 
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Rotas
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
