const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Checklist = sequelize.define('Checklist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TypeOfPermitID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER, 
    defaultValue: 0,
    allowNull: false,
  },
  addon: {
  type: DataTypes.TEXT, // stores JSON string
  allowNull: true,
  get() {
    const rawValue = this.getDataValue('addon');
    return rawValue ? JSON.parse(rawValue) : null;
  },
  set(value) {
    this.setDataValue('addon', JSON.stringify(value));
  }
},
  flag: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  tableName: 'ChecklistMaster',
  timestamps: false,
});

module.exports = Checklist;
