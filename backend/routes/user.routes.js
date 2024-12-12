const express = require("express");
const userRoutes = express.Router();

const {
  userAuthenticationMiddleware,
} = require("../middlewares/authentication.middleware");

const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
  getUserProfile,
  logOutUser,
} = require("../controllers/user.controller");

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

userRoutes.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters."),
  ],
  loginUser
);

userRoutes.get("/profile", userAuthenticationMiddleware, getUserProfile);

userRoutes.get("/logout", userAuthenticationMiddleware, logOutUser);

module.exports = { userRoutes };
