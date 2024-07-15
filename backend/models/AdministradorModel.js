const database = require('../Database/database.js');
const { DataTypes } = require('sequelize');
const Administrador=database.define("Administrador",{
    idadmin:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    telefone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    tableName: 'administrador',
    timestamps: false
});
module.exports = Administrador;