const mongoose = require("mongoose");

// schema confi
const Schema = mongoose.Schema;

// schema model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLenght: 6,
  },
});

// exporting
module.exports = mongoose.model("User", userSchema);
