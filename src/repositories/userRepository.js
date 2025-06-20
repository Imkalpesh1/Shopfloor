const User = require('../models/User');
const UserRole = require('../models/UserRole');

// Ensure association
User.belongsTo(UserRole, { foreignKey: 'role_id' });

async function getAllUsers() {
  return await User.findAll({
    include: {
      model: UserRole,
      attributes: ['name'],
    },
  });
}

module.exports = {
  getAllUsers,
};
