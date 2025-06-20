const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const MachineCategory = sequelize.define('MachineCategory', {
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
  tableName: 'MachineCategory', // actual table name in database
  timestamps: false,      // disables createdAt and updatedAt
});

module.exports = MachineCategory;
