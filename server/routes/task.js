import {
  register_task,
  getAllTaskByDepartment,
  getAllTaskByUser,
  getAllTaskByWorker,
  updateTask,
} from "../controllers/Tasks.js";
import express from "express";
const router = express.Router();
router.post("/register", register_task);
router.post("/getalltaskbydepartment", getAllTaskByDepartment);
router.post("/getalltaskbyuser", getAllTaskByUser);
export default router;
