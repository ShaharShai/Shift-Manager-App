const express = require('express')
const departmentBLL = require('../BLL/departmentBLL')
const jwtFunctions = require('../common/jwt')

const router = express.Router()

router.get('/', jwtFunctions.authenticateToken, async (req, res) => {
    const departments = await departmentBLL.getAll();
    res.send(departments);
})

router.put('/update', jwtFunctions.authenticateToken, async (req, res) => {
    const updated = req.body;
    const result = await departmentBLL.update(updated);
    res.send(result);
})

router.delete('/delete', jwtFunctions.authenticateToken, async (req, res) => {
    const departmentId = req.params;
    const result = await departmentBLL.delete(departmentId);
    res.send(result);
})

router.post('/add', jwtFunctions.authenticateToken, async (req, res) => {
    const departmentToAdd = req.body;
    const result = await departmentBLL.addDepartment(departmentToAdd);
    res.send(result);
})

module.exports = router