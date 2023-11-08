import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    taskID: String,
    team: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);
export default Team;
