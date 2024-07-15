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
    marca:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descricao:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    preco:{
        type:DataTypes.FLOAT(10,2),
        allowNull:false,
    },
    moda:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    tableName: 'produto',
    timestamps: false
});
module.exports = Produto;
