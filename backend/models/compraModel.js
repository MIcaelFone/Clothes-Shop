const { DataTypes } = require('sequelize');
const db = require('../Database/database');

const Compra=db.define("Compra",{
    idcompra:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    idusuario:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'Usuario',
            key: 'idusuario'
        }
    },
    idcartao:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'Cartao',
            key: 'idcartao'
        }
    },
    endereco:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cidade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    CEP:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pais:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    tableName: 'compra',
    timestamps: false
});
module.exports = Compra;