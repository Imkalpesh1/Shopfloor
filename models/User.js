// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const UserRole = require('./UserRole');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserRole,
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'UserMaster',
  timestamps: false,
});

module.exports = User;
