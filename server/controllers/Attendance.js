import Attendance from "../models/Attendance";

export const register_attendance = async (req, res) => {
  try {
    const { attendance } = req.body;
    const newTeam = new Attendance({
      attendance,
    });
    const savedAttendance = await newTeam.save();
    res.status(201).json({ savedAttendance, ok: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getAttendanceById = async (req, res) => {
  try {
    const { Id } = req.body;
    const newAttendance = await Attendance.findById(Id);
    const savedAttendance = await newAttendance.save();
    res.status(201).json({ savedAttendance, ok: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
