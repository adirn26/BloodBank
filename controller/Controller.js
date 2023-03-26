const BloodBank = require("../models/BloodBank")
const Patient = require("../models/Patient")

exports.register = async(req,res) => {
    try{
        const newDonor = new BloodBank({
            name: req.body.name, 
            phone: req.body.phone, 
            bloodGroup: req.body.bloodGroup,
            pincode: req.body.pincode
        })

        await newDonor.save();
        res.status(200).send("Donor has been registerd!")
    }
    catch(err){
        console.log(err)
    }
}

exports.getAllDonor = async (req,res) => {
    try{
        const donors = await BloodBank.find()
        res.status(200).json(donors)
    } catch(err){
        console.log(err)
    }
}

exports.getDonor = async (req,res) => {
    try{
        const donors = await BloodBank.find({bloodGroup: req.params.blood})
        res.status(200).json(donors)
    } catch(err){
        console.log(err)
    }
}

exports.requestBlood = async (req, res) => {
    try{
        const newPatient = new Patient({
            name: req.body.name, 
            phone: req.body.phone, 
            bloodGroup: req.body.bloodGroup,
            pincode: req.body.pincode, 
            hospital: req.body.hospital
        })

        await newPatient.save()
        res.status(200).send("Blood request successfull!")
    } catch(err){
        console.log(err)
    }
}

exports.getAllRequest = async (req, res) => {
    try{
        const patients = await Patient.find();
        res.status(200).send(patients)
    }
    catch(err){
        console.log(err)
    }
}