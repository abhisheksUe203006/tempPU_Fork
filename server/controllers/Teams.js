import Team from "../models/Team.js";
import Team from "../models/Team.js";

export const register_team = async (req, res) => {
  try {
    const { team } = req.body;
    const newTeam = new Team({
      team,
    });
    const savedTeam = await newTeam.save();
    res.status(201).json({ savedTeam, ok: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getTeamByID = async (req, res) => {
  try {
    const { Id } = req.body;
    const team = await Team.findById(Id);
    res.status(201).json({ team, success: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
