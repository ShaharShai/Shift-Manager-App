const Shift = require('../models/shiftModel')
const Employee = require('../models/employeeModel')

const getAll = async () => {
    const shifts = await Shift.find()
    return shifts 
}

const addNew = async (newShift) => {
    const shift = new Shift(newShift)
    try {
        await shift.save();
        return ('Created Successfully !');
    } catch (error) {
        throw new Error(`Error creating new shift: ${error.message}`)
    }
}

const update = async (updated) => {
    try {
        await Shift.findByIdAndUpdate(updated.id, updated);
        return ('Updated Successfully !');
    } catch (error) {
        throw new Error(`Error updating new shift: ${error.message}`);
    }
}

const allocateEmployee = async (employeeId, shiftId) => {
     const employee = await Employee.findById(employeeId);
     const shift = await Shift.findById(shiftId);

     employee.shifts.push(shift);
     shift.employees.push(employee);

     employee.save();
     shift.save();
}

module.exports = { getAll, addNew, update, allocateEmployee }