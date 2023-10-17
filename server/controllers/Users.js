import User from "../models/User.js";
import Task from "../models/Task.js";
import bcrypt from "bcrypt";

// CREATE A EMPLOYEE
export const register_employee = async (req, res) => {
  try {
    console.log(req.body);
    const { userId } = req.body;
    const { name, email, password, mobile, role, department } = req.body;
    console.log(password);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      mobile,
      role,
      department,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log("hi");
    res.status(500).json({ error: err.message });
  }
};

// GET ALL EMPLOYEE
export const getAllEmployee = async (req, res) => {
  try {
    const { role, type } = req.params;
    const data = User.find({ role: role });
    res.send(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE EMPLOYEE
export const update = async (req, res, next) => {
  const { name, email, password, role, mobile, department } = req.body;
  const id = req.params.id;
  let updateUser;

  try {
    updateUser = await User.findByIdAndUpdate(id, {
      name,
      age,
      email,
      password,
      role,
      mobile,
      department,
    });
  } catch (err) {
    console.log(err);
  }

  if (!updateUser) res.status(500).json({ msg: "Unable to Update" });

  return res.status(200).json({ msg: updateUser });
};

// DELETE EMPLOYEE
export const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  let delUser;
  try {
    delUser = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!delUser) return res.status(500).json({ msg: "Can't find" });

  return res.status(200).json({ msg: delUser });
};
