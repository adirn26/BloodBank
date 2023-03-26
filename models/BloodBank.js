const mongoose = require("mongoose")

const BloodBankSchema = new mongoose.Schema({
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
    }
}, {timestamps: true})

module.exports = mongoose.model("BloodBank", BloodBankSchema)