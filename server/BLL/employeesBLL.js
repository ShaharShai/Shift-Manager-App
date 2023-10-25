const Employee = require("../models/employeeModel");

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

module.exports = { getAll, getByDepartment, editEmployee, deleteEmployee, addEmployee };
