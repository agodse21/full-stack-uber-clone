const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "First Name must be at least 3 characters."],
    },
    lastName: {
      type: String,
      minlength: [3, "Last Name must be at least 3 characters."],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters."],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters."],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 characters."],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1."],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["motorcycle", "car", "auto"],
    },
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
  },
  //   role: {
  //     type: String,
  //     default: "captain",
  //   },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = { captainModel };
