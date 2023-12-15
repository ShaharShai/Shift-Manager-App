const Department = require('../models/departmentModel')

const getAll = async () => {
    const departments = await Department.find();
    return departments;
}

const update = async (updated) => {
    try {
        await Department.findByIdAndUpdate(updated.id, updated)
        return "Updated Successfully !"
    } catch (error) {
        throw new Error(`Error updating department: ${error.message}`)
    }
}

const remove = async (departmentId) => {
    try {
        await Department.findByIdAndDelete(departmentId);
        return "Deleted Successfully !"
    } catch (error) {
        throw new Error(`Error removing department: ${error.message}`);
    }
 }

const addDepartment = async (department) => {
    const newDepartment = new Department(department);
    try {
       await newDepartment.save();
        return "Added Successfully !";
    } catch (error) {
        throw new Error(`Error creating department: ${error.message}`);
    }
}


module.exports = { getAll, update, remove, addDepartment }