const express = require("express");
const captainRoutes = express.Router();
const { body } = require("express-validator");

const { registerCaptain } = require("../controllers/captain.controller");

captainRoutes.post(
  "/register",
  [
    body("email").isEmail().withMessage("Email is not valid"),

    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 characters."),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters."),

    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters."),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters."),

    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1."),

    body("vehicle.vehicleType")
      .isIn(["motorcycle", "car", "auto"])
      .withMessage("Vehicle type must be motorcycle, car or auto"),
  ],
  registerCaptain
);

module.exports = { captainRoutes };
