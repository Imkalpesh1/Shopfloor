// models/UserRole.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const UserRole = sequelize.define('UserRole', {
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
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'UserRoleMaster',
  timestamps: false,
});

module.exports = UserRole;
