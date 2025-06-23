const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
  tableName: 'PermitMaster', 
  timestamps: false,      
});

module.exports = TypeOfPermit;
