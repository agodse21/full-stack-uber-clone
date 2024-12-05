const express = require("express");
const userRoutes = express.Router();

const { body } = require("express-validator");

const { registerUser } = require("../controllers/user.controller");

userRoutes.post(
  "/register",
  [
    body("email").isEmail().withMessage("Email is not valid"),

    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 characters."),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters."),
  ],
  registerUser
);

module.exports = { userRoutes };
