const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema(
  {
    setUp: {
      type: String,
      required: [true, "setup required"],
      minlength: [10, "setup requires at least 10 characters"],
    },
    punchline: {
      type: String,
      required: [true, "punchline required"],
      minlength: [3, "punchline requires at least 3 characters"],
    },
  },
  { timestamps: true }
);

const joke = mongoose.model("joke", jokeSchema);

module.exports = joke;
