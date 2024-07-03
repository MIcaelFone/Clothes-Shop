const database = require('../Database/database.js');
const { DataTypes } = require('sequelize');
const PedidoItem=database.define("PedidoItem",{
    idcompra:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        
    },
    idproduto:{
        type:DataTypes.INTEGER,
        allowNull:false,
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