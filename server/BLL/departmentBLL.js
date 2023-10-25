const Department = require('../models/departmentModel')

const getAll = async () => {
    const departments = await Department.find();
    return departments;
}

module.exports = { getAll }