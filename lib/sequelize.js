// lib/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:mIJmZmuOOPFpBFnTGWPSwMSJzbBaixDI@roundhouse.proxy.rlwy.net:19297/railway', {
  dialect: 'mysql',
});

module.exports = sequelize;