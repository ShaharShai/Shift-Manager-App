const express = require('express');
const employeesBLL = require('../BLL/employeesBLL')
const jwtFunctions = require('../common/jwt')

const router = express.Router();

router.get("/", jwtFunctions.authenticateToken, async (req, res) => {
const employees = await employeesBLL.getAll();
res.send(employees);
})

router.get("/byDepartment/:id", jwtFunctions.authenticateToken, async (req, res) => {
    const departmentId = req.params.id;
    const employees = await employeesBLL.getByDepartment(departmentId);
    res.send(employees);
})

router.put("/edit", jwtFunctions.authenticateToken, async (req, res) => {
    const edited = req.body;
    const result = await employeesBLL.editEmployee(edited);
    res.send(result);
})

router.delete("/delete/:id", jwtFunctions.authenticateToken, async (req, res) => {
const deletedId = req.params.id;
const result = await employeesBLL.deleteEmployee(deletedId);
res.send(result);
})

router.post("/add", jwtFunctions.authenticateToken, async (req, res) => {
    const newEmployeeData = req.body;
    const result = await employeesBLL.addEmployee(newEmployeeData);
    res.send(result);
})

router.post("/addShift", jwtFunctions.authenticateToken, async (req, res) => {
    const employee = req.body.employee;
    const shift = req.body.shift;
    const result = await employeesBLL.addEmployeeToShift(employee, shift);
    res.send(result);
})


module.exports = router;