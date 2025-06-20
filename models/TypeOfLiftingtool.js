const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TypeOfLiftingtool = sequelize.define('TypeOfLiftingtool', {
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
  tableName: 'TypeOfLiftingtool', // actual table name in database
  timestamps: false,      // disables createdAt and updatedAt
});

module.exports = TypeOfLiftingtool;
