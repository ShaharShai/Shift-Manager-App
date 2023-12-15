const express = require('express');
const shiftsBLL = require('../BLL/shiftsBLL')
const jwtFunctions = require('../common/jwt')

const router = express.Router()

router.get('/', jwtFunctions.authenticateToken, async (req, res) => {
    const shifts = await shiftsBLL.getAll()
    res.send(shifts)
})

router.post('/new', jwtFunctions.authenticateToken, async (req, res) => {
    const shift = req.body;
    const result = await shiftsBLL.addNew(shift);
    res.send(result)
})

router.put('/update', jwtFunctions.authenticateToken, async (req, res) => {
    const updatedShift = req.body;
    const result = await shiftsBLL.update(updatedShift);
    res.send(result);
})

router.post('/allocateEmployee', jwtFunctions.authenticateToken, async (req,res) => {
     const shift = req.body;
     const employee = req.body;
     const result = await shiftsBLL.allocateEmployee(shift, employee);
     res.send(result);
})

module.exports = router;