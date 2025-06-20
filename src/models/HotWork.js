// models/Hotwork.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Hotwork = sequelize.define('Hotwork', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flag: {
    type: DataTypes.INTEGER,
    defaultValue: 0 , // optional default
    allowNull: false,
  },
}, {
  tableName: 'HotWorkMaster',
  timestamps: false, 
});

module.exports = Hotwork;
