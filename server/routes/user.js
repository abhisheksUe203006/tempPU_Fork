import {
  getAllEmployee,
  register_employee,
  getAllEmployeeByDepartment,
} from "../controllers/Users.js";
import express from "express";
const router = express.Router();
router.post("/register_employee", register_employee);
router.post("/getallemployee", getAllEmployee);
router.post("/getallemployeebydepartment", getAllEmployeeByDepartment);
export default router;
