const user = require("../model/user");
// get all users from db
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await user.find();
  } catch (error) {
    return next(error);
  }
  if (!users) {
    return res.status(500).json({ message: " Internal Server Error" });
  }
  return res.status(200).json({ users });
};

// add users to the db
const addUsers = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username &&
    username.trim() == "" &&
    !email &&
    email.trim() == "" &&
    !password &&
    password.lenght > 6
  ) {
    return res.status(422).json({ message: " Invalid Error" });
  }
  let users;
  try {
    users = new user({
      username,
      email,
      password,
    });
    users = await users.save();
  } catch (error) {
    return next(error);
  }
  if (!users) {
    return res.status(500).json({ message: "Unable to save user" });
  }
  return res.status(201).json({ users });
};

// update user data with the id
const upDateUserById = async (req, res, next) => {
  const id = req.params.id;
  const { username, email, password } = req.body;

  if (
    !username &&
    username.trim() == "" &&
    !email &&
    email.trim() == "" &&
    !password &&
    password.lenght > 6
  ) {
    return res.status(422).json({ message: "Invalid Error" });
  }
  let users;
  try {
    users = await user.findByIdAndUpdate(id, { username, email, password });
  } catch (error) {
    return next(error);
  }
  if (!users) {
    return req.status(500).json({ message: "Unabel to save the user" });
  }
  return res.status(200).json({ message: "Updated Succesfully" });
};

// delete user by id
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let users;
  try {
    users = await user.findByIdAndRemove(id);
  } catch (error) {
    return next(error);
  }
  if (!users) {
    return req.status(509).json({ message: "cant delete the user" });
  }
  return res.status(200).json({ message: "Deleted User Succecfully" });
};

// find user by id
const findUserById = async (req, res, next) => {
  const id = req.params.id;
  let users;
  try {
    users = await user.findById(id);
  } catch (error) {
    return next(error);
  }
  if (!users) {
    return req.status(404).json({ message: " User Dosent Exist" });
  }
  return res.status(200).json({ users });
};

// exporting functions
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.upDateUserById = upDateUserById;
exports.deleteUser = deleteUser;
exports.findUserById = findUserById;
