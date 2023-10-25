const Shift = require('../models/shiftModel')

const getAll = async () => {
    const shifts = await Shift.find()
    return shifts 
}

module.exports = { getAll }