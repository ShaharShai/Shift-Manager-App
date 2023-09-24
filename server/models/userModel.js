const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
fullName: String,
webServiceId: Number
}, {versionKey: false})

const User = mongoose.model('user', userSchema)

module.exports = User