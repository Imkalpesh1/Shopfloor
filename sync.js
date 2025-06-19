// sync.js
const sequelize = require('./db');
const UserRole = require('./models/UserRole');
const User = require('./models/User');

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
