import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    assignDate: {
      type: String,
    },
    completionDate: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    teamID: {
      type: String,
      required: true,
    },
    w_h_IDs: {
      type: Array,
      default: [],
    },

    attendanceID: {
      type: Array,
      default: [[]],
    },
    mobile: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      max: 50,
    },
    details: {
      type: String,
      required: true,
      max: 100,
    },
    remarks: {
      type: String,
      max: 100,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", TaskSchema);

export default Task;
