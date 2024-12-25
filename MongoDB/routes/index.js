const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctors");
const patientController = require("../controllers/patients");

// doctors routes
router.get(
  "/doctors-with-admissions",
  doctorController.getDoctorsWithAdmissions
);

router.get(
  "/doctors-without-admissions",
  doctorController.getDoctorsWithoutAdmissions
);

// patients route
router.get("/incomplete-admissions", patientController.getIncompleteAdmissions);

module.exports = router;
