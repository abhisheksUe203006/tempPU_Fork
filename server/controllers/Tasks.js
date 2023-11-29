import { compareSync } from "bcrypt";
import Task from "../models/Task.js";
import User from "../models/User.js";

// REGISTER A TASK
export const register_task = async (req, res) => {
  console.log("Task1");
  try {
    const { name, phone, address, dept, id, details, team } = req.body;
    const user = await User.findById(id);
    console.log(id);
    if (!user) throw Error("No user found");
    let today = new Date().toLocaleDateString();
    const newTask = new Task({
      UserId: id,
      mobile: phone,
      department: dept,
      address,
      details,
      workerId: "Not assigned",
      assigndate: today,
      completionDate: "",
    });

    const savedTask = await newTask.save();
    console.log(savedTask);
    res.status(201).json({ savedTask, ok: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Read

export const getTaskById = async (req, res) => {
  const { id } = req.id;
  try {
    const task = Task.find({ id: id });
    res.send(200).json(task);
  } catch (err) {
    res.send(500).json(err);
  }
};

export const getAllTaskByDepartment = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  console.log(id);
  let findUser;
  try {
    findUser = await User.findById(id);
  } catch (err) {
    console.log("hello", err);
  }
  console.log(findUser);
  if (!findUser) {
    console.log("gg");
    return res.send(500).json({ msg: "Can't find" });
  }
  let department = req.body.dept;
  console.log("hi");
  try {
    const data = await Task.find({ department: department });
    console.log("here");
    res.status(200).json({ data, ok: true });
  } catch (err) {
    res.status(404).json({ msg: "Can't Find" });
  }
};

export const getAllTaskByUser = async (req, res) => {
  console.log("Hello");
  const { id } = req.body;
  let data;
  try {
    console.log(res.body);
    data = await Task.find({ UserId: id });
    console.log(data);
    res.status(200).json({ data, ok: true });
  } catch (err) {
    res.status(404).json({ msg: "Can't find" });
  }
};

export const getAllTaskByWorker = async (req, res) => {
  const id = req.params.id;
  let data;
  try {
    data = Task.find({ WorkerId: id });
    res.send(200).json(data);
  } catch (err) {
    res.status(404).json({ msg: "Can't find" });
  }
};

// UPDATE TASK
export const updateTask = async (req, res, next) => {
  const { completionDate, status, workerId, details, remarks } = req.body;
  const id = req.params.id;
  let updateTask;

  try {
    updateTask = await User.findByIdAndUpdate(id, {
      completionDate,
      status,
      workerId,
      details,
      remarks,
    });
  } catch (err) {
    console.log(err);
  }

  if (!updateTask) res.status(500).json({ msg: "Unable to Update" });

  return res.status(200).json({ msg: updateUser });
};

// Assign Worker
export const assignWorker = async (req, res) => {
  try {
    console.log(req.body);
    const { workerIdArray, taskIdarray } = req.body;
    await taskIdarray.forEach((element) => {
      Task.findByIdAndUpdate(element, {
        w_h_Id: workerIdArray,
      });
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Assign helper
// let x = y

// Filter
export const filter = async (req, res, next) => {
  const { startDate, endDate } = req.body;
  try {
    const data = await Task.find();
    const filteredData = data.filter(
      (obj) => obj.date >= startDate && obj.date <= endDate
    );
    res.send(200).json(filteredData);
  } catch (err) {
    res.status(404).json({ msg: "Can't find" });
  }
};

export const filter_30 = async (req, res, next) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 30);

  try {
    const data = await Task.find();
    const filteredData = data.filter(
      (obj) => obj.date >= startDate && obj.date <= endDate
    );
    res.send(200).json(filteredData);
  } catch (err) {
    res.status(404).json({ msg: "Can't find" });
  }
};

export const removeWorker = async (req, res) => {
  const { taskId, workerIdArray } = req.body;

  try {
    const arr = Task.findById(taskId);
    Task.findByIdAndUpdate(taskId, {
      w_h_Id: workerIdArray.filter((element) => {}),
    });
  } catch (err) {}
};

export const addWorker = async (req, res) => {
  const { taskId, workerIdArray } = req.body;
  let arr;
  try {
    arr = Task.findById(taskId);
    Task.findByIdAndUpdate(taskId, {
      w_h_Id: workerIdArray.filter((element) => {}),
    });
  } catch (err) {
    res.status(404).json(err);
  }
};
