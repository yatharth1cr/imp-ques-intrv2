const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
