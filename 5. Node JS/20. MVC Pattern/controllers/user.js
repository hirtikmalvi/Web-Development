const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const dbUsers = await User.find({});
  return res.json(dbUsers);
};

const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "success" });
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found!" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Malvi" });
  return res.json({ msg: "Updated Successfully" });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ msg: "Deleted Successfully" });
};
module.exports = {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
