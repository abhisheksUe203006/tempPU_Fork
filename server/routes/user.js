import { register_employee } from "../controllers/Users.js";
import express from "express";
const router = express.Router();
router.post("/register_employee", register_employee);
export default router;
