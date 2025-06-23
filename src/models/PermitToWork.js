const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PermitToWork = sequelize.define('PermitToWork', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typeOfPermitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TypeOfPermit', // Table name or model name
      key: 'id',
    },
  },
  permitId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('On-Going', 'In-Review', 'Rejected', 'Completed'), // Add your actual values
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  machineId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'MachineCategory',
      key: 'id',
    },
  },
  CreatedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  UpdatedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  UpdatedBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Users table
      key: 'id',
    },
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TotalWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  Details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  flag: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  tableName: 'PermitToWork',
  timestamps: false, // we're handling created/updated manually
});

module.exports = PermitToWork;
