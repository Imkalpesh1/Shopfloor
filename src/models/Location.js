// models/ListArea.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ListArea = require('./ListArea'); 

const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ListArea,
      key: 'id', 
    },
  },
}, {
  tableName: 'LocationMaster',
  timestamps: false,
});

module.exports = Location;
