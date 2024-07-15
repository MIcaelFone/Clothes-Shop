const Usuario = require('../models/usuarioModel');
const Cartao = require('../models/cartaoModel');
const Compra = require('../models/PedidoCompraModel');
const PedidoItem = require('../models/PedidoItemModel');
const Produto = require('../models/produtoModel');

// Relacionamentos entre Usuario e Cartao
function associates(){
    Usuario.hasMany(Cartao, {
        foreignKey: 'idusuario',
        as: 'cartoes',
        onDelete: 'CASCADE'
    });
   

    // Relacionamentos entre Usuario e Compra
    Usuario.hasMany(Compra, {
        foreignKey: 'idusuario',
        as: 'compras',
        onDelete: 'CASCADE'
    });
    Compra.belongsTo(Usuario, {
        foreignKey: 'idusuario',
        as: 'usuario'
    });

    // Relacionamentos entre Cartao e Compra
    Cartao.hasMany(Compra, {
        foreignKey: 'idcartao',
        as: 'compras',
        onDelete: 'CASCADE'
    });
    Compra.belongsTo(Cartao, {
        foreignKey: 'idcartao',
        as: 'cartao'
    });

    // Relacionamentos entre Compra e PedidoItem
    Compra.hasMany(PedidoItem, {
        foreignKey: 'idcompra',
        as: 'itens',
        onDelete: 'CASCADE'
    });
    PedidoItem.belongsTo(Compra, {
        foreignKey: 'idcompra',
        as: 'compra'
    });

    // Relacionamentos entre Produto e PedidoItem
    Produto.hasMany(PedidoItem, {
        foreignKey: 'idproduto',
        as: 'pedidoItens',
        onDelete: 'CASCADE'
    });
    PedidoItem.belongsTo(Produto, {
        foreignKey: 'idproduto',
        as: 'produto'
    });
}
module.exports = associates;