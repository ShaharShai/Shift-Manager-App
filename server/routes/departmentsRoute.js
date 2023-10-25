const express = require('express')
const departmentBLL = require('../BLL/departmentBLL')
const jwtFunctions = require('../common/jwt')

const router = express.Router()

router.get('/', jwtFunctions.authenticateToken, async (req, res) => {
const departments = await departmentBLL.getAll();
res.send(departments);
})

module.exports = router