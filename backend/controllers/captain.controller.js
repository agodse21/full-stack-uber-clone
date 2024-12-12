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

module.exports = { registerCaptain };
