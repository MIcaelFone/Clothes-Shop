const { DataTypes } = require('sequelize');
const db = require('../Database/database');
const Usuario=db.define("Usuario",{
    idusuario:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
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
        allowNull:false
    },
    telefone:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName: 'usuario',
    timestamps: false
});
 module.exports = Usuario;