const db = require('../Database/database');
const Usuario = require('../models/usuarioModel');
const Cartao = require('../models/cartaoModel');
const Compra = require('../models/PedidoCompraModel');
const PedidoItem = require('../models/PedidoItemModel');
const Produto = require('../models/produtoModel');
const associates = require('../Database/associates');

// Relacionamentos entre os modelos
 

const syncDatabase = async () => {
    try {
        await db.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        await Usuario.sync({});
        await Cartao.sync({});
        await Produto.sync({});
        await Compra.sync({});
        await PedidoItem.sync({});
        console.log('Banco de dados sicronizados!');
        associates();
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
};
module.exports=syncDatabase;