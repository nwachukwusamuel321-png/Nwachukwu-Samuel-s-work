import { users } from '../data/store.js';

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required user fields' });
  }

  const user = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    name,
    email
  };

  users.push(user);
  res.status(201).json(user);
};

export { getAllUsers, getUserById, createUser };
