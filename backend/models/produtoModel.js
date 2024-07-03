
const database = require('../Database/database.js');
const { DataTypes} = require('sequelize');
const Produto=database.define("Produto",{
    idproduto:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    descricao:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    preco:{
        type:DataTypes.FLOAT(10,2),
        allowNull:true,
    },
    moda:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{
    tableName: 'produto',
    timestamps: false
});

module.exports = Produto;
