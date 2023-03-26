const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    phone: {
        type: String, 
        required:true
    }, 
    bloodGroup: {
        type: String, 
        required: true
    }, 
    pincode: {
        type: Number, 
        required: true
    }, 
    hospital: {
        type: String, 
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Patient", PatientSchema )