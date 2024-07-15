const database = require('../Database/database.js');
const { DataTypes } = require('sequelize');

const PedidoItem=database.define("PedidoItem",{
    idcompra:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        references:{
            model:'pedidoCompra',
            key:'idcompra',
        }
        
    },
    idproduto:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'produto',
            key:'idproduto'
        }
    },
    quantidade:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    tableName: 'pedidoitem',
    timestamps: false
});
 
module.exports = PedidoItem;