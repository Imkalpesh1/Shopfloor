// index.js
require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/db');
const User = require('./src/models/User');
const UserRole = require('./src/models/UserRole');

const app = express();
const PORT = process.env.PORT || 3000;

// Define association (important!)
User.belongsTo(UserRole, { foreignKey: 'role_id' });

// API route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: UserRole,
        attributes: ['name'], // only get role name
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
