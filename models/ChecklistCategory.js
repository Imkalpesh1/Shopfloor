const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./Activity');

const ChecklistCategory = sequelize.define('ChecklistCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ck_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  flag: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  tableName: 'ChecklistCategory', // actual table name in database
  timestamps: false,      // disables createdAt and updatedAt
});

module.exports = ChecklistCategory;
