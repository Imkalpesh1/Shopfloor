const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING, // or ENUM if limited categories
    allowNull: false,
  },
}, {
  tableName: 'ActivityMaster',
  timestamps: false,
});

module.exports = Activity;
