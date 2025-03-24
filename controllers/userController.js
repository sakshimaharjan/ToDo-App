const { users, getNewId } = require('../models/userModel');

// Create User
exports.createUser = (req, res) => {
  const newUser = {
    id: getNewId(),
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Get All Users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get User By ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

// Update User
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;
  user.age = req.body.age ?? user.age;

  res.json(user);
};

// Delete User
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};
