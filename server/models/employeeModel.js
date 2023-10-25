const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
firstName: String,
lastName: String,
startWorkYear: Number,
departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'department'
},
shifts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shift'
}]
}, {versionKey: false})

const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee

// class: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'class'
//   }