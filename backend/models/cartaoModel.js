const { DataTypes } = require('sequelize');
const db = require('../Database/database');
const Usuario = require('./usuarioModel');
const Cartao = db.define("Cartao", {
    idcartao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cvc: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'idusuario'
        }
    }
}, {
    tableName: 'cartao',
    timestamps: false
});

module.exports = Cartao;
