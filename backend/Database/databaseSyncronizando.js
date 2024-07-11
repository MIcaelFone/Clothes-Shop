const db = require('./database');
const User = require('../models/usuarioModel'); // Importe o modelo criado
const Admin = require('../models/AdministradorModel'); // Importe o modelo criado
const Produto = require('../models/produtoModel'); // Importe o modelo criado
const Pedidoitem = require('../models/PedidoItemModel');
const Cartao = require('../models/CartaoModel');
const Compra = require('../models/CompraModel');  

const syncDatabase = async () => {
    try {
        await db.sync({ force: false }); // `force: true` recria as tabelas a cada reinicialização do servidor, remova para não perder dados existentes
        console.log('Banco de dados sincronizado com sucesso');
        await Cartao.sync({ force: false })
        console.log('Tabela cartão sincronizada com o banco de dados');
        await Compra.sync({ force: false })
        console.log('Tabela compra sincronizada com o banco de dados');
        await User.sync({ force: false });
        console.log('Tabela usuário sincronizada com o banco de dados');
        await Admin.sync({ force: false });
        console.log('Tabela administrador sincronizada com o banco de dados');
        await Produto.sync({ force: false });
        console.log('Tabela produto sincronizada com o banco de dados');
        await Pedidoitem.sync({ force: false });
        console.log('Tabela pedido item sincronizada com o banco de dados');
        // Adicione lógica adicional aqui se necessário, por exemplo, a criação de registros iniciais
    } catch (err) {
        console.error('Erro ao sincronizar o banco de dados:', err);
    }
};

module.exports = syncDatabase;