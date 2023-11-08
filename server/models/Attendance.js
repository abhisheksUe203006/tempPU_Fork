import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
  {
    day: Date,
    workerList: Array,
  },
  { timestamps: true }
);

const Attendance = mongoose.model("Attendance", AttendanceSchema);

export default Attendance;
