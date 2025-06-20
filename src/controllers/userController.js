const asyncHandler = require('express-async-handler');
const userRepository = require('../repositories/userRepository');

const getUsers = asyncHandler(async (req, res) => {
  const users = await userRepository.getAllUsers();
  res.json(users);
});

module.exports = {
  getUsers,
};
