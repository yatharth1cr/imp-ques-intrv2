const Doctor = require("../models/Doctor");
const Admission = require("../models/Addmission");

// Query 1: Doctors with Admissions
exports.getDoctorsWithAdmissions = async (req, res) => {
  const result = await Doctor.aggregate([
    {
      $lookup: {
        from: "admissions",
        localField: "_id",
        foreignField: "attending_doctor_id",
        as: "admissions",
      },
    },
    {
      $match: {
        admissions: { $ne: [] },
      },
    },
  ]);
  res.json(result);
};

// Query 2: Doctors without Admissions
exports.getDoctorsWithoutAdmissions = async (req, res) => {
  const result = await Doctor.aggregate([
    {
      $lookup: {
        from: "admissions",
        localField: "_id",
        foreignField: "attending_doctor_id",
        as: "admissions",
      },
    },
    {
      $match: {
        admissions: { $eq: [] },
      },
    },
  ]);
  res.json(result);
};
