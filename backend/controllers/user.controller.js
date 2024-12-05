const { userModel } = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      fullName: { firstName, lastName },
      email,
      password,
    } = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await createUser(firstName, lastName, email, hashPassword);

    const token = user.generateAuthToken();

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };
