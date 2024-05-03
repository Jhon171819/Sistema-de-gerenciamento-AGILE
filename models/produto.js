const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');
const fornecedor = require('./fornecedor');

const Produto = sequelize.define('produto', {
    id_produto: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        primaryKey: true,
      },
      id_fornecedor: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
      },
      nome_produto: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      qtd_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    });

    Produto.belongsTo(fornecedor, {
        foreignKey: 'id_fornecedor',
        targetKey: 'id_fornecedor',
      });

module.exports = Produto;