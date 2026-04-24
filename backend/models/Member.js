const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    additionalDetails: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", memberSchema);
