const mongoose = require("mongoose");

const addmissionSchema = new mongoose.Schema({
  attending_doctor_id: mongoose.Schema.Types.ObjectId,
  patient_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Addmission", addmissionSchema);
