import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// register a user
export const register = async (req, res) => {
  console.log("Hello");
  try {
    const { name, email, password, mobile, role } = req.body;
    // console.log(name+email+password+mobile+role);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: passwordHash,
      mobile: mobile,
      role: role,
    });
    console.log(newUser);
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json({ savedUser, ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// login
export const login = async (req, res) => {
  console.log("Login");
  try {
    const { email, password } = req.body;
    console.log(email + " " + password);
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("User does not exist.");
      return res
        .status(400)
        .json({ msg: "User does not exist. ", success: true });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = true;
    if (!isMatch) {
      console.log("Invalid credentials. ");
      return res
        .status(400)
        .json({ msg: "Invalid credentials. ", success: true });
    }

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    console.log("Success");
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.log(err);
    console.log(" not Success");
    res.status(500).json({ success: true, error: err.message });
  }
};
