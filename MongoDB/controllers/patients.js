const Patient = require("../models/Patient");
const Admission = require("../models/Addmission");

// Query 3: Patients whose Admissions can't be completed
exports.getIncompleteAdmissions = async (req, res) => {
  const result = await Admission.aggregate([
    {
      $lookup: {
        from: "doctors",
        localField: "attending_doctor_id",
        foreignField: "_id",
        as: "doctor_details",
      },
    },
    {
      $match: {
        doctor_details: { $eq: [] },
      },
    },
    {
      $lookup: {
        from: "patients",
        localField: "patient_id",
        foreignField: "_id",
        as: "patient_details",
      },
    },
    {
      $unwind: "$patient_details",
    },
    {
      $project: {
        _id: 0,
        "patient_details.name": 1,
      },
    },
  ]);
  res.json(result);
};
