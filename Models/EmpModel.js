const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({

    Empname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    PasswordHash: {
        type: String,
        required: true
    }
});
const Emp = new mongoose.model('Employee', EmployeeSchema);
module.exports = Emp;