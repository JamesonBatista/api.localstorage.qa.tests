const { saveData, getData } = require("../localStorage.js");

const getUsers = (req, res) => {
  const users = getData("users");
  res.status(200).json(users);
};

const getUserById = (req, res) => {
  const users = getData("users");
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const createUser = (req, res) => {
  const users = getData("users");
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  saveData("users", users);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const users = getData("users");
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    saveData("users", users);
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUser = (req, res) => {
  const users = getData("users");
  const newUsers = users.filter((u) => u.id !== parseInt(req.params.id));

  if (newUsers.length !== users.length) {
    saveData("users", newUsers);
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
