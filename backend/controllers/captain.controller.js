const { blacklistTokenModel } = require("../models/blacklist.model");
const { captainModel } = require("../models/captain.model");

const { createCaptain } = require("../services/captain.service");

const { validationResult } = require("express-validator");

const registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;
    const { firstName, lastName } = fullName;
    const { color, plate, capacity, vehicleType } = vehicle;

    const isCaptainExists = await captainModel.findOne({ email });

    if (isCaptainExists) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain(
      firstName,
      lastName,
      email,
      hashPassword,
      color,
      plate,
      capacity,
      vehicleType
    );

    const token = captain.generateAuthToken();

    res.status(200).json({ captain, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(401).json({ message: "Captain not found" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);

    res.status(200).json({ captain, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaptainProfile = async (req, res) => {
  try {
    const captain = req.captain;
    res.status(200).json({ captain });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logOutCaptain = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenModel.create({ token });

    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logOutCaptain,
};
