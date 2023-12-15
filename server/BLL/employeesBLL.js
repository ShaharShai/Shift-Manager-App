const Employee = require("../models/employeeModel");
const Shift = require("../models/shiftModel");

const getAll = async () => {
  try {
    const employeesData = await Employee.find();
    const employeesList = await Promise.all(
      employeesData.map(async (employee) => {
        const shifts = await Employee.findById(employee._id).populate("shifts");
        return { employees: shifts };
      })
    );
    return employeesList;
  } catch (error) {
    throw new Error("Error fetching employees: " + error.message);
  }
};

const getByDepartment = async (departmentId) => {
  try {
    const employeesData = await Employee.find({ departmentId: departmentId });
    return employeesData;
  } catch (error) {
    throw new Error("Error fetching employees: " + error.message);
  }
};

const editEmployee = async (edited) => {
  try {
    await Employee.findByIdAndUpdate(edited._id, edited);
    return "Edited Successfully !"
  } catch (error) {
    throw new Error("Error editing employees: " + error.message);
  }
} 

const deleteEmployee = async (deletedId) => {
  try {
    await Employee.findByIdAndRemove(deletedId);
    return "Deleted Successfully !";
  } catch (error) {
    throw new Error("Error deleting employee: " + error.message);
  }
}

const addEmployee = async (newEmployeeData) => {
  const newEmployee = new Employee(newEmployeeData)
  try {
    await newEmployee.save();
    return "Added Successfully !"
  } catch (error) {
    throw new Error("Error adding employee: " + error.message);
  }
}

const addEmployeeToShift = async (employee, shift) => {
  try {
    const editedEmployee = await Employee.findById(employee);
    const editedShift = await Shift.findById(shift);

    editedEmployee.shifts.push(editedShift);
    editedShift.employees.push(editedEmployee);

    editedEmployee.save();
    editedShift.save();

    return "Added to shift Successfully !";
  } catch (error) {
    throw new Error("Error adding employee to shift: " + error.message);
  }
}

module.exports = { getAll, getByDepartment, editEmployee, deleteEmployee, addEmployee, addEmployeeToShift };
