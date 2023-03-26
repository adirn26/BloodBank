const express = require("express");
const { register, getAllDonor, getDonor, requestBlood, getAllRequest } = require("../controller/Controller");


const router = express.Router();

router.post("/register", register)

router.get("/getAllDonors", getAllDonor)

router.get("/getDonor/:blood", getDonor)

router.post("/requestBlood", requestBlood)

router.get("/getAllPatients", getAllRequest)

module.exports = router;