const { DataTypes } = require('sequelize');
const db = require('../Database/database');
const Usuario = require('./usuarioModel');
const Cartao = require('./cartaoModel');
const Pedidocompra = db.define("Pedidocompra", {
    idcompra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    enderenco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'idusuario'
        }
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CEP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idcartao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Cartao,
            key: 'idcartao'
        }
    },
    valortotal: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
    }
}, {
    tableName: 'pedidocompra',
    timestamps: false
});

module.exports = Pedidocompra;
