const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const AdditionalControls = sequelize.define('AdditionalControls', {
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
    defaultValue: 0,
    allowNull: false,
  },
}, {
  tableName: 'AdditionalControls', // actual table name in database
  timestamps: false,      // disables createdAt and updatedAt
});

module.exports = AdditionalControls;
