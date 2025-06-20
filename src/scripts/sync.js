// sync.js
const sequelize = require('../config/db');
const UserRole = require('./models/UserRole');
const User = require('./models/User');
const Hotwork = require('./models/HotWork');
const Job = require('./models/Job');
const Shop = require('./models/Shop');
const ListArea = require('./models/ListArea');
const Location = require('./models/Location');
const TypeOfPermit = require('./models/TypeOfPermit');
const ChecklistCategory = require('./models/ChecklistCategory');
const TypeOfCrane = require('./models/TypeOfCrane');
const TypeOfLiftingtool = require('./models/TypeOfLiftingtool');
const MachineCategory = require('./models/MachineCategory');
const AdditionalControls = require('./models/AdditionalControls');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Create tables if not exist
    console.log('✅ Tables synced successfully.');
  } catch (error) {
    console.error('❌ Sync error:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
