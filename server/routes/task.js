import {
  register_task,
  getAllTaskByDepartment,
  getAllTaskByUser,
  getAllTaskByWorker,
  updateTask,
  assignWorker,
} from "../controllers/Tasks.js";
import express from "express";
const router = express.Router();
router.post("/register", register_task);
router.post("/getalltaskbydepartment", getAllTaskByDepartment);
router.post("/getalltaskbyuser", getAllTaskByUser);
router.post("/getalltaskbyworker", getAllTaskByWorker);
router.post("/assignworker", assignWorker);
export default router;
