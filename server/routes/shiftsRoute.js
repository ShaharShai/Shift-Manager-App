const express = require('express');
const shiftsBLL = require('../BLL/shiftsBLL')
const jwtFunctions = require('../common/jwt')

const router = express.Router()

router.get('/', jwtFunctions.authenticateToken, async (req, res) => {
    const shifts = await shiftsBLL.getAll()
    res.send(shifts)
})

module.exports = router;