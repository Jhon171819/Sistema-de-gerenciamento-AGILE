const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');


const Fornecedor = sequelize.define('fornecedor', {
  id_fornecedor: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
    primaryKey: true,
  },
  nome_fornecedor: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  cep: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telefone_celular: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

module.exports = Fornecedor;
