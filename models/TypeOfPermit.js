const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TypeOfPermit = sequelize.define('TypeOfPermit', {
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
  tableName: 'PermitMaster', // actual table name in database
  timestamps: false,      // disables createdAt and updatedAt
});

module.exports = TypeOfPermit;
